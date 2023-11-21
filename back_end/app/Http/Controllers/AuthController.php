<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Intervention\Image\Facades\Image;
use App\Models\User;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register']]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ],400);
        }

        $user = Auth::user();
        $token = $user->createToken('authToken')->plainTextToken;
        $token = explode('|', $token)[1];
        
        return response()->json([
            'status' => 'success',
            'user' => $user,
            'authorization' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function register(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        $token = Auth::login($user);
        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorization' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }
    
    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function bookingHotel(Request $request)
    {
        $user = Auth::user();
        
        if ($user) 
        {
            if($request->departurePlace == "" || $request->departureTime == "" || $request->arrivalTime == "" || $request->adults == "" || $request->children == "" || $request->price == "")
            {
                return response()->json([
                    'status' => 'please make sure all the data are filled in',
                ]);
            }

            $hotelData = [
                'departure_place' => $request->departurePlace,
                'departure_time' => $request->departureTime,
                'arrival_time' => $request->arrivalTime,
                'adults' => $request->adults,
                'children' => $request->children,
                'price' => $request->price,
            ];

            $hotel = Hotel::create($hotelData);

            if($hotel)
            {
                $user->hotel_id = $hotel->id;
                $user->save();
                return response()->json([
                    'status' => 'success',
                    'message' => 'Hotel booked successfully'
                ]);
            }else 
            {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Failed to book hotel.',
                ]);
            }
        }
        else 
        {
            return response()->json([
                'status' => 'error 2',
                'message' => 'Failed to book hotel.',
            ]);
        }
    }
}
