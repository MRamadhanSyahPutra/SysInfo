<?php

namespace App\Http\Controllers;

use App\Models\Dosen;
use App\Models\Kelas;
use App\Models\Mahasiswa;
use App\Models\Prodi;
use App\Models\Matakuliah;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use PDO;

class MatakuliahController extends Controller
{
    public function Index()
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? AUth::guard('dosen')->user() : null;

        return inertia('Admin/Matakuliahs/Index', [
            'admin' => $admin,
            'dosen' => $dosen
        ]);
    }

    //Matakuliah
    public function MatakuliahIndex(Request $request)
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? AUth::guard('dosen')->user() : null;
        $matakuliahs = Matakuliah::with('dosen', 'prodi')
            ->when($request->search, function ($query) use ($request) {
                $search = '%' . $request->search . '%';
                $query->where('kode', 'like', $search)
                    ->orWhere('name', 'like', $search)
                    ->orWhereHas('prodi', function ($q) use ($search) {
                        $q->where('name', 'like', $search);
                    })
                    ->orWhereHas('dosen', function ($q) use ($search) {
                        $q->where('name', 'like', $search);
                    });
            })->paginate(5);


        return inertia('Admin/Matakuliahs/Matakuliah/Index', [
            'admin' => $admin,
            'dosen' => $dosen,
            'matakuliahs' => $matakuliahs
        ]);
    }

    public function CreateMatakuliah()
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? AUth::guard('dosen')->user() : null;

        $prodi = Prodi::pluck('id', 'name');
        $dosen = Dosen::pluck('id', 'name');

        return inertia('Admin/Matakuliahs/Matakuliah/Create', [
            'admin' => $admin,
            'dosen' => $dosen,
            'prodis' => $prodi,
            'dosens' => $dosen
        ]);
    }

    public function MatakuliahPost(Request $request)
    {
        try {
            $request->validate([
                'kode' => ['required', 'string', 'size:6', Rule::unique('matakuliahs')],
                'name' => ['required', 'string'],
                'jumlah_sks' => ['required', 'integer', 'digits:1'],
                'prodi_id' => ['required', 'exists:prodis,id'],
                'dosen_id' => ['required', 'exists:dosens,id']
            ], [
                'kode.required' => 'Kode Matkul wajib di isi!',
                'kode.string' => 'Kode Matkul harus berupa huruf!',
                'kode.size' => 'Kode Matkul harus 6 digit!',
                'kode.unique' => 'Kode Matkul sudah terdaftar!',
                'name.required' => 'Nama Matakuliah wajib di isi!',
                'name.string' => 'Nama Matakuliah harus berupa huruf!',
                'jumlah_sks.required' => 'Jumlah SKS wajib di isi!',
                'jumlah_sks.integer' => 'Jumlah SKS harus berupa angka!',
                'jumlah_sks.digits' => 'Jumlah SkS harus 1 digit',
                'prodi_id.required' => 'Nama Prodi wajib di isi!',
                'prodi_id.exists' => 'Nama Prodi tidak tersedia!',
                'dosen_id.required' => 'Wali Kelas wajib di isi!',
                'dosen_id.exists' => 'Wali Kelas tidak tersedia!'
            ]);

            Matakuliah::create([
                'kode' => $request['kode'],
                'name' => $request['name'],
                'jumlah_sks' => $request['jumlah_sks'],
                'prodi_id' => $request['prodi_id'],
                'dosen_id' => $request['dosen_id']
            ]);
            return redirect()->route('matakuliah')->with('message', 'Matakuliah telah di tambah');

        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->errors())->withInput();
        }
    }

    public function EditMatakuliah($matakuliah_id)
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? AUth::guard('dosen')->user() : null;

        $prodis = Prodi::pluck('id', 'name');
        $dosens = Dosen::pluck('id', 'name');

        $matakuliah = Matakuliah::findOrFail($matakuliah_id);

        return inertia('Admin/Matakuliahs/Matakuliah/Edit', [
            'admin' => $admin,
            'dosen' => $dosen,
            'prodis' => $prodis,
            'dosens' => $dosens,
            'matakuliah' => $matakuliah
        ]);
    }

    public function UpdateMatakuliah(Request $request, $matakuliah_id)
    {
        try {
            $matakuliah = Matakuliah::find($matakuliah_id);
            if (!$matakuliah) {
                return redirect()->back()->with('message', 'Data tidak terisi!');
            }

            $request->validate([
                'kode' => ['required', 'string', 'size:6', Rule::unique('matakuliahs')->ignore($matakuliah_id)],
                'name' => ['required', 'string'],
                'jumlah_sks' => ['required', 'integer', 'digits:1'],
                'prodi_id' => ['required', 'exists:prodis,id'],
                'dosen_id' => ['required', 'exists:dosens,id']
            ], [
                'kode.required' => 'Kode Matkul wajib di isi!',
                'kode.string' => 'Kode Matkul harus berupa huruf!',
                'kode.size' => 'Kode Matkul harus 6 digit!',
                'kode.unique' => 'Kode Matkul sudah terdaftar!',
                'name.required' => 'Nama Matakuliah wajib di isi!',
                'name.string' => 'Nama Matakuliah harus berupa huruf!',
                'jumlah_sks.required' => 'Jumlah SKS wajib di isi!',
                'jumlah_sks.integer' => 'Jumlah SKS harus berupa angka!',
                'jumlah_sks.digits' => 'Jumlah SkS harus 1 digit',
                'prodi_id.required' => 'Nama Prodi wajib di isi!',
                'prodi_id.exists' => 'Nama Prodi tidak tersedia!',
                'dosen_id.required' => 'Wali Kelas wajib di isi!',
                'dosen_id.exists' => 'Wali Kelas tidak tersedia!'
            ]);

            $updateData = [
                'kode' => $request['kode'],
                'name' => $request['name'],
                'jumlah_sks' => $request['jumlah_sks'],
                'prodi_id' => $request['prodi_id'],
                'dosen_id' => $request['dosen_id']
            ];

            $matakuliah->update($updateData);
            return redirect()->route('matakuliah')->with('message', 'Matakuliah telah di update');

        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->errors())->withInput();
        }
    }

    public function DeleteMatakuliah(Matakuliah $matakuliah)
    {
        $matakuliah->delete();
        return redirect()->route('matakuliah')->with('message', 'Matakuliah telah di hapus');
    }


    //Dosen
    public function IndexDosen($dosen_id)
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Dosen::with('prodi')->find($dosen_id);
        $matakuliahs = Matakuliah::where('dosen_id', $dosen->id)->get();

        return inertia('Admin/Matakuliahs/Dosen/Index', [
            'admin' => $admin,
            'dosen' => $dosen,
            'matakuliahs' => $matakuliahs
        ]);
    }

    public function CreateDosen($dosen_id)
    {
        $dosen = Dosen::with('prodi')->find($dosen_id);
        $dosens = Dosen::pluck('id', 'name');
        $prodis = Prodi::pluck('id', 'name');

        return inertia('Admin/Matakuliahs/Dosen/Create', [
            'dosen' => $dosen,
            'dosens' => $dosens,
            'prodis' => $prodis
        ]);
    }

    public function DosenPost(Request $request, $dosen_id)
    {
        try {
            $dosen = Dosen::find($dosen_id);
            if (!$dosen) {
                return redirect()->back()->with('message', 'Data tidak terisi!');
            }
            $request->validate([
                'kode' => ['required', 'string', 'size:6', Rule::unique('matakuliahs')],
                'name' => ['required', 'string'],
                'jumlah_sks' => ['required', 'integer', 'digits:1'],
                'prodi_id' => ['required', 'exists:prodis,id'],
                'dosen_id' => ['required', 'exists:dosens,id']
            ], [
                'kode.required' => 'Kode Matkul wajib di isi!',
                'kode.string' => 'Kode Matkul harus berupa huruf!',
                'kode.size' => 'Kode Matkul harus 6 digit!',
                'kode.unique' => 'Kode Matkul sudah terdaftar!',
                'name.required' => 'Nama Matakuliah wajib di isi!',
                'name.string' => 'Nama Matakuliah harus berupa huruf!',
                'jumlah_sks.required' => 'Jumlah SKS wajib di isi!',
                'jumlah_sks.integer' => 'Jumlah SKS harus berupa angka!',
                'jumlah_sks.digits' => 'Jumlah SkS harus 1 digit',
                'prodi_id.required' => 'Nama Prodi wajib di isi!',
                'prodi_id.exists' => 'Nama Prodi tidak tersedia!',
                'dosen_id.required' => 'Wali Kelas wajib di isi!',
                'dosen_id.exists' => 'Wali Kelas tidak tersedia!'
            ]);
            if ($request['dosen_id'] != $dosen->id) {
                return redirect()->back()->with('message', 'Data tidak sesuai');
            }
            Matakuliah::create([
                'kode' => $request['kode'],
                'name' => $request['name'],
                'jumlah_sks' => $request['jumlah_sks'],
                'prodi_id' => $request['prodi_id'],
                'dosen_id' => $request['dosen_id']
            ]);

            return redirect()->route('dosen.matakuliah', $dosen_id)->with('message', 'Matakuliah telah di tambah');
        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->errors())->withInput();
        }
    }


    //Mahasiswa
    public function IndexMahasiwa()
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;

        return inertia('Admin/Matakuliahs/Mahasiswa/Index', [
            'admin' => $admin,
            'dosen' => $dosen
        ]);
    }

    //Mahasiswa mengambil Matakuliah
    public function IndexMahasiswas(Request $request)
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;

        $mahasiswas = Mahasiswa::with('kelas.prodi')->when($request->search, function ($query) use ($request) {
            $search = '%' . $request->search . '%';
            $query->where('nama_lengkap', 'like', $search)
                ->orWhere('nim', 'like', $search)
                ->orWhereHas('kelas', function ($q) use ($search) {
                    $q->whereHas('prodi', function ($querys) use ($search) {
                        $querys->where('name', 'like', $search);
                    });
                });
        })->paginate(5);

        return inertia('Admin/Matakuliahs/Mahasiswa/Mahasiswas/Index', [
            'admin' => $admin,
            'dosen' => $dosen,
            'mahasiswas' => $mahasiswas
        ]);
    }

    public function ShowMahasiswa($mahasiswa_id)
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;

        $mahasiswa = Mahasiswa::with('kelas.prodi', 'matakuliahs')->find($mahasiswa_id);

        return inertia('Admin/Matakuliahs/Mahasiswa/Mahasiswas/Show', [
            'admin' => $admin,
            'dosen' => $dosen,
            'mahasiswa' => $mahasiswa
        ]);
    }

    public function CreateMahasiswa($mahasiswa_id)
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;

        $mahasiswa = Mahasiswa::with('kelas.prodi', 'matakuliahs')->find($mahasiswa_id);

        $matakuliahs = Matakuliah::with('mahasiswas')->where('prodi_id', $mahasiswa->kelas->prodi->id)->get();

        return inertia('Admin/Matakuliahs/Mahasiswa/Mahasiswas/Create', [
            'admin' => $admin,
            'dosen' => $dosen,
            'mahasiswa' => $mahasiswa,
            'matakuliahs' => $matakuliahs
        ]);
    }

    public function MahasiswaPost(Request $request, $mahasiswa_id)
    {
        try {
            $mahasiswa = Mahasiswa::find($mahasiswa_id);
            if (!$mahasiswa) {
                return redirect()->back()->with('message', 'Data tidak terisi!');
            }
            $validateData = $request->validate([
                'matakuliah_id' => ['array'],
                'matakuliah_id.*' => ['exists:matakuliahs,id']
            ]);

            $mahasiswa->matakuliahs()->sync($validateData['matakuliah_id'] ?? []);
            return redirect()->route('show.mahasiswa', $mahasiswa_id)->with('message', 'Matakuliah sudah di tambahkan');

        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->errors())->withInput();
        }
    }

    // Mendaftarkan Mahasiswa untuk Matakuliah
    public function IndexMatakuliah(Request $request)
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;

        $matakuliahs = Matakuliah::with('prodi')->when(
            $request->search,
            function ($query) use ($request) {
                $search = '%' . $request->search . '%';
                $query->where('kode', 'like', $search)
                    ->orWhere('name', 'like', $search)
                    ->orWhereHas('prodi', function ($q) use ($search) {
                        $q->where('name', 'like', $search);
                    });
            }
        )->paginate(5);

        return inertia('Admin/Matakuliahs/Mahasiswa/Matakuliahs/Index', [
            'admin' => $admin,
            'dosen' => $dosen,
            'matakuliahs' => $matakuliahs
        ]);
    }

    public function ShowMatakuliah($matakuliah_id)
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;

        $matakuliah = Matakuliah::with('mahasiswas', 'prodi', 'dosen')->find($matakuliah_id);

        return inertia('Admin/Matakuliahs/Mahasiswa/Matakuliahs/Show', [
            'admin' => $admin,
            'dosen' => $dosen,
            'matakuliah' => $matakuliah,
        ]);
    }

    public function CreateMatakuliahToMahasiswa($matakuliah_id)
    {

        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;

        $matakuliah = Matakuliah::with('mahasiswas', 'prodi.kelass.mahasiswas', 'dosen')->find($matakuliah_id);

        $matakuliah_toMahasiswas = $matakuliah->prodi->kelass->flatMap(function ($kelass) {
            return $kelass->mahasiswas;
        });

        $mahasiswas_toArr = $matakuliah_toMahasiswas->pluck('id');
        $mahasiswas = Mahasiswa::with('matakuliahs')->find($mahasiswas_toArr);

        // dd($matakuliah);

        return inertia('Admin/Matakuliahs/Mahasiswa/Matakuliahs/Create', [
            'admin' => $admin,
            'dosen' => $dosen,
            'matakuliah' => $matakuliah,
            'mahasiswas' => $mahasiswas
        ]);
    }

    public function MatakuliahtoMasasiswas(Request $request, $matakuliah_id)
    {
        try {
            $matakuliah = Matakuliah::find($matakuliah_id);
            if (!$matakuliah) {
                return redirect()->back()->with('message', 'Data tidak terisi!');
            }
            $validateData = $request->validate([
                'mahasiswa_id' => ['array'],
                'mahasiswa_id.*' => ['exists:mahasiswas,id']
            ]);

            $matakuliah->mahasiswas()->sync($validateData['mahasiswa_id'] ?? []);
            return redirect()->route('show.matakuliah', $matakuliah_id)->with('message', 'Matakuliah telah di daftarkan');

        } catch (ValidationException $e) {
            return redirect()->withErrors($e->errors())->withInput();
        }
    }
}
