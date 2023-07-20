<?php

namespace App\Models\Activity;

use App\Models\Activity\Topik;
use App\Models\Activity\Jadwal;
use App\Models\Peserta\Peserta;
use App\Models\Fasilitator\Fasilitator;
use App\Models\Peserta\PesertaActivity;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Leaf extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function fasilitator()
    {
        return $this->belongsTo(Fasilitator::class, 'fasilitator_id', 'id');
    }

    public function peserta_activities()
    {
        return $this->hasMany(PesertaActivity::class, 'leaf_id', 'id');
    }
    public function fasilitator_activity()
    {
        return $this->belongsTo(Fasilitator::class, 'leaf_id', 'id');
    }

    public function pesertas()
    {
        return $this->belongsToMany(Peserta::class, 'leaf_pesertas')->withTimestamps()->with(['topiks', 'threads']);
    }

    public function topiks()
    {
        return $this->hasMany(Topik::class, 'leaf_id', 'id')->with(['peserta', 'fasilitator', 'threads']);
    }
    public function threads()
    {
        return $this->hasMany(Thread::class, 'leaf_id', 'id')->with(['peserta', 'fasilitator', 'topik']);
    }

    public function jadwals()
    {
        return $this->hasMany(Jadwal::class, 'leaf_id', 'id');
    }
}