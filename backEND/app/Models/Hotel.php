<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'departure_place',
        'departure_time',
        'arrival_time',
        'adults',
        'children',
        'price',
        'created_at',
        'updated_at',
    ];
}
