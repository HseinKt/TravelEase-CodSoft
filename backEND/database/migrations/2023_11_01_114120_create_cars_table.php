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
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('departure_place');
            $table->dateTime('departure_time');
            $table->dateTime('arrival_time');
            $table->time('pick_up_time');
            $table->time('drop_off_time');
            $table->float('price')->unsigned();
            $table->unsignedBigInteger('hotel_id');
            $table->timestamps();
            $table->foreign('hotel_id')->references('id')->on('hotels');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};
