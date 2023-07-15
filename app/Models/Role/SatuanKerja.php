<?php

namespace App\Models\Role;

use App\Models\Fasilitator\Fasilitator;
use App\Models\Panitia\Panitia;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SatuanKerja extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function fasilitator()
    {
        $this->belongsTo(Fasilitator::class, 'satuan_kerja_id', 'id');
    }

    public function panitia()
    {
        $this->belongsTo(Panitia::class, 'satuan_kerja_id', 'id');
    }
}