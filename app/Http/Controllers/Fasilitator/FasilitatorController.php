<?php

namespace App\Http\Controllers\Fasilitator;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Fasilitator\Fasilitator;

class FasilitatorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $data_fasiliator = Fasilitator::with('satuan_kerja')->limit(10)->get();
        return Inertia::render('dashboard/Fasilitator', [
            "fasilitatorData" => $data_fasiliator
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
        $data_detail_fasiliator = Fasilitator::with(['satuan_kerja'])->where('id', $id)->get();
        // dd($data_detail_fasiliator);
        return Inertia::render('dashboard/DetailFasilitator', [
            "fasilitatorDetailData" => $data_detail_fasiliator
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