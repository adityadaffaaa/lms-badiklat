<?php

namespace Database\Factories\Peserta;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Peserta\PesertaActivity>
 */
class PesertaActivityFactory extends Factory
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
            "title" => fake()->sentence(4),
            "peserta_id" => mt_rand(1, 8),
            "leaf_id" => mt_rand(1, 8),
        ];
    }
}