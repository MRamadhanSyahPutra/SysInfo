<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Models\Dosen;
use App\Models\Prodi;
use Illuminate\Support\Facades\Hash;

class DosenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create('id_ID');
        $listDataDosen =
            [
                ['Ira Handayani', 'ira@gmail.com'],
                ['Salsabila Astuti', 'salsabila@gmail.com'],
                ['Halima Widiastuti', 'halima@gmail.com'],
                ['Zulaikha Zulaika', 'zul@gmail.com'],
                ['Ivan Saefullah', 'ivan@gmail.com'],
                ['Damar Sitorus', 'damar@gmail.com'],
                ['Iriana Yuliarti', 'iriana@gmail.com'],
                ['Hani Aryani', 'hani@gmail.com'],
                ['Ridwan Hutagalung', 'ridwan@gmail.com'],
                ['Hadi Simbolon', 'hadi@gmail.com'],
                ['Aurora Farida', 'aurora@gmail.com'],
                ['Eka Zulaika', 'eka@gmail.comm'],
                ['Shania Puspita', 'shania@gmail.com'],
                ['Mutia Mayasari', 'mutia@gmail.com'],
                ['Kani Puspasari', 'kani@gmail.com'],
                ['Yunita Nuraini', 'yunita@gmail.com'],
                ['Julia Purnawati', 'julia@gmail.com'],
                ['Wirda Purwanti', 'wirda@gmail.com'],
                ['Jumadi Anggriawan', 'jumadi@gmail.com'],
                ['Jaya Nainggolan', 'jaya@gmailcom'],
                ['Febi Safitri', 'febi@gmail.com'],
                ['Ira Hassanah', 'ira01@gmail.com'],
                ['Nova Susanti', 'nova@gmail.com'],
                ['Elvina Pudjiastuti', 'elvi@gmail.com'],
                ['Jarwa Prasasta', 'jarwa@gmail.com'],
                ['Eman Firmansyah', 'eman@gmail.com'],
                ['Dipa Zulkarnain', 'dipa@gmail.com'],
                ['Hardi Pangestu', 'hardi@gmail.com'],
                ['Devi Wulandari', 'devi@gmail.com'],
                ['Satya Simbolon', 'satya@gmail.com'],
            ];
        $prodi_id = Prodi::pluck('id');

        foreach ($listDataDosen as list($name, $email)) {
            Dosen::create([
                'name' => $name,
                'email' => $email,
                'nid' => $faker->unique()->numerify('02###98#01'),
                'alamat' => $faker->address(),
                'no_telp' => $faker->numerify('08##########'),
                'password' => Hash::make('123456789'),
                'prodi_id' => $faker->randomElement($prodi_id),
            ]);
        }
    }
}
