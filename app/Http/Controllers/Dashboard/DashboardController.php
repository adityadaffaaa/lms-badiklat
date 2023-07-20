<?php

namespace App\Http\Controllers\Dashboard;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Activity\Leaf;
use App\Models\Activity\Jadwal;
use App\Models\Panitia\Panitia;
// use App\Models\Sisdikat\MdlUser;
use App\Models\Peserta\Peserta;
use App\Http\Controllers\Controller;
use App\Models\Fasilitator\Fasilitator;

class DashboardController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    //
    $recent_leaf = Leaf::with(['pesertas'])->latest()->limit(3)->get();
    $popular_leaf = Leaf::with(['pesertas'])->orderBy('max_peserta', 'DESC')->limit(3)->get();
    $data_jadwal = Jadwal::latest()->limit(2)->get();
    $data_panitia = Panitia::all();
    return Inertia::render('dashboard/Overview', [
      "listPeserta" => Peserta::limit(10)->get(),
      'countPeserta' => Peserta::count(),
      'countLeaf' => Leaf::count(),
      'countFasilitator' => Fasilitator::count(),
      'countPanitia' => Panitia::count(),
      'recentLeaf' => $recent_leaf,
      'popularLeaf' => $popular_leaf,
      'dataJadwal' => $data_jadwal,
      'panitiaData' => $data_panitia
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