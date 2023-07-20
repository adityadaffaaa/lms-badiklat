<?php

namespace Database\Factories\Activity;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Activity\Topik>
 */
class TopikFactory extends Factory
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
            "slug" => fake()->unique()->slug(),
            "body" => fake()->paragraph(mt_rand(2, 4)),
            "thumbs_up" => fake()->randomNumber(mt_rand(1, 2)),
            "thumbs_down" => fake()->randomNumber(mt_rand(1, 2)),
            "leaf_id" => mt_rand(1, 35),
            "peserta_id" => mt_rand(1, 35),
            "fasilitator_id" => mt_rand(1, 20)
        ];
    }
}