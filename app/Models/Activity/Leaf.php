<?php

namespace App\Models\Activity;

use App\Models\Fasilitator\Fasilitator;
use App\Models\Peserta\PesertaActivity;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Leaf extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function fasilitator()
    {
        return $this->belongsTo(Fasilitator::class, 'fasilitator_id', 'id');
    }
    public function leaf_pesertas()
    {
        return $this->hasMany(LeafPeserta::class, 'leaf_id', 'id');
    }
    public function peserta_activities()
    {
        return $this->hasMany(PesertaActivity::class, 'leaf_id', 'id');
    }
    public function fasilitator_activity()
    {
        return $this->belongsTo(Fasilitator::class, 'leaf_id', 'id');
    }



}