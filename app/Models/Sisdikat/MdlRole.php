<?php

namespace App\Models\Sisdikat;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MdlRole extends Model
{
    use HasFactory;

    protected $connection = 'sqlsrv';
    protected $table = 'mdl_role';

    public function fasilitators()
    {
        return $this->hasMany(Fasilitator::class, 'id', 'role_id');
    }

}