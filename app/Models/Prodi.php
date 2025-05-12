<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Jurusan;
use App\Models\Dosen;

class Prodi extends Model
{
    use HasFactory;

    protected $table = 'prodis';

    protected $fillable =
        [
            'name',
            'kepala_prodi',
            'jurusan_id',
        ];


    public function jurusan()
    {
        return $this->belongsTo(Jurusan::class, 'jurusan_id', 'id');
    }

    public function dosens()
    {
        return $this->hasMany(Dosen::class, 'prodi_id', 'id');
    }

    public function kelass()
    {
        return $this->hasMany(Kelas::class, 'prodi_id', 'id');
    }

    public function matakuliahs()
    {
        return $this->hasMany(Matakuliah::class, 'prodi_id', 'id');
    }
}
