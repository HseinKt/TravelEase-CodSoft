

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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->unsignedBigInteger('flight_id')->nullable(); 
            $table->unsignedBigInteger('car_id')->nullable(); 
            $table->unsignedBigInteger('hotel_id')->nullable();  
            $table->rememberToken();
            $table->timestamps();
            $table->foreign('flight_id')->references('id')->on('flights');
            $table->foreign('car_id')->references('id')->on('cars');
            $table->foreign('hotel_id')->references('id')->on('hotels');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
