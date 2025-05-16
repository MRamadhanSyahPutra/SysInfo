<?php

namespace App\Http\Controllers;

use App\Models\Jurusan;
use App\Models\Prodi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class ProdiController extends Controller
{
    public function Prodis(Request $request)
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;

        $prodi = Prodi::with('jurusan')->when(
            $request->search,
            function ($query) use ($request) {
                $search = '%' . $request->search . '%';
                $query->where('name', 'like', $search)
                    ->orWhere('kepala_prodi', 'like', $search);
            }
        )->paginate(5);

        return inertia('Admin/Prodis/Index', [
            'admin' => $admin,
            'dosen' => $dosen,
            'prodis' => $prodi
        ]);
    }

    public function CreateProdi()
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;
        $jurusan = Jurusan::pluck('id', 'name');

        return inertia('Admin/Prodis/CreateProdi', [
            'admin' => $admin,
            'dosen' => $dosen,
            'jurusan' => $jurusan
        ]);
    }

    public function ProdiPost(Request $request)
    {
        try {
            $request->validate([
                'name' => ['required', 'string'],
                'kepala_prodi' => ['required', 'string'],
                'jurusan_id' => ['required', 'exists:jurusans,id']
            ], [
                'name.required' => 'Nama Prodi wajib di isi!',
                'name.string' => 'Nama Prodi harus berupa huruf!',
                'kepala_prodi.required' => 'Kepala Prodi wajib di isi!',
                'kepala_prodi.string' => 'Kepala Prodi harus berupa huruf!',
                'jurusan_id.required' => 'Jurusan wajib di isi!',
                'jurusan_id.exists' => 'Jurusan yang di pilih tidak tersedia!'
            ]);

            Prodi::create([
                'name' => $request['name'],
                'kepala_prodi' => $request['kepala_prodi'],
                'jurusan_id' => $request['jurusan_id']
            ]);

            return redirect()->route('prodi')->with('message', 'Prodi telah di tambah');

        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->errors())->withInput();
        }
    }

    public function ProdiEdit($prodi_id)
    {
        $prodi = Prodi::findOrFail($prodi_id);

        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;
        $jurusan = Jurusan::pluck('id', 'name');

        return inertia('Admin/Prodis/EditProdi', [
            'admin' => $admin,
            'dosen' => $dosen,
            'prodi' => $prodi,
            'jurusan' => $jurusan
        ]);
    }

    public function UpdateProdi(Request $request, $prodi_id)
    {
        try {
            $prodi = Prodi::find($prodi_id);

            if (!$prodi) {
                return redirect()->back()->with('message', 'Data tidak terisi!');
            }

            $request->validate([
                'name' => ['required', 'string'],
                'kepala_prodi' => ['required', 'string'],
                'jurusan_id' => ['required', 'exists:jurusans,id']
            ], [
                'name.required' => 'Nama Prodi wajib di isi!',
                'name.string' => 'Nama Prodi harus berupa huruf!',
                'kepala_prodi.required' => 'Kepala Prodi wajib di isi!',
                'kepala_prodi.string' => 'Kepala Prodi harus berupa huruf!',
                'jurusan_id.required' => 'Jurusan wajib di isi!',
                'jurusan_id.exists' => 'Jurusan yang di pilih tidak tersedia!'
            ]);

            $updateData = [
                'name' => $request['name'],
                'kepala_prodi' => $request['kepala_prodi'],
                'jurusan_id' => $request['jurusan_id']
            ];

            $prodi->update($updateData);
            return redirect()->route('prodi')->with('message', 'Prodi telah di update');

        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->errors())->withInput();
        }
    }

    public function ProdiDelete(Prodi $prodi)
    {
        $prodi->delete();
        return redirect()->route('prodi')->with('message', 'Prodi telah di hapus');
    }


}
