<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Role\Role;
use App\Models\Role\SatuanKerja;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Fasilitator\Fasilitator;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $guarded = [
        'id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */


    public function role()
    {
        $this->hasOne(Role::class, 'id', 'role_id');
    }
    public function satuan_kerja()
    {
        $this->hasOne(SatuanKerja::class, 'id', 'satuan_kerja_id');
    }

}