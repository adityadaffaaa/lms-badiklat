<?php

namespace App\Models\Activity;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Topik extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function peserta()
    {
        return $this->belongsTo(Peserta::class, 'peserta_id', 'id');
    }

    public function fasilitator()
    {
        return $this->belongsTo(Fasilitator::class, 'fasilitator', 'id');
    }

    public function leaf()
    {
        return $this->belongsTo(Leaf::class, 'id', 'leaf_id');
    }
}