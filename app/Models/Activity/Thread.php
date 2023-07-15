<?php

namespace App\Models\Activity;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function Topik()
    {
        return $this->belongsTo(Topik::class, 'id', 'topik_id');
    }
    public function Peserta()
    {
        return $this->belongsTo(Peserta::class, 'id', 'peserta_id');
    }
    public function Fasilitator()
    {
        return $this->belongsTo(Fasilitator::class, 'id', 'fasilitator_id');
    }
    

}