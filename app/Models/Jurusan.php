<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Prodi;

class Jurusan extends Model
{
    use HasFactory;

    protected $table = 'jurusans';

    protected $fillable = ['name'];

    public function prodis()
    {
        return $this->hasMany(Prodi::class, 'jurusan_id', 'id');
    }

}
