<?php

namespace App\Models\Relation;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LeafPeserta extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function leaf()
    {
        return $this->belongsTo(Leaf::class, 'id', 'leaf_id');
    }
    public function peserta()
    {
        return $this->belongsTo(Leaf::class, 'id', 'peserta_id');
    }
}