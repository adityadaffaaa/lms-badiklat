<?php

namespace App\Models\Panitia;

use App\Models\Fasilitator\Fasilitator;
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
}