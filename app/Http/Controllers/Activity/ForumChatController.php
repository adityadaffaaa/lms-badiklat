<?php

namespace App\Http\Controllers\Activity;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Activity\Leaf;
use App\Models\Activity\Topik;
use App\Http\Controllers\Controller;

class ForumChatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $data_leaf = Leaf::with(['pesertas', 'topiks', 'threads'])->limit(10)->orderBy('id', 'DESC')->get();
        return Inertia::render('dashboard/ForumChat', [
            "dataLeaf" => $data_leaf
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
        $data_leaf = Leaf::with(['fasilitator', 'pesertas', 'topiks'])->where('id', $id)->get();
        return Inertia::render('dashboard/Leaf', [
            "dataLeaf" => $data_leaf
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