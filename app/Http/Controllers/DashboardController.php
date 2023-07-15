<?php

namespace App\Http\Controllers;

use App\Models\Sisdikat\MdlUser;
use App\Models\Sisdikat\MstPembina;
use Inertia\Inertia;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
  /**
   * Display a listing of the resource.
   */

  public function index()
  {
    // $list_peserta = MdlUser::limit(10)->get();
    return Inertia::render('dashboard/Overview', [
      "listpeserta" => MdlUser::limit(10)->get()
    ]);
  }
  public function signin()
  {


    return Inertia::render('auth/SignIn', [
    ]);
  }
  public function peserta()
  {
    return Inertia::render('dashboard/Peserta', []);
  }
  public function listpeserta()
  {
    // $list_peserta = MdlUser::limit(20)->get();

    return Inertia::render('dashboard/ListPeserta', [
      "listpeserta" => MdlUser::limit(20)->get()
    ]);
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
    // $mst_pembina = MstPembina::all();
    return Inertia::render('dashboard/Fasilitator', [
      "fasilitator" => MstPembina::all()
    ]);
  }
  public function detailpeserta()
  {
    return Inertia::render('dashboard/DetailPeserta', []);
  }
  public function detailfasilitator($NIK)
  {

    return Inertia::render('dashboard/DetailFasilitator', [

      "detailfasilitator" => MstPembina::where('NIK', $NIK)->get()
    ]);
  }
  // public function detailfasilitator()
  // {
  //   // $NIK = 1;
  //   // $detail_mst_pembina = MstPembina::where('NIK', $NIK)->get();
  //   return Inertia::render('dashboard/DetailFasilitator', [

  //     // "detailfasilitator" => $detail_mst_pembina
  //   ]);
  // }
  public function leaf()
  {
    return Inertia::render('dashboard/Leaf', []);
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