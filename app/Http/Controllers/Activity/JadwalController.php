<?php

namespace App\Http\Controllers\Activity;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Activity\Jadwal;
use App\Http\Controllers\Controller;

class JadwalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $data_jadwal = Jadwal::with(['fasilitator', 'pesertas', 'leaf'])->latest()->limit(30)->get();
        return Inertia::render('dashboard/Jadwal', [
            'jadwalData' => $data_jadwal
        ]);
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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}