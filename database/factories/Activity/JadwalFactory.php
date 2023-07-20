<?php

namespace Database\Factories\Activity;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Activity\Jadwal>
 */
class JadwalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $date_now = date("Y-m-d");
        $start_date = fake()->unique()->dateTimeBetween($date_now, $date_now . '+1 week');
        $start = fake()->unique()->dateTimeBetween($date_now, $date_now . '+12 hour');
        $end = fake()->unique()->dateTimeBetween($start, $start->format("H:i:s") . '+2 hour');
        return [
            //
            'topik' => fake()->sentence(mt_rand(2, 3)),
            'deskripsi' => fake()->paragraph(mt_rand(1, 2)),
            'jam_mulai' => $start,
            'jam_selesai' => $end,
            'tanggal' => $start_date,
            'meeting_link' => fake()->url(),
            'fasilitator_id' => mt_rand(1, 20),
            'leaf_id' => mt_rand(1, 45)
        ];
    }
}