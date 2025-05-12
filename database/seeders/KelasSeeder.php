<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Models\Kelas;
use App\Models\Prodi;
use App\Models\Dosen;
use App\Models\Jurusan;

class KelasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create('id_ID');

        $prodis_list = [
            'Teknik Informatika' => ['IF0' . $faker->unique()->numberBetween(1, 110), 'IF0' . $faker->unique()->numberBetween(1, 110)],
            'Teknologi Geomatika' => ['GM0' . $faker->unique()->numberBetween(1, 110), 'GM0' . $faker->unique()->numberBetween(1, 110)],
            'Animasi' => ['AN0' . $faker->unique()->numberBetween(1, 110), 'AN0' . $faker->unique()->numberBetween(1, 110)],
            'Terapan Rekayasa Keamanan Siber' => ['TRKS0' . $faker->unique()->numberBetween(1, 110), 'TRKS0' . $faker->unique()->numberBetween(1, 110)],
            'Terapan Rekayasa Perangkat Lunak' => ['TRPL0' . $faker->unique()->numberBetween(1, 110), 'TRPL0' . $faker->unique()->numberBetween(1, 110)],
            'Akuntansi' => ['AN0' . $faker->unique()->numberBetween(1, 110), 'AN0' . $faker->unique()->numberBetween(1, 110)],
            'Akuntansi Manajerial' => ['AM0' . $faker->unique()->numberBetween(1, 110), 'AM0' . $faker->unique()->numberBetween(1, 110)],
            'Administrasi Bisnis Terapan' => ['ABT0' . $faker->unique()->numberBetween(1, 110), 'ABT0' . $faker->unique()->numberBetween(1, 110)],
            'Logistik Perdagangan Internasional' => ['LPI0' . $faker->unique()->numberBetween(1, 110), 'LPI0' . $faker->unique()->numberBetween(1, 110)],
            'Teknik Elektronika Manufaktur' => ['TEM0' . $faker->unique()->numberBetween(1, 110), 'TEM0' . $faker->unique()->numberBetween(1, 110)],
            'Teknologi Rekayasa Elektronika' => ['TRE0' . $faker->unique()->numberBetween(1, 110), 'TRE0' . $faker->unique()->numberBetween(1, 110)],
            'Teknik Instrumentasi' => ['TI0' . $faker->unique()->numberBetween(1, 110), 'TI0' . $faker->unique()->numberBetween(1, 110)],
            'Teknik Mekatronika' => ['TM0' . $faker->unique()->numberBetween(1, 110), 'TM0' . $faker->unique()->numberBetween(1, 110)],
            'Teknologi Rekayasa Pembangkit Energi' => ['TRPE0' . $faker->unique()->numberBetween(1, 110), 'TRPE0' . $faker->unique()->numberBetween(1, 110)],
            'Teknologi Rekayasa Robotika' => ['TRR0' . $faker->unique()->numberBetween(1, 110), 'TRR0' . $faker->unique()->numberBetween(1, 110)],
            'Teknik Mesin' => ['TM0' . $faker->unique()->numberBetween(1, 110), 'TM0' . $faker->unique()->numberBetween(1, 110)],
            'Teknik Perawatan Pesawat Udara' => ['TPPU0' . $faker->unique()->numberBetween(1, 110), 'TPPU0' . $faker->unique()->numberBetween(1, 110)],
            'Teknologi Rekayasa Konstruksi Perkapalan' => ['TRKP0' . $faker->unique()->numberBetween(1, 110), 'TRKP0' . $faker->unique()->numberBetween(1, 110)],
            'Teknologi Rekayasa Pengelasan dan Fabrikasi' => ['TTRPF0' . $faker->unique()->numberBetween(1, 110), 'TTRPF0' . $faker->unique()->numberBetween(1, 110)],
        ];
        $classType = ['Pagi', 'Malam'];

        $keys = array_keys($prodis_list);


        for ($i = 0; $i < count($keys); $i++) {
            $prodis = $keys[$i];
            $prodi = Prodi::where('name', $prodis)->first();
            $prodi_jurusan = $prodi->jurusan_id;

            $jurusan = Jurusan::where('id', $prodi_jurusan)->first();
            $jurusan_prodi = Prodi::where('jurusan_id', $jurusan->id)->get();

            $dosen_id = Dosen::whereIn('prodi_id', $jurusan_prodi->pluck('id'))->get();



            for ($j = 0; $j < count($prodis_list[$prodis]); $j++) {
                $className = $prodis_list[$prodis][$j];

                Kelas::create([
                    'name' => $className,
                    'jenis_kelas' => $faker->randomElement($classType),
                    'data_tampung' => $faker->numberBetween(28, 32),
                    'prodi_id' => $prodi->id,
                    'dosen_id' => $dosen_id->random()->id,
                ]);
            }
        }
    }
}
