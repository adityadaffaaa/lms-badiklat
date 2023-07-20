<?php

namespace Database\Factories\Activity;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Activity\Thread>
 */
class ThreadFactory extends Factory
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
            "body" => fake()->paragraph(mt_rand(2, 4)),
            "topik_id" => mt_rand(1, 35),
            "leaf_id" => mt_rand(1, 35),
            "peserta_id" => mt_rand(1, 35),
            "fasilitator_id" => mt_rand(1, 20)
        ];
    }
}