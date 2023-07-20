<?php

namespace App\Models\Activity;

use App\Models\Activity\Leaf;
use App\Models\Activity\Topik;
use App\Models\Peserta\Peserta;
use App\Models\Fasilitator\Fasilitator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Thread extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function topik()
    {
        return $this->belongsTo(Topik::class, 'topik_id', 'id');
    }
    public function peserta()
    {
        return $this->belongsTo(Peserta::class, 'peserta_id', 'id');
    }
    public function fasilitator()
    {
        return $this->belongsTo(Fasilitator::class, 'fasilitator_id', 'id');
    }
    public function leaf()
    {
        return $this->belongsTo(Leaf::class, 'leaf_id', 'id');
    }



}