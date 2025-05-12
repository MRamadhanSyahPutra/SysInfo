<?php

namespace App\Http\Controllers;

use App\Models\Jurusan;
use App\Models\Prodi;
use App\Models\Mahasiswa;
use App\Models\Matakuliah;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\ValidationException;

class MahasiswaController extends Controller
{

    public function Welcome()
    {
        return inertia('Welcome', [
            'auth' =>
                [
                    'mhs' => Auth::guard('mahasiswa')->user(),
                    'dosen' => Auth::guard('dosen')->user(),
                    'admin' => Auth::guard('admin')->user(),
                ]
        ]);
    }
    public function About()
    {
        return inertia('About', [
            'auth' =>
                [
                    'mhs' => Auth::guard('mahasiswa')->user(),
                    'dosen' => Auth::guard('dosen')->user(),
                    'admin' => Auth::guard('admin')->user(),
                ],
            'mhs' => Mahasiswa::with('kelas')->get(),
            'prodi' => Prodi::with('jurusan')->get(),
            'jn' => Jurusan::with('prodis')->get(),
            'mk' => Matakuliah::with('prodi')->get(),
        ]);
    }

    public function LoginMahasiswa()
    {
        return inertia("Auth/user/Login");
    }

    public function LoginMPost(Request $request)
    {
        try {
            $request->validate([
                'email' => 'required|email',
                'password' => 'required',
            ], [
                'email.required' => 'Email wajib diisi!',
                'email.email' => 'Format email tidak valid!',
                'password.required' => 'Password wajib diisi!',
            ]);
            Auth::guard('mahasiswa')->logout();
            session()->invalidate();
            session()->regenerateToken();

            if (Auth::guard('mahasiswa')->attempt($request->only(['email', 'password']))) {
                $mhs = Auth::guard('mahasiswa')->user();
                session()->regenerate();
                return redirect()->route('home')->with('message', "$mhs->name berhasil login!");
            }
            return redirect()->back()->withErrors(['emailpassword' => 'Email atau password salah!'])->withInput();

        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->errors())->withInput();
        }

    }

    public function Home()
    {
        return inertia('Mahasiswa/Home', [
            'auth' => [
                'mhs' => Auth::guard('mahasiswa')->user(),
                'dosen' => Auth::guard('dosen')->user(),
                'admin' => Auth::guard('admin')->user(),
            ],
        ]);
    }


    public function Logout()
    {
        Session::flush();
        Auth::guard('mahasiswa')->logout();

        return redirect()->route('welcome');
    }
}
