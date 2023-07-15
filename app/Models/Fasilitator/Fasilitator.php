<?php

namespace App\Models\Fasilitator;

use App\Models\Activity\Leaf;
use App\Models\Role\Role;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
        return $this->belongsTo(Role::class, 'role_id', 'id');
    }
    public function leafs()
    {
        return $this->hasMany(Leaf::class, 'fasilitator_id', 'id');
    }

    public function panitia()
    {
        return $this->belongsTo(Panitia::class, 'id', 'panitia_id');
    }
}