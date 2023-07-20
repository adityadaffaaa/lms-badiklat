<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Activity\Jadwal;
use App\Models\Relation\JadwalPeserta;
use App\Models\Role\Role;
use App\Models\Activity\Leaf;
use App\Models\Activity\Topik;
use App\Models\Activity\Thread;
use App\Models\Panitia\Panitia;
use App\Models\Peserta\Peserta;
use Illuminate\Database\Seeder;
use App\Models\Role\SatuanKerja;
use App\Models\Relation\LeafPeserta;
use App\Models\Fasilitator\Fasilitator;
use App\Models\Peserta\PesertaActivity;
use App\Models\Fasilitator\FasilitatorActivity;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // Peserta::factory(50)->create();

        // PesertaActivity::factory(80)->create();

        // Leaf::factory(20)->create();

        // LeafPeserta::factory(600)->create();

        // SatuanKerja::create([
        //     'satuan_kerja' => 'KSBA'
        // ]);
        // SatuanKerja::create([
        //     'satuan_kerja' => 'Teknologi Pembelajaran'
        // ]);
        // SatuanKerja::create([
        //     'satuan_kerja' => 'Evbang'
        // ]);
        // SatuanKerja::create([
        //     'satuan_kerja' => 'Sekretariat'
        // ]);

        // Role::create([
        //     'role' => 'Manajemen'
        // ]);
        // Role::create([
        //     'role' => 'Panitia'
        // ]);
        // Role::create([
        //     'role' => 'Fasilitator'
        // ]);

        // Fasilitator::create([
        //     'nama' => ""
        // ]);
        // Fasilitator::factory(20)->create();

        // Panitia::factory(3)->create();

        // Topik::factory(100)->create();

        // Thread::factory(300)->create();

        // JadwalPeserta::factory(10)->create();

        // Jadwal::factory(5)->create();
        // FasilitatorActivity::factory(80)->create();
    }
}