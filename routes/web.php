<?php

// use App\Http\Controllers\ProfileController;
// use Illuminate\Foundation\Application;
// use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [DashboardController::class, 'index']);
Route::get('/peserta', [DashboardController::class, 'peserta']);
Route::get('/forum-chat', [DashboardController::class, 'forumchat']);
Route::get('/jadwal', [DashboardController::class, 'jadwal']);
Route::get('/fasilitator', [DashboardController::class, 'fasilitator']);
Route::get('/peserta/detail-peserta', [DashboardController::class, 'detailpeserta']);
Route::get('/peserta/list-peserta', [DashboardController::class, 'listpeserta']);
Route::get('/forum-chat/kelompok', [DashboardController::class, 'kelompok']);
Route::get('/fasilitator/detail-fasilitator', [DashboardController::class, 'detailfasilitator']);
Route::get("/panitia", [DashboardController::class, 'panitia']);
Route::get("/panitia/list-fasilitator", [DashboardController::class, 'listfasilitator']);
Route::get("/panitia/list-fasilitator/list-peserta", [DashboardController::class, 'listpesertapanitia']);
Route::get("/user", [UserController::class, 'beranda']);
Route::get("/user/diklat", [UserController::class, 'diklat']);
Route::get("/user/fasilitator", [UserController::class, 'fasilitator']);
Route::get("/user/tanya-kami", [UserController::class, 'tanyakami']);

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__ . '/auth.php';