<?php

namespace App\Models\Fasilitator;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FasilitatorActivity extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function fasilitator()
    {
        return $this->belongsTo(Fasilitator::class, 'fasilitator_id', 'id');
    }

    public function leaf()
    {
        return $this->belongsTo(Leaf::class, 'id', 'leaf_id');
    }
}