<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;
use App\Models\Prodi;
use App\Models\Dosen;
use App\Models\Matakuliah;

class MatakuliahSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create('id_ID');

        $prodi_list = [
            'Teknik Informatika' => ['Dasar Pemograman Web', 'Dasar Pemograman', 'Sistem Komputer', 'Basis data', 'Jaringan Komputer', 'Pemograman Berorientasi Objek', 'Dasar Rekayasa  Perangkat Lunak', 'Interaksi Manusia-Komputer', 'Pemograman Web'],
            'Teknologi Geomatika' => ['Pengantar Geodesi dan Geomatika', 'Matematika Geodesi', 'Dasar Pemograman dan Informasi Teknologi', 'Proyeksi peta', 'Komunikasi kerja, Kesehatan, dan Keselamatan', 'Sistem Informasi geografis', 'Kartografi'],
            'Animasi' => ['Nirmana 2D', 'Design karakter', 'Animasi eksperimental', 'Fisika animasi', 'Aset 3D karakter', 'Produksi audio animasi', 'Menggambar digital'],
            'Terapan Rekayasa Keamanan Siber' => ['Keamanan jaringan', 'Artitektur keamanan', 'Keamanan pengembangan perangkat lunak', 'Keamanan komputasi awan', 'Manajemen resiko keamanan siber', 'Keamanan basis data', 'Keamanan perangkat bergerak', 'Jaringan komputer'],
            'Terapan Rekayasa Perangkat Lunak' => ['Algoritma dan pemograman', 'Pemograman berbasis web', 'Pengantar rekayasa perangkat lunak', 'Pengantar basis data', 'Pemograman basis data', 'Struktur data', 'Keamanan berbasis data', 'Pemograman perangkat keras', 'Keamanan perangkat keras', 'Kercerdasan buatan'],
            'Akuntansi' => ['Akuntasi perusahaan jasa', 'Akuntasi perpajakan perusahaan jasa', 'Akuntasi perusahaan dagang', 'Akuntasi keuangan menengah', 'Akuntasi biaya', 'Auditing', 'Akuntasi keuangan lanjut'],
            'Akuntansi Manajerial' => ['Akuntasi keuangan dasar', 'Aplikasi akuntasi komputer', 'Sistem informasi akuntasi', 'Perpajakan', 'Akuntasi keuangan lanjut', 'Manajemen strategik', 'Akuntasi manajemen', 'Manajemen kuantitatif operasi', 'Analisis laporan keuangan', 'Sistem pengendalian manajemen', 'SAP fundamental', 'Akuntasi dagang terapan', 'Manajemen keuangan', 'SAP finance'],
            'Administrasi Bisnis Terapan' => ['Pengantar ilmu administrasi dan manajemen', 'Pengantar ilmu ekonomi dan bisnis', 'Matematika bisnis', 'Dasar pengetikan dan stenografis', 'Aplikasi perkantoran dan perangkat', 'Akuntasi pengantar', 'Dasar pelayanan prima', 'Metode statistik bisnis', 'Kesekretariatan', 'Aspek hukum dalam bisnis', 'Manajemen kantor', 'Perancangan sistem kerja', 'Kehumasan dan protakoler'],
            'Logistik Perdagangan Internasional' => ['Prinsip ekonomi dan manajemen bisnis', 'Teknologi Informasi untuk Produktivitas Kerja', 'Kesehatan Keselamatan Kerja dan Lingkungan', 'Pengantar Logistik dan Rantai Pasok', 'Pergudangan dan Persediaan', 'Manajemen Operasi dan E-Commerce', 'Riset Operasi Bisnis', 'Pengiriman Barang', 'Distribusi dan Transportasi', 'Manajemen Hubungan Pelanggan', 'Sumber daya Manusia dan Budaya Organisasi', 'Manajemen Resiko', 'Manajemen Kualitas', 'Keuangan Perusahaan', 'Sistem Logistik terintegrasi'],
            'Teknik Elektronika Manufaktur' => ['Proyek pengenalan manufaktur elektronika', 'Matematika teknik', 'Rangkaian listrik', 'Fisika terapan', 'Manufaktur PCB', 'Sistem mikrokontroler', 'Elektronika digital', 'Teknologi material', 'Devais elektronika', 'Proyek manufaktur elektronika semi otomatis', 'Teknologi fabrikasi semikonduktor'],
            'Teknologi Rekayasa Elektronika' => ['Proyek dasar rangkaian elektronika', 'Listrik magnet', 'Kalkulus', 'Rangkaian listrik DC', 'Teknik desain PCB', 'Dasar komunikasi perangkat elektronika', 'Rangkaian listrik AC', 'Elektronika analog', 'Teknik dasar elektronika', 'Elektronika daya', 'Internet of things', 'Pemograman perangkat keras'],
            'Teknik Instrumentasi' => ['Sistem kontrol industri', 'Gambar instrumentasi', 'Proggramble logic control dan aktuator', 'Fisika terapan', 'Kimia industri', 'Manajemen proyek dasar', 'Proyek pengukuran dan akusisi data', 'Proyek monitor dan kontrol', 'Matematika teknik'],
            'Teknik Mekatronika' => ['Aljabar geometri', 'Dasar elektronika', 'Alat ukur', 'Teknologi sensor', 'Sistem statis dan dinamis', 'Pemograman sistem terbenam', 'Penggerak elektrik', 'Sistem kompresi fluida', 'Instalasi listrik mesin industri', 'Sistem kendali', 'Statistika industri'],
            'Teknologi Rekayasa Pembangkit Energi' => ['Dasar teknik listrik', 'Fisika dasar', 'Alat ukur listrik dan instrumen', 'Kesehatan dan keselamatan kerja', 'Termodinamika', 'Rangkaian listrik', 'Kinematika dan Dinamika', 'Instalasi listrik mesin', 'Sistem Tenaga Listrik', 'Pompa, Kompresor dan Blower', 'Mesin Turbin', 'Pembangkit Listrik', 'Peralatan Listrik dan Trafo', 'Mesin dan sistem Pembakaran', 'Mekanika Fluida'],
            'Teknologi Rekayasa Robotika' => ['Pengantar Teknik Robotika', 'Pemrograman Prosedural', 'Prinsip Teknik Listrik dan Elektronika', 'Computer Aided Design and Drafting', 'Kalkulus Terapan', 'Kesehatan dan Keselamatan Kerja', 'Proyek Rapid Prototyping', 'Pemrograman Berorientasi Objek', 'Aktuator dan Sistem Penggerak', 'Design Thinking', 'Desain dan Fabrikasi Robotika', 'Pengantar Robotika', 'Sistem Kendali', 'Proyek Inovasi Agile', 'Robot Operating System', 'Programmable Logic Controllers', 'Sensor dan Akuisisi Data'],
            'Teknik Mesin' => ['Fisika', 'Pengetahuan Material', 'Metrologi', 'Gambar Teknik Mesin', 'Perkakas Tangan', 'Keselamatan dan Kesehatan Kerja', 'Matematika Teknik', 'Proses Pemesinan Konvensional', 'Mekanika', 'Las dan Pabrikasi Logam', 'Pneumatik dan Hydraulic System', 'Ilmu Kekuatan Bahan', 'Elemen Mesin'],
            'Teknik Perawatan Pesawat Udara' => ['Fisika', 'Technical Drawing', 'Aerodynamic', 'Aircraft Maintenance', 'Aircraft Structure', 'Piston Engine', 'Gas Turbine Engine', 'Propeller', 'Aviation Regulation', 'Human Factor'],
            'Teknologi Rekayasa Konstruksi Perkapalan' => ['Las dan Fabrikasi Logam', 'Matematika Teknik', 'Pengantar Teknologi Kelautan', 'Pengetahuan Material', 'Pengantar Teknik Perkapalan', 'Proses Pemesinan Dasar', 'Fisika Terapan', 'Keselamatan dan Kesehatan Kerja', 'Konstruksi Kapal', 'Visualisasi dan Permodelan Kapal', 'Teori Bangunan Kapal'],
            'Teknologi Rekayasa Pengelasan dan Fabrikasi' => ['Pengetahuan material', 'Perkakas Tangan dan Pemesinan dasar', 'Teknologi dan proses pengelasan', 'Keselamatan dan Kesehatan Kerja', 'Pengelasan Fillet', 'Metalurgi Pengelasan', 'Fisika', 'Gambar Teknik', 'Desain dan konstruksi pengelasan', 'Pengelasan Groove', 'Inspeksi Visual', 'Etika profesi', 'Bahasa Inggris dunia kerja', 'Pengujian Ultrasonik', 'Pengujian Radiografi', 'Pengujian Penetran dan magnetik', 'Fabrikasi dan produksi Pengelasan'],
        ];

        $keys = array_keys($prodi_list);

        for ($i = 0; $i < count($keys); $i++) {
            $prodis = $keys[$i];
            $prodi = Prodi::where('name', $prodis)->first();

            if (!$prodi)
                continue;

            $prodi_jurusan = $prodi->jurusan_id;

            $prodi_ids = Prodi::where('jurusan_id', $prodi_jurusan)->pluck('id')->toArray();
            $dosen_ids = Dosen::whereIn('prodi_id', $prodi_ids)->pluck('id')->toArray();

            if (empty($dosen_ids))
                continue;

            for ($j = 0; $j < count($prodi_list[$prodis]); $j++) {
                $matkul = $prodi_list[$prodis][$j];
                $dosen_id = count($dosen_ids) > 1 ? $faker->randomElement($dosen_ids) : $dosen_ids[0];

                Matakuliah::create([
                    'kode' => strtoupper($faker->unique()->lexify('???')) . $faker->numerify('###'),
                    'name' => $matkul,
                    'jumlah_sks' => $faker->numberBetween(1, 4),
                    'prodi_id' => $prodi->id,
                    'dosen_id' => $dosen_id,
                ]);
            }
        }
    }
}
