<?php

namespace App\Models\Panitia;

use App\Models\Fasilitator\Fasilitator;
use App\Models\Role\Role;
use App\Models\Role\SatuanKerja;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Panitia extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function fasilitators()
    {
        $this->hasMany(Fasilitator::class, 'panitia_id', 'id');
    }

    public function role()
    {
        $this->hasOne(Role::class, 'id', 'role_id');
    }
    public function satuan_kerja()
    {
        $this->hasOne(SatuanKerja::class, 'id', 'satuan_kerja_id');
    }
}