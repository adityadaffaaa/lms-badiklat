<?php

// use App\Http\Controllers\ProfileController;
// use Illuminate\Foundation\Application;
// use Inertia\Inertia;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\Activity\JadwalController;
use App\Http\Controllers\Panitia\PanitiaController;
use App\Http\Controllers\Peserta\PesertaController;
use App\Http\Controllers\Credential\SignInController;
use App\Http\Controllers\Activity\ForumChatController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Fasilitator\FasilitatorController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;

// use App\Http\Controllers\DashboardController;

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
/* AUTHENTICATE */
Route::get('/', [AuthenticatedSessionController::class, 'create'])->name('/')->middleware('guest');
Route::post('/', [AuthenticatedSessionController::class, 'store']);

/* DASHBOARD */
Route::middleware('auth')->group(function () {
    /* GET */
    Route::get('/overview', [DashboardController::class, 'index'])->name('overview');

    Route::get('/peserta', [PesertaController::class, 'index']);
    Route::get('/peserta/{id}', [PesertaController::class, 'show']);
    Route::get('/peserta/detail-peserta/{id}', [PesertaController::class, 'show_detail']);

    Route::get('/fasilitator', [FasilitatorController::class, 'index']);
    Route::get('/fasilitator/{id}', [FasilitatorController::class, 'show']);

    Route::get('/forum-chat', [ForumChatController::class, 'index']);
    Route::get('/forum-chat/{id}', [ForumChatController::class, 'show']);

    Route::get('/jadwal', [JadwalController::class, 'index']);

    Route::get('/panitia', [PanitiaController::class, 'index']);
    Route::get('/panitia/{id}', [PanitiaController::class, 'show']);
    Route::get('/panitia/list-fasilitator/{id}', [PanitiaController::class, 'show_detail']);
    /* POST */

    /* PUT */

    /* DELETE */
    Route::delete('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');
});

// Route::get('/peserta', [DashboardController::class, 'peserta']);
// Route::get('/forum-chat', [DashboardController::class, 'forumchat']);
// Route::get('/jadwal', [DashboardController::class, 'jadwal']);
// Route::get('/fasilitator', [DashboardController::class, 'fasilitator']);
// Route::get('/peserta/detail-peserta', [DashboardController::class, 'detailpeserta']);
// Route::get('/peserta/list-peserta', [DashboardController::class, 'listpeserta']);
// Route::get('/forum-chat/leaf', [DashboardController::class, 'leaf']);
// Route::get('/fasilitator/detail-fasilitator/{NIK}', [DashboardController::class, 'detailfasilitator']);
// // Route::get('/fasilitator/detail-fasilitator', [DashboardController::class, 'detailfasilitator']);
// Route::get("/panitia", [DashboardController::class, 'panitia']);
// Route::get("/panitia/list-fasilitator", [DashboardController::class, 'listfasilitator']);
// Route::get("/panitia/list-fasilitator/list-peserta", [DashboardController::class, 'listpesertapanitia']);
// Route::get("/user", [UserController::class, 'beranda']);
// Route::get("/user/diklat", [UserController::class, 'diklat']);
// Route::get("/user/fasilitator", [UserController::class, 'fasilitator']);
// Route::get("/user/tanya-kami", [UserController::class, 'tanyakami']);

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