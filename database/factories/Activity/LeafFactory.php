<?php

namespace Database\Factories\Activity;

use DateTime;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Activity\Leaf>
 */
class LeafFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $date = date("Y-m-d");
        $start = fake()->unique()->dateTimeBetween($date, $date . '+4 month');
        return [
            //
            'leaf_title' => fake()->sentence(mt_rand(2, 4)),
            'deskripsi' => fake()->paragraph(mt_rand(1, 2)),
            'status' => 'tersedia',
            'max_peserta' => mt_rand(1, 11),
            'mulai' => $start,
            'selesai' => fake()->dateTimeBetween($start->format('Y-m-d') . '+1 month', $start->format('Y-m-d') . '+1 month'),
            'fasilitator_id' => mt_rand(1, 3)
        ];
    }
}