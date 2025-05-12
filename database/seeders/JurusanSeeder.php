<?php

namespace Database\Seeders;

use App\Models\Jurusan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class JurusanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $jurusan = ['Teknik Informatika', 'Management dan Bisnis', 'Teknik Elektro', 'Teknik Mesin'];
        for ($i = 0; $i < count($jurusan); $i++) {
            Jurusan::create([
                'name' => $jurusan[$i],
            ]);
        }
    }
}
