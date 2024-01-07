<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use App\Http\Requests\LoginRequest; // Correction ici
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Etudiant;
use App\Models\Secretaire;
use App\Models\Admin;


use Illuminate\Support\Facades\Hash;
class AuthController extends Controller {
    public function signup(SignupRequest $request) {
        $data = $request->validated();
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }
 

    public function logout(Request $request)
    {
        //** @var User $user */
        $user = $request->user();
        $user->currentAccessToken()->delete();
        return response('', 204);
    }







    public function loginStudent(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $student = Etudiant::where('email', $credentials['email'])->first();

        if (!$student || !Hash::check($credentials['password'], $student->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $student->createToken('auth_token')->plainTextToken;

        return response()->json(['user' => $student, 'token' => $token,'userType' => 'etudiant' ]);
    }




    public function login_secretary(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $Secretaire = Secretaire::where('email', $credentials['email'])->first();

        if (!$Secretaire || !Hash::check($credentials['password'], $Secretaire->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $Secretaire->createToken('auth_token')->plainTextToken;

        return response()->json(['user' => $Secretaire, 'token' => $token,'userType' => 'secretaire' ]);
    }


    public function loginAdmin(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
    
        $admin = Admin::where('email', $credentials['email'])->first();
    
        if (!$admin || !Hash::check($credentials['password'], $admin->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    
        $token = $admin->createToken('auth_token')->plainTextToken;
    
        return response()->json(['user' => $admin, 'token' => $token,'userType' => 'admin' ]);
        
    }
    


















}
