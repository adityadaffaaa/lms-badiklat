<?php

namespace App\Models\Role;

use App\Models\Fasilitator\Fasilitator;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $guarded = ["id"];
    public function fasilitator()
    {
        return $this->belongsTo(Fasilitator::class, 'id', 'role_id');
    }
}