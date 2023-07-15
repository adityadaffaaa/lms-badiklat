<?php

namespace App\Models\Peserta;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peserta extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function nilai_sumatifs()
    {
        return $this->hasMany(NilaiSumatif::class, 'peserta_id', 'id');
    }
    public function nilai_formatifs()
    {
        return $this->hasMany(NilaiFormatif::class, 'peserta_id', 'id');
    }
    public function nilai_akhirs()
    {
        return $this->hasMany(NilaiAkhir::class, 'peserta_id', 'id');
    }

    public function leafPesertas()
    {
        return $this->hasMany(LeafPeserta::class, 'peserta_id', 'id');
    }

    public function Topiks()
    {
        return $this->hasMany(LeafPeserta::class, 'topik_id', 'id');
    }




}