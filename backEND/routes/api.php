<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Auth::routes();

Route::group(["prefix" => "v0.0.1"], function (){
    Route::post('/login', [AuthController::class, "login"]);
    Route::post('/register', [AuthController::class, "register"]);
    // Route::post('/booking_hotel', [AuthController::class, "bookingHotel"]);

    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('/booking_hotel', [AuthController::class, "bookingHotel"]);
        Route::get('/getAllUsers', [AuthController::class, "getAllUsers"]);
    });
});

