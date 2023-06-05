<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    //
    public function beranda()
    {
        return Inertia::render('user/Beranda', []);
    }
    public function diklat()
    {
        return Inertia::render('user/Kursus', []);
    }
    public function fasilitator()
    {
        return Inertia::render('user/Fasilitator', []);
    }
    public function tanyakami()
    {
        return Inertia::render('user/TanyaKami', []);
    }


}