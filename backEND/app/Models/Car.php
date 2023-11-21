<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'departure_place',
        'departure_time',
        'arrival_time',
        'pick_up_time',
        'drop_off_time',
        'price',
        'hotel_id',
        'created_at',
        'updated_at',
    ];
}
