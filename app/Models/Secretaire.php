<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Secretaire extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'surname', 'cin', 'datedenaissance', 'mobile_number',
        'address_line1', 'email',
        'Country', 'Region'
    ];

}
