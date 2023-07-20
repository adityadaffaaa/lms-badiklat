<?php

namespace App\Http\Controllers\Panitia;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Activity\Leaf;
use App\Models\Panitia\Panitia;
use App\Models\Peserta\Peserta;
use App\Http\Controllers\Controller;
use App\Models\Fasilitator\Fasilitator;

class PanitiaController extends Controller
{
    //

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $data_panitia = Panitia::with('satuan_kerja')->get();
        return Inertia::render('dashboard/Panitia', [
            'dataPanitia' => $data_panitia
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
        $data_leaf_fasilitators = Leaf::with(['fasilitator', 'pesertas'])->get();
        return Inertia::render('dashboard/ListFasilitator', [
            'dataLeafFasilitator' => $data_leaf_fasilitators,
        ]);
    }
    public function show_detail(string $id)
    {
        //
        $peserta = Peserta::limit(10)->get();
        return Inertia::render('dashboard/ListPesertaPanitia', [
            'peserta' => $peserta,
        ]);
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