<?php

namespace App\Http\Controllers\Peserta;

use App\Models\Activity\Leaf;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Peserta\Peserta;
use App\Http\Controllers\Controller;

class PesertaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $dataLeaf = Leaf::with('pesertas')->limit(10)->orderBy('id', 'DESC')->get();
        return Inertia::render('dashboard/Peserta', [
            "pesertaData" => Peserta::limit(10)->get(),
            "leafData" => $dataLeaf
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
        $listPeserta = Leaf::with('pesertas')->where('id', $id)->get();
        return Inertia::render('dashboard/ListPeserta', [
            "dataLeafPeserta" => $listPeserta
        ]);
    }
    public function show_detail(string $id)
    {
        //
        $peserta = Peserta::where('id', $id)->get();
        return Inertia::render('dashboard/DetailPeserta', [
            "dataPeserta" => $peserta
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