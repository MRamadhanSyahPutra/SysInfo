<?php

namespace Database\Seeders;

use App\Models\Prodi;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Models\Jurusan;

class ProdiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create('id_ID');
        $prodi_list = [
            'Teknik Informatika' => ['Teknik Informatika', 'Teknologi Geomatika', 'Animasi', 'Terapan Rekayasa Keamanan Siber', 'Terapan Rekayasa Perangkat Lunak'],
            'Management dan Bisnis' => ['Akuntansi', 'Akuntansi Manajerial', 'Administrasi Bisnis Terapan', 'Logistik Perdagangan Internasional'],
            'Teknik Elektro' => ['Teknik Elektronika Manufaktur', 'Teknologi Rekayasa Elektronika', 'Teknik Instrumentasi', 'Teknik Mekatronika', 'Teknologi Rekayasa Pembangkit Energi', 'Teknologi Rekayasa Robotika'],
            'Teknik Mesin' => ['Teknik Mesin', 'Teknik Perawatan Pesawat Udara', 'Teknologi Rekayasa Konstruksi Perkapalan', 'Teknologi Rekayasa Pengelasan dan Fabrikasi'],
        ];

        $keys = array_keys($prodi_list);

        for ($i = 0; $i < count($keys); $i++) {
            $jurusan = $keys[$i];
            for ($j = 0; $j < count($prodi_list[$jurusan]); $j++) {
                $prodi = $prodi_list[$jurusan][$j];
                $nameGander = [$faker->firstNameMale() . ' ' . $faker->lastNameMale(), $faker->firstNameFemale() . ' ' . $faker->lastNameFemale()];
                $jurusan_id = Jurusan::where('name', $jurusan)->firstOrFail()->id;
                Prodi::create([
                    'name' => $prodi,
                    'kepala_prodi' => $faker->randomElement($nameGander),
                    'jurusan_id' => $jurusan_id,
                ]);
            }
        }
    }
}
