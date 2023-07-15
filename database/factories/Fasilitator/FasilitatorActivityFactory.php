<?php

namespace Database\Factories\Fasilitator;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Fasilitator\Fasilitator>
 */
class FasilitatorActivityFactory extends Factory
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
            "fasilitator_id" => mt_rand(1, 8),
            "leaf_id" => mt_rand(1, 8),
        ];
    }
}