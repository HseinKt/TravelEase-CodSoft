<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('flights', function (Blueprint $table) {
            $table->id();
            $table->string('departure_airport');
            $table->string('arrival_airport');
            $table->dateTime('departure_time');
            $table->integer('adults');
            $table->integer('children');
            $table->float('price')->unsigned();
            $table->enum('flight_type', ['OneWay', 'RoundTrip', 'MultiCity']);
            $table->unsignedBigInteger('round_trip_flight_id');
            $table->unsignedBigInteger('multi_city_flight_id');
            $table->timestamps();
            $table->foreign('round_trip_flight_id')->references('id')->on('round_trip_flights');
            $table->foreign('multi_city_flight_id')->references('id')->on('multi_city_flights');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('flights');
    }
};
