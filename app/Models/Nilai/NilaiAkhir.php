<?php

namespace App\Models\Nilai;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NilaiAkhir extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function peserta()
    {
        return $this->belongsTo(Peserta::class, 'id', 'peserta_id');
    }

    public function leaf()
    {
        return $this->belongsTo(Leaf::class, 'id', 'leaf_id');
    }
}