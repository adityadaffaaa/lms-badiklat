<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Role\Role;
use App\Models\Activity\Leaf;
use App\Models\Panitia\Panitia;
use App\Models\Peserta\Peserta;
use Illuminate\Database\Seeder;
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

        Peserta::factory(50)->create();

        PesertaActivity::factory(80)->create();

        Leaf::factory(5)->create();

        Role::create([
            'role' => 'KSBA'
        ]);
        Role::create([
            'role' => 'Teknologi Pembelajaran'
        ]);
        Role::create([
            'role' => 'Evbang'
        ]);
        Role::create([
            'role' => 'Sekretariat'
        ]);

        Fasilitator::factory(20)->create();

        Panitia::factory(2)->create();
        // Fasilitator::create([
        //     'nama' => 'Reza Dwi Anggoro',
        //     'nip' => 1234567891012,
        //     'nik' => 121110987654321,
        //     'role_id' => 1,
        //     'panitia_id' => 1,
        //     'email' => 'rezaanggoro@gmail.com',
        //     'username' => 'reza123',
        //     'tempat_lahir' => 'Jakarta',
        //     'tanggal_lahir' => '1999-02-12',
        //     'agama' => 'islam',
        //     'surat_tugas' => "surat_tugas.pdf",
        // ]);
        // Fasilitator::create([
        //     'nama' => 'Ananta Vinie',
        //     'nip' => 381268371321,
        //     'nik' => 21367236716736,
        //     'role_id' => 2,
        //     'email' => 'anantavinie@gmail.com',
        //     'username' => 'vinie123',
        //     'tempat_lahir' => 'Magelang',
        //     'tanggal_lahir' => '1995-02-23',
        //     'agama' => 'islam',
        //     'surat_tugas' => "surat_tugas.pdf",
        // ]);


        // FasilitatorActivity::factory(80)->create();
    }
}