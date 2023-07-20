<?php

namespace Database\Factories\Fasilitator;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Fasilitator\Fasilitator>
 */
class FasilitatorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $date = date("Y-m-d");
        return [
            //
            'nama' => fake()->name(),
            'nip' => fake()->unique()->randomNumber(9),
            'nik' => fake()->unique()->randomNumber(9),
            'role_id' => 3,
            'panitia_id' => mt_rand(1, 3),
            'satuan_kerja_id' => mt_rand(1, 4),
            'email' => fake()->unique()->freeEmail(),
            'username' => fake()->unique()->userName(),
            'password' => fake()->password(10, 15),
            'bank' => fake()->randomElement(['BNI', 'BRI', 'Mandiri']),
            'no_rek_bank' => fake()->unique()->randomNumber(9),
            'tempat_lahir' => fake()->city(),
            'tanggal_lahir' => fake()->dateTimeBetween($date . "-30 years", $date . "-20 years"),
            'agama' => 'islam',
            'surat_tugas' => fake()->randomElement(["surat_tugas.pdf", null]),
            'surat_keterangan_mengajar' => fake()->randomElement(["surat_keterangan_mengajar.pdf", null]),
            'surat_pertanggung_jawaban' => fake()->randomElement(["surat_pertanggung_jawaban.pdf", null]),
        ];
    }
}