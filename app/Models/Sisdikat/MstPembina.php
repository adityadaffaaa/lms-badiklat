<?php

namespace App\Models\Sisdikat;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MstPembina extends Model
{

  use HasFactory;

  protected $connection = 'sqlsrv';
  protected $table = 'MstPembina';


}