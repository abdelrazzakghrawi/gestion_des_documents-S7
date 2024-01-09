<?php

namespace App\Http\Controllers;
use App\Models\DocumentRequest;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DocumentRequestController extends Controller
{
    // Enregistrer une nouvelle demande
    public function store(Request $request) {
        $requestData = $request->validate([
            'user_id' => 'required|integer',
            'document_type' => 'required|string',
        ]);

        $documentRequest = DocumentRequest::create($requestData);
        return response()->json(['message' => 'Demande enregistrée', 'data' => $documentRequest]);
    }

    // Récupérer toutes les demandes
    public function index() {
        $requests = DocumentRequest::where('status', 'pending')->get();
        return response()->json($requests);
    }

    // Accepter une demande
    public function accept($id) {
        $request = DocumentRequest::findOrFail($id);
        $request->update(['status' => 'accepted']);
        return response()->json(['message' => 'Demande acceptée']);
    }

    // Rejeter une demande
    public function reject($id) {
        $request = DocumentRequest::findOrFail($id);
        $request->update(['status' => 'rejected']);
        return response()->json(['message' => 'Demande rejetée']);
    }
}
