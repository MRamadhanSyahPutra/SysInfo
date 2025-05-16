<?php

namespace App\Http\Controllers;

use App\Models\Jurusan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class JurusanController extends Controller
{
    public function Jurusans(Request $request)
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;

        $jurusans = Jurusan::with('prodis')->when(
            $request->search,
            function ($query) use ($request) {
                $search = '%' . $request->search . '%';
                $query->where('name', 'like', $search);
            }
        )->paginate(5);

        return inertia('Admin/Jurusans/index', [
            'admin' => $admin,
            'dosen' => $dosen,
            'jurusans' => $jurusans
        ]);
    }

    public function CreateJurusan()
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;

        return inertia('Admin/Jurusans/CreateJurusan', [
            'admin' => $admin,
            'dosen' => $dosen
        ]);
    }

    public function JurusanPost(Request $request)
    {
        try {
            $request->validate(
                [
                    'name' => ['required', 'string']
                ],
                [
                    'name.required' => 'Nama Jurusan wajib di isi!',
                    'name.string' => 'Nama Jurusan harus berupa huruf!'
                ]
            );

            Jurusan::create([
                'name' => $request['name']
            ]);

            return redirect()->route('jurusan')->with('message', 'Jurusan telah di tambah!');
        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->errors())->withInput();
        }
    }

    public function EditJurusan($jurusan_id)
    {
        $jurusan = Jurusan::findOrFail($jurusan_id);
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;

        return inertia('Admin/Jurusans/EditJurusan', [
            'admin' => $admin,
            'dosen' => $dosen,
            'jurusan' => $jurusan
        ]);
    }

    public function UpdateJurusan(Request $request, $jurusan_id)
    {
        try {
            $jurusan = Jurusan::find($jurusan_id);

            if (!$jurusan) {
                return redirect()->back()->with('message', 'Data tidak terisi!');
            }

            $request->validate(
                [
                    'name' => ['required', 'string']
                ],
                [
                    'name.required' => 'Nama Jurusan wajib di isi!',
                    'name.string' => 'Nama Jurusan harus berupa huruf!'
                ]
            );
            $updateData = [
                'name' => $request['name']
            ];

            $jurusan->update($updateData);
            return redirect()->route('jurusan')->with('message', 'Jurusan telah di Update');

        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->errors())->withInput();
        }
    }

    public function JurusanDelete(Jurusan $jurusan)
    {
        $jurusan->delete();
        return redirect()->route('jurusan')->with('message', 'Jurusan telah di Hapus!');
    }


}
