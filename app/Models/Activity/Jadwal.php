<?php

namespace App\Models\Activity;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jadwal extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function fasilitator()
    {
        return $this->belongsTo(Fasilitator::class, 'id', 'fasilitator_id');
    }
}