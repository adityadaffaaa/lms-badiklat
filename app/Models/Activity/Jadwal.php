<?php

namespace App\Models\Activity;

use App\Models\Activity\Leaf;
use App\Models\Peserta\Peserta;
use App\Models\Fasilitator\Fasilitator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Jadwal extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function fasilitator()
    {
        return $this->belongsTo(Fasilitator::class, 'fasilitator_id', 'id');
    }
    public function pesertas()
    {
        return $this->belongsToMany(Peserta::class, 'jadwal_pesertas')->withTimestamps();
    }

    public function leaf()
    {
        return $this->belongsTo(Leaf::class, 'leaf_id', 'id');
    }
}