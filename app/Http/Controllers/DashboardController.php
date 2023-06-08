<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    return Inertia::render('dashboard/Overview', []);
  }
  public function peserta()
  {
    return Inertia::render('dashboard/Peserta', []);
  }
  public function listpeserta()
  {
    return Inertia::render('dashboard/ListPeserta', []);
  }
  public function panitia()
  {
    return Inertia::render('dashboard/Panitia', []);
  }
  public function listfasilitator()
  {
    return Inertia::render('dashboard/ListFasilitator', []);
  }
  public function listpesertapanitia()
  {
    return Inertia::render('dashboard/ListPesertaPanitia', []);
  }
  public function forumchat()
  {
    return Inertia::render('dashboard/ForumChat', []);
  }
  public function jadwal()
  {
    return Inertia::render('dashboard/Jadwal', []);
  }
  public function fasilitator()
  {
    return Inertia::render('dashboard/Fasilitator', []);
  }
  public function detailpeserta()
  {
    return Inertia::render('dashboard/DetailPeserta', []);
  }
  public function detailfasilitator()
  {
    return Inertia::render('dashboard/DetailFasilitator', []);
  }
  public function kelompok()
  {
    return Inertia::render('dashboard/Kelompok', []);
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