<?php

namespace Database\Factories\Relation;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Relation\LeafPeserta>
 */
class LeafPesertaFactory extends Factory
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
            'leaf_id' => mt_rand(2, 45),
            'peserta_id' => mt_rand(2, 50)
        ];
    }
}