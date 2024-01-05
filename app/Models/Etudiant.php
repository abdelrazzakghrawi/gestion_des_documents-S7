<?php

 namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Etudiant extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'surname', 'cin', 'datedenaissance', 'mobile_number',
        'address_line1', 'address_line2', 'email', 'filliere', 'annee',
        'Country', 'Region', 'paiement_status'
    ];
}
