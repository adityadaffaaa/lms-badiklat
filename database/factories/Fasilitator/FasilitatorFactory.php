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
            'role_id' => mt_rand(1, 4),
            'panitia_id' => mt_rand(1, 3),
            'email' => fake()->unique()->safeEmail(),
            'username' => fake()->unique()->userName(),
            'password' => fake()->password(10, 15),
            'tempat_lahir' => fake()->city(),
            'tanggal_lahir' => fake()->dateTimeBetween($date . "-30 years", $date . "-20 years"),
            'agama' => 'islam',
            'surat_tugas' => "surat_tugas.pdf",
        ];
    }
}