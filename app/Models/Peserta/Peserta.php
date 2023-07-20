<?php

namespace App\Models\Peserta;

use App\Models\Activity\Jadwal;
use App\Models\Activity\Leaf;
use App\Models\Activity\Topik;
use App\Models\Activity\Thread;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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
    public function topiks()
    {
        return $this->hasMany(Topik::class, 'peserta_id', 'id');
    }
    public function threads()
    {
        return $this->hasMany(Thread::class, 'peserta_id', 'id');
    }
    public function leafs()
    {
        return $this->belongsToMany(Leaf::class, 'leaf_pesertas')->withTimestamps();
    }

    public function jadwals()
    {
        return $this->belongsToMany(Jadwal::class, 'jadwal_pesertas')->withTimestamps();
    }

}