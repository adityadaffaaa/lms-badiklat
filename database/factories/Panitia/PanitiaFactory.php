<?php

namespace Database\Factories\Panitia;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Panitia\Panitia>
 */
class PanitiaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'nama' => fake()->name(),
            'nip' => fake()->unique()->randomNumber(9),
            'nik' => fake()->unique()->randomNumber(9),
            'role_id' => 1,
            'satuan_kerja_id' => mt_rand(1, 4),
            'email' => fake()->unique()->freeEmail(),
            'username' => fake()->unique()->userName(),
            'password' => "password"
        ];
    }
}