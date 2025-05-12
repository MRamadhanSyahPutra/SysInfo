<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable as AuthenticatableTrait;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Dosen extends Model implements Authenticatable
{
    use HasFactory, Notifiable, AuthenticatableTrait;

    protected $table = 'dosens';

    protected $fillable = [
        'name',
        'email',
        'username',
        'nid',
        'alamat',
        'no_telp',
        'password',
        'prodi_id',
    ];

    protected $hidden = ['password'];

    public function prodi()
    {
        return $this->belongsTo(Prodi::class, 'prodi_id', 'id');
    }

    public function kelass()
    {
        return $this->hasMany(Kelas::class, 'dosen_id', 'id');
    }

    public function matakuliahs()
    {
        return $this->hasMany(Matakuliah::class, 'dosen_id', 'id');
    }
}

