<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request)
{
    $validator = Validator::make($request->all(), [
        'name'     => 'required|string|max:255',
        'email'    => 'required|string|email|unique:user',
        'password' => 'required|string|min:6',
        'fkImage'  => 'nullable|integer',
        'fkAccess' => 'nullable|integer',
    ]);

    if ($validator->fails()) {
        return response()->json([
            'errors' => $validator->errors()
        ], 422);
    }

    $user = User::create([
        'name'     => $request->name,
        'email'    => $request->email,
        'password' => Hash::make($request->password),
        'fkImage'  => $request->fkImage ?? 1,
        'fkAccess' => $request->fkAccess ?? 1,
    ]);

    return response()->json([
        'message' => 'User registered successfully',
        'user'    => $user,
        "response" => true,
        "redirect" => "/"
    ], 201);
}


    public function login(Request $request)
    {
        // Validate input
        $request->validate([
            'email'    => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        // Check user & password
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Invalid email or password'
            ], 401);
        }

        return response()->json([
            'message' => 'Login successful',
            'user'    => $user,
            "response" => true,
            "redirect" => "/"
        ]);
    }
}
