<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DocumentRequest;

class DocumentRequestController extends Controller
{
    public function index()
    {
        $documentRequests = DocumentRequest::with(['user', 'document'])->get();
        return response()->json($documentRequests);
    }
}
