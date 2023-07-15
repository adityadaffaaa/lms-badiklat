<?php

namespace Database\Factories\Peserta;

use Illuminate\Database\Eloquent\Factories\Factory;



/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Peserta\Peserta>
 */
class PesertaFactory extends Factory
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
            'nip' => fake()->unique()->randomNumber(8),
            'username' => fake()->userName(),
            'password' => fake()->password(10, 20),
            'email' => fake()->unique()->companyEmail(),
            'is_online' => mt_rand(0, 1),
            'total_jp' => mt_rand(0, 40)
        ];
    }
}