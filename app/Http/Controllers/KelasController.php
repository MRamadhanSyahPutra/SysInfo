<?php

namespace App\Http\Controllers;

use App\Models\Dosen;
use App\Models\Kelas;
use App\Models\Prodi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class KelasController extends Controller
{
    public function Index()
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;

        return inertia('Admin/Class/Index', [
            'admin' => $admin,
            'dosen' => $dosen,
        ]);
    }

    //Admin
    public function IndexAdmin(Request $request)
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;
        $kelas = Kelas::with('dosen', 'prodi')->when($request->search, function ($query) use ($request) {
            $search = '%' . $request->search . '%';
            $query->where('name', 'like', $search)
                ->orWhere('jenis_kelas', 'like', $search)
                ->orWhere('data_tampung', 'like', $search);
        })->paginate(5);

        return inertia('Admin/Class/Admin/Index', [
            'admin' => $admin,
            'dosen' => $dosen,
            'kelas' => $kelas
        ]);
    }

    public function CreateKelas()
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;

        $prodis = Prodi::pluck('id', 'name');
        $dosens = Dosen::pluck('id', 'name');

        return inertia('Admin/Class/Admin/CreateKelas', [
            'admin' => $admin,
            'dosen' => $dosen,
            'prodis' => $prodis,
            'dosens' => $dosens
        ]);
    }

    public function ClassPost(Request $request)
    {
        try {
            $request->validate([
                'name' => ['required', 'string', 'between:4,10'],
                'jenis_kelas' => ['required', 'string', 'in:Pagi,Malam'],
                'data_tampung' => ['required', 'integer', 'digits_between:2,3'],
                'prodi_id' => ['required', 'exists:kelas,id'],
                'dosen_id' => ['required', 'exists:dosens,id']
            ], [
                'name.required' => 'Kode kelas wajib di isi!',
                'name.string' => 'Kode kelas harus berupa huruf!',
                'name.between' => 'Kode kelas harus terdiri dari 4-10 digit!',
                'jenis_kelas.required' => 'Jenis kelas wajib di isi!',
                'jenis_kelas.string' => 'Jenis kelas harus berupa huruf!',
                'jenis_kelas.in' => 'Jenis kelas harus salah satu dari: Pagi dan Malam!',
                'data_tampung.required' => 'Data tampung wajib di isi!',
                'data_tampung.integer' => 'Data tampung harus berupa angka!',
                'data_tampung.digits_between' => 'Data tampung harus terdiri dari 2-3 digit!',
                'prodi_id.required' => 'Nama Prodi wajib di isi!',
                'prodi_id.exists' => 'Nama Prodi tidak tersedia',
                'dosen_id.required' => 'Wali kelas wajib di isi!',
                'dosen_id.exists' => 'Wali kelas tidak tersedia'
            ]);

            Kelas::create([
                'name' => $request['name'],
                'jenis_kelas' => $request['jenis_kelas'],
                'data_tampung' => $request['data_tampung'],
                'prodi_id' => $request['prodi_id'],
                'dosen_id' => $request['dosen_id']
            ]);
            return redirect()->route('class.admin')->with('message', 'Kelas telah di tambah');

        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->errors())->withInput();
        }
    }

    public function ClassEdit($kelas_id)
    {
        $kelas = Kelas::findOrFail($kelas_id);
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;

        $prodis = Prodi::pluck('id', 'name');
        $dosens = Dosen::pluck('id', 'name');

        return inertia('Admin/Class/Admin/EditKelas', [
            'admin' => $admin,
            'dosen' => $dosen,
            'kelas' => $kelas,
            'prodis' => $prodis,
            'dosens' => $dosens
        ]);
    }

    public function ClassUpdate(Request $request, $kelas_id)
    {
        $kelas = Kelas::find($kelas_id);
        if (!$kelas) {
            return redirect()->back()->with('message', 'Data tidak terisi!');
        }

        $request->validate([
            'name' => ['required', 'string', 'between:4,10'],
            'jenis_kelas' => ['required', 'string', 'in:Pagi,Malam'],
            'data_tampung' => ['required', 'integer', 'digits_between:2,3'],
            'prodi_id' => ['required', 'exists:kelas,id'],
            'dosen_id' => ['required', 'exists:dosens,id']
        ], [
            'name.required' => 'Kode kelas wajib di isi!',
            'name.string' => 'Kode kelas harus berupa huruf!',
            'name.between' => 'Kode kelas harus terdiri dari 4-10 digit!',
            'jenis_kelas.required' => 'Jenis kelas wajib di isi!',
            'jenis_kelas.string' => 'Jenis kelas harus berupa huruf!',
            'jenis_kelas.in' => 'Jenis kelas harus salah satu dari: Pagi dan Malam!',
            'data_tampung.required' => 'Data tampung wajib di isi!',
            'data_tampung.integer' => 'Data tampung harus berupa angka!',
            'data_tampung.digits_between' => 'Data tampung harus terdiri dari 2-3 digit!',
            'prodi_id.required' => 'Nama Prodi wajib di isi!',
            'prodi_id.exists' => 'Nama Prodi tidak tersedia',
            'dosen_id.required' => 'Wali kelas wajib di isi!',
            'dosen_id.exists' => 'Wali kelas tidak tersedia'
        ]);

        $updateData = [
            'name' => $request['name'],
            'jenis_kelas' => $request['jenis_kelas'],
            'data_tampung' => $request['data_tampung'],
            'prodi_id' => $request['prodi_id'],
            'dosen_id' => $request['dosen_id']
        ];

        $kelas->update($updateData);
        return redirect()->route('class.admin')->with('message', 'Kelas telah di update');
    }

    public function ClassDelete(Kelas $kelas)
    {
        $kelas->delete();
        return redirect()->route('class.admin')->with('message', 'Kelas telah di hapus');
    }


    //Dosen
    public function IndexDosen($dosen_id)
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Dosen::find($dosen_id);

        $prodi = Prodi::with('jurusan')->find($dosen->prodi_id);

        $kelas = Kelas::where('dosen_id', $dosen->id)->get();

        return inertia('Admin/Class/Dosen/Index', [
            'admin' => $admin,
            'dosen' => $dosen,
            'prodi' => $prodi,
            'kelas' => $kelas
        ]);
    }

    public function CreateClassToDosen($dosen_id)
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Dosen::find($dosen_id);

        $dosens = Dosen::pluck('id', 'name');
        $prodis = Prodi::pluck('id', 'name');

        return inertia('Admin/Class/Dosen/CreateKelas', [
            'admin' => $admin,
            'dosen' => $dosen,
            'dosens' => $dosens,
            'prodis' => $prodis
        ]);
    }

    public function ClassToDosenPost(Request $request, $dosen_id)
    {
        try {
            $dosen = Dosen::find($dosen_id);
            if (!$dosen) {
                return redirect()->back()->with('message', 'Data tidak terisi!');
            }

            $request->validate([
                'name' => ['required', 'string', 'between:4,10'],
                'jenis_kelas' => ['required', 'string', 'in:Pagi,Malam'],
                'data_tampung' => ['required', 'integer', 'digits_between:2,3'],
                'prodi_id' => ['required', 'exists:kelas,id'],
                'dosen_id' => ['required', 'exists:dosens,id']
            ], [
                'name.required' => 'Kode kelas wajib di isi!',
                'name.string' => 'Kode kelas harus berupa huruf!',
                'name.between' => 'Kode kelas harus terdiri dari 4-10 digit!',
                'jenis_kelas.required' => 'Jenis kelas wajib di isi!',
                'jenis_kelas.string' => 'Jenis kelas harus berupa huruf!',
                'jenis_kelas.in' => 'Jenis kelas harus salah satu dari: Pagi dan Malam!',
                'data_tampung.required' => 'Data tampung wajib di isi!',
                'data_tampung.integer' => 'Data tampung harus berupa angka!',
                'data_tampung.digits_between' => 'Data tampung harus terdiri dari 2-3 digit!',
                'prodi_id.required' => 'Nama Prodi wajib di isi!',
                'prodi_id.exists' => 'Nama Prodi tidak tersedia',
                'dosen_id.required' => 'Wali kelas wajib di isi!',
                'dosen_id.exists' => 'Wali kelas tidak tersedia'
            ]);
            if ($request['dosen_id'] != $dosen->id) {
                return redirect()->back()->with('message', 'Data tidak sesuai');
            }

            Kelas::create([
                'name' => $request['name'],
                'jenis_kelas' => $request['jenis_kelas'],
                'data_tampung' => $request['data_tampung'],
                'prodi_id' => $request['prodi_id'],
                'dosen_id' => $request['dosen_id']
            ]);
            return redirect()->route('class.dosen', $dosen->id)->with('message', 'Kelas telah di tambah');

        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->errors())->withInput();
        }
    }
}
