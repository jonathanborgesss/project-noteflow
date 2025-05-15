<?php

use App\Http\Controllers\AuthController;

Route::post('/signup', [AuthController::class, 'login']);
Route::post('/signin', [AuthController::class, 'register']);

