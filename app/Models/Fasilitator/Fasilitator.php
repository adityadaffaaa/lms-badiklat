<?php

namespace App\Models\Fasilitator;

use App\Models\Role\Role;
use App\Models\Activity\Leaf;
use App\Models\Activity\Topik;
use App\Models\Activity\Thread;
use App\Models\Role\SatuanKerja;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Fasilitator extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function mdl_role()
    {
        return $this->belongsTo(MdlRole::class, 'role_id', 'id');
    }

    public function jadwals()
    {
        return $this->hasMany(Jadwal::class, 'fasilitator_id', 'id');
    }

    public function role()
    {
        return $this->hasOne(Role::class, 'id', 'role_id');
    }

    public function satuan_kerja()
    {
        return $this->hasOne(SatuanKerja::class, 'id', 'satuan_kerja_id');
    }
    public function leafs()
    {
        return $this->hasMany(Leaf::class, 'fasilitator_id', 'id');
    }

    public function panitia()
    {
        return $this->belongsTo(Panitia::class, 'id', 'panitia_id');
    }

    public function topiks()
    {
        return $this->hasMany(Topik::class, 'fasilitator_id', 'id');
    }
    public function threads()
    {
        return $this->hasMany(Thread::class, 'fasilitator_id', 'id');
    }
}