<?php

namespace App\Http\Controllers\Credential;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Panitia\Panitia;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class SignInController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('auth/Login');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function authenticate(Request $request)
    {
        //
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // dd($credentials);


        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended();
        }


        return back()->withErrors([
            'loginError' => 'Login Gagal!'
        ]);
    }

    /**
     * Display the specified resource.
     */
    // public function show(string $id)
    // {
    //     //
    // }

    // /**
    //  * Show the form for editing the specified resource.
    //  */
    // public function edit(string $id)
    // {
    //     //
    // }

    // /**
    //  * Update the specified resource in storage.
    //  */
    // public function update(Request $request, string $id)
    // {
    //     //
    // }

    // /**
    //  * Remove the specified resource from storage.
    //  */
    // public function destroy(string $id)
    // {
    //     //
    // }
}