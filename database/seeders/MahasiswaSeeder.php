<?php

namespace Database\Seeders;

use App\Models\Kelas;
use App\Models\Mahasiswa;
use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MahasiswaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create('id_ID');

        $mahasiswa_list = [
            ['Teddy Saefullah', 'teddy@gmail.com', 'pria'],
            ['Mutia Lailasari', 'mutia@gmail.com', 'wanita'],
            ['Edward Maryadi', 'edward@gmail.com', 'pria'],
            ['Halim Januar', 'halim@gmail.com', 'pria'],
            ['Luis Marpaung', 'luis@gmail.com', 'pria'],
        ];
        $agamas = ['islam', 'kristen', 'katolik', 'hindu', 'buddha', 'konghucu'];
        $kelas_id = Kelas::pluck('id');

        foreach ($mahasiswa_list as list($name, $gmail, $gender)) {
            Mahasiswa::create([
                'nama_lengkap' => $name,
                'email' => $gmail,
                'nim' => $faker->unique()->numerify('##########'),
                'jenis_kelamin' => $gender,
                'alamat' => $faker->address(),
                'agama' => $faker->randomElement($agamas),
                'password' => Hash::make('123456789'),
                'kelas_id' => $faker->randomElement($kelas_id),
            ]);
        }
    }
}
