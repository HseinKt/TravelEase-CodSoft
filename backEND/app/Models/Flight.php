<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'departure_airport',
        'arrival_airport',
        'departure_time',
        'adults',
        'children',
        'price',
        'flight_type',
        'round_trip_flight_id',
        'multi_city_flight_id',
        'created_at',
        'updated_at',
    ];
}
