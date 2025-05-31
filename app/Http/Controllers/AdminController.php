<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Dosen;
use App\Models\Kelas;
use App\Models\Prodi;
use App\Models\Mahasiswa;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Support\Facades\Gate;

class AdminController extends Controller
{
    use AuthorizesRequests;

    public function LoginAdmin()
    {
        return inertia("Auth/admin/LoginAdmin");
    }
    public function PostLogin(Request $request)
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

            // Logout semua guard agar tidak ada session yang tertinggal
            Auth::guard('admin')->logout();
            Auth::guard('dosen')->logout();
            session()->invalidate();
            session()->regenerateToken();

            $guards = ['admin', 'dosen'];
            $user = null;
            $role = null;

            foreach ($guards as $guard) {
                if (Auth::guard($guard)->attempt($request->only(['email', 'password']))) {
                    $user = Auth::guard($guard)->user();
                    $role = $guard;

                    // Regenerate session untuk menghindari konflik login
                    session()->regenerate();
                    return redirect()->route('dashboard')->with('message', $user->name . ' (' . ucfirst($role) . ') berhasil login!');
                }
            }

            return redirect()->back()->withErrors(['emailPassword' => 'Email atau password salah!'])->withInput();
        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->errors())->withInput();
        }
    }

    public function Dashboard()
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;
        $kelas = Kelas::with('prodi')->get();
        $prodi = Prodi::with('jurusan')->get();
        return inertia("Admin/Dashboard", [
            'admin' => $admin,
            'dosen' => $dosen,
            'kelas' => $kelas,
            'prodi' => $prodi
        ]);
    }

    public function Logout()
    {
        if (Auth::guard('admin')->user()) {
            Session::flush();

            Auth::guard('admin')->logout();
        }
        if (Auth::guard('dosen')->user()) {
            Session::flush();

            Auth::guard('dosen')->logout();
        }
        return redirect()->route('admin.login');
    }

    public function Users()
    {

        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;

        return inertia('Admin/Users/index', [
            'admin' => $admin,
            'dosen' => $dosen,
        ]);
    }

    public function Mahasiswas(Request $request)
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;

        $mahasiswa = Mahasiswa::with('kelas')
            ->when($request->search, function ($query) use ($request) {
                $search = '%' . $request->search . '%';
                $query->where('nama_lengkap', 'like', $search)
                    ->orWhere('email', 'like', $search)
                    ->orWhere('nim', 'like', $search)
                    ->orWhere('jenis_kelamin', 'like', $search)
                    ->orWhere('alamat', 'like', $search)
                    ->orWhere('agama', 'like', $search);
            })->paginate(5);

        return inertia('Admin/Users/Mahasiswa/Mahasiswas', [
            'admin' => $admin,
            'dosen' => $dosen,
            'mahasiwa' => $mahasiswa
        ]);
    }

    public function CreateMahasiswa()
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;
        $kelas = Kelas::pluck('id', 'name');

        return inertia('Admin/Users/Mahasiswa/CreateMahasiswa', [
            'admin' => $admin,
            'dosen' => $dosen,
            'kelas' => $kelas
        ]);
    }

    public function MahasiswaPost(Request $request)
    {
        try {
            $request->validate(
                [
                    'email' => ['required', 'string', 'email', 'unique:mahasiswas,email'],
                    'password' => ['required', 'string', 'min:8', 'confirmed'],
                    'first_name' => ['required', 'string', 'min:2'],
                    'last_name' => ['required', 'string', 'min:2'],
                    'nim' => ['required', 'numeric', 'digits_between:10,12', 'unique:mahasiswas,nim'],
                    'alamat' => ['required', 'string', 'min:3'],
                    'agama' => ['required', 'string', 'in:islam,kristen,katolik,hindu,buddha,konghucu'],
                    'jenis_kelamin' => ['required', 'string', 'in:pria,wanita'],
                    'kelas_id' => ['required', 'integer', 'exists:kelas,id']
                ],
                [
                    'email.required' => 'Email wajib di isi!',
                    'email.string' => 'Email harus berupa huruf!',
                    'email.email' => 'Inputan bukan email',
                    'email.unique' => 'Email sudah terdaftar!',
                    'password.required' => 'Password wajib di isi!',
                    'password.string' => 'Password harus berupa huruf!',
                    'password.min' => 'Password kurang dari 8 kata!',
                    'password.confirmed' => 'Password tidak sama!',
                    'first_name.required' => 'First name wajib di isi!',
                    'first_name.string' => 'First name harus berupa huruf!',
                    'first_name.min' => 'First name kurang dari 2 huruf!',
                    'last_name.required' => 'Last name wajib di isi!',
                    'last_name.string' => 'Last name harus berupa huruf!',
                    'last_name.min' => 'Last name kurang dari 2 huruf!',
                    'nim.required' => 'NIM wajib di isi!',
                    'nim.numeric' => 'NIM harus berupa angka!',
                    'nim.digits_between' => 'NIM harus terdiri dari 10-12 digit angka!',
                    'nim.unique' => 'NIM udah terdaftar!',
                    'alamat.required' => 'Alamat wajib di isi!',
                    'alamat.string' => 'Alamat harus berupa huruf!',
                    'alamat.min' => 'Alamat kurang dari 3 kata!',
                    'agama.required' => 'Agama wajib di isi!',
                    'agama.string' => 'Agama harus berupa huruf!',
                    'agama.in' => 'Agama harus salah satu dari: islam, kristen, katolik, hindu, buddha, konghucu!',
                    'jenis_kelamin.required' => 'Jenis kelamin wajib di isi!',
                    'jenis_kelamin.string' => 'Jenis kelamin harus berupa kata!',
                    'jenis_kelamin.in' => 'Jenis kelamin harus salah satu dari : Pria dan Wanita!',
                    'kelas_id.required' => 'Kelas wajib di isi!',
                    'kelas_id.integer' => 'Kelas harus berupa angka!',
                    'kelas_id.exists' => 'Kelas yang di pilih tidak tersedia!'
                ]
            );

            $kelas = Kelas::with('mahasiswas')->find($request->kelas_id);
            if ($kelas->mahasiswas->count() >= $kelas->data_tampung) {
                return redirect()->route('createmahasiswas')->with('message', 'Kuota kelas telah penuh!');
            }

            Mahasiswa::create([
                'nama_lengkap' => trim($request->first_name . ' ' . $request->last_name),
                'email' => $request['email'],
                'nim' => $request['nim'],
                'jenis_kelamin' => $request['jenis_kelamin'],
                'alamat' => $request['alamat'],
                'agama' => $request['agama'],
                'password' => Hash::make($request['password']),
                'kelas_id' => $request['kelas_id']
            ]);

            return redirect()->route('mahasiswas')->with('message', 'Mahasiswa berhasil di tambahkan!');

        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->errors())->withInput();
        }
    }


    public function EditMahasiswa($mahasiswa_id)
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;
        $mahasiswa = Mahasiswa::with('kelas')->findOrFail($mahasiswa_id);
        $kelas = Kelas::pluck('id', 'name');

        $nameparts = explode(' ', $mahasiswa->nama_lengkap, 2);

        return inertia('Admin/Users/Mahasiswa/EditMahasiswa', [
            'admin' => $admin,
            'dosen' => $dosen,
            'mahasiswa' => $mahasiswa,
            'kelas' => $kelas,
            'name_parts' => [
                'first_name' => $nameparts[0] ?? '',
                'last_name' => $nameparts[1] ?? ''
            ]
        ]);
    }

    public function MahasiswaUpdate(Request $request, $mahasiswa_id)
    {
        try {
            $mahasiswa = Mahasiswa::find($mahasiswa_id);

            if (!$mahasiswa) {
                return redirect()->back()->with('message', 'Data tidak terisi!');
            }

            $request->validate(
                [
                    'email' => ['required', 'string', 'email', Rule::unique('mahasiswas')->ignore($mahasiswa)],
                    'password' => ['nullable', 'string', 'min:8', 'confirmed'],
                    'first_name' => ['required', 'string', 'min:2'],
                    'last_name' => ['required', 'string', 'min:2'],
                    'nim' => ['required', 'numeric', 'digits_between:10,12', Rule::unique('mahasiswas')->ignore($mahasiswa)],
                    'alamat' => ['required', 'string', 'min:3'],
                    'agama' => ['required', 'string', 'in:islam,kristen,katolik,hindu,buddha,konghucu'],
                    'jenis_kelamin' => ['required', 'string', 'in:pria,wanita'],
                    'kelas_id' => ['required', 'integer', 'exists:kelas,id']
                ],
                [
                    'email.required' => 'Email wajib di isi!',
                    'email.string' => 'Email harus berupa huruf!',
                    'email.email' => 'Inputan bukan email',
                    'email.unique' => 'Email sudah terdaftar!',
                    'password.string' => 'Password harus berupa huruf!',
                    'password.min' => 'Password kurang dari 8 kata!',
                    'password.confirmed' => 'Password tidak sama!',
                    'first_name.required' => 'First name wajib di isi!',
                    'first_name.string' => 'First name harus berupa huruf!',
                    'first_name.min' => 'First name kurang dari 2 huruf!',
                    'last_name.required' => 'Last name wajib di isi!',
                    'last_name.string' => 'Last name harus berupa huruf!',
                    'last_name.min' => 'Last name kurang dari 2 huruf!',
                    'nim.required' => 'NIM wajib di isi!',
                    'nim.numeric' => 'NIM harus berupa angka!',
                    'nim.digits_between' => 'NIM harus terdiri dari 10-12 digit angka!',
                    'nim.unique' => 'NIM udah terdaftar!',
                    'alamat.required' => 'Alamat wajib di isi!',
                    'alamat.string' => 'Alamat harus berupa huruf!',
                    'alamat.min' => 'Alamat kurang dari 3 kata!',
                    'agama.required' => 'Agama wajib di isi!',
                    'agama.string' => 'Agama harus berupa huruf!',
                    'agama.in' => 'Agama harus salah satu dari: islam, kristen, katolik, hindu, buddha, konghucu!',
                    'jenis_kelamin.required' => 'Jenis kelamin wajib di isi!',
                    'jenis_kelamin.string' => 'Jenis kelamin harus berupa kata!',
                    'jenis_kelamin.in' => 'Jenis kelamin harus salah satu dari : Pria dan Wanita!',
                    'kelas_id.required' => 'Kelas wajib di isi!',
                    'kelas_id.integer' => 'Kelas harus berupa angka!',
                    'kelas_id.exists' => 'Kelas yang di pilih tidak tersedia!'
                ]
            );
            $kelas = Kelas::with('mahasiswas')->find($request->kelas_id);
            if ($kelas->mahasiswas->count() >= $kelas->data_tampung) {
                return redirect()->route('mahasiswa.edit', $mahasiswa_id)->with('message', 'Kuota kelas telah penuh!');
            }

            $updateData = [
                'nama_lengkap' => trim($request->first_name . ' ' . $request->last_name),
                'email' => $request['email'],
                'nim' => $request['nim'],
                'jenis_kelamin' => $request['jenis_kelamin'],
                'alamat' => $request['alamat'],
                'agama' => $request['agama'],
                'kelas_id' => $request['kelas_id']
            ];

            //Jika password di isi
            if (!empty($request->password)) {
                $updateData['password'] = Hash::make($request->password);
            }

            $mahasiswa->update($updateData);

            return redirect()->route('mahasiswas')->with('message', 'Mahasiswa telah di update!');

        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->errors())->withInput();
        }
    }

    public function MahasiswaDelete(Mahasiswa $mahasiswa)
    {
        $mahasiswa->delete();

        return redirect()->route('mahasiswas')->with('message', 'Mahasiswa berhasil dihapus!');
    }




    //Dosen
    public function Dosens(Request $request)
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosens = Dosen::with('prodi')->when(
            $request->search,
            function ($query) use ($request) {
                $search = '%' . $request->search . '%';
                $query->where('name', 'like', $search)
                    ->orWhere('email', 'like', $search)
                    ->orWhere('nid', 'like', $search)
                    ->orWhere('alamat', 'like', $search)
                    ->orWhere('no_telp', 'like', $search)
                    ->orWhereHas('prodi', function ($q) use ($search) {
                        $q->where('name', 'like', $search);
                    });
            }
        )->paginate(5);

        return inertia('Admin/Users/Dosen/Dosens', [
            'admin' => $admin,
            'dosens' => $dosens
        ]);
    }
    public function CreateDosen()
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $prodi = Prodi::pluck('id', 'name');

        return inertia('Admin/Users/Dosen/CreateDosen', [
            'admin' => $admin,
            'prodi' => $prodi
        ]);
    }

    public function DosenPost(Request $request)
    {
        try {
            $request->validate(
                [
                    'email' => ['required', 'string', 'email', 'unique:dosens,email'],
                    'password' => ['required', 'string', 'min:8', 'confirmed'],
                    'first_name' => ['required', 'string', 'min:2'],
                    'last_name' => ['required', 'string', 'min:2'],
                    'nid' => ['required', 'numeric', 'digits:10', 'unique:dosens,nid'],
                    'alamat' => ['required', 'string', 'min:3'],
                    'no_telp' => ['required', 'numeric', 'digits_between:10,12'],
                    'prodi_id' => ['required', 'integer', 'exists:prodis,id']
                ],
                [
                    'email.required' => 'Email wajib di isi!',
                    'email.string' => 'Email harus berupa huruf!',
                    'email.email' => 'Inputan bukan email',
                    'email.unique' => 'Email sudah terdaftar!',
                    'password.required' => 'Password wajib di isi!',
                    'password.string' => 'Password harus berupa huruf!',
                    'password.min' => 'Password kurang dari 8 kata!',
                    'password.confirmed' => 'Password tidak sama!',
                    'first_name.required' => 'First name wajib di isi!',
                    'first_name.string' => 'First name harus berupa huruf!',
                    'first_name.min' => 'First name kurang dari 2 huruf!',
                    'last_name.required' => 'Last name wajib di isi!',
                    'last_name.string' => 'Last name harus berupa huruf!',
                    'last_name.min' => 'Last name kurang dari 2 huruf!',
                    'alamat.required' => 'Alamat wajib di isi!',
                    'alamat.string' => 'Alamat harus berupa huruf!',
                    'alamat.min' => 'Alamat kurang dari 3 kata!',
                    'nid.required' => 'NID wajib di isi!',
                    'nid.numeric' => 'NID harus berupa angka!',
                    'nid.digits' => 'NID harus terdiri 10 digit angka!',
                    'nid.unique' => 'NID udah terdaftar!',
                    'no_telp.required' => 'No.Telp wajib di isi!',
                    'no_telp.numeric' => 'No.Telp harus berupa angka!',
                    'no_telp.digits_between' => 'No.Telp harus terdiri dari 10 hingga 12 angka!',
                    'prodi_id.required' => 'Prodi wajib di isi!',
                    'prodi_id.integer' => 'Prodi harus berupa angka!',
                    'prodi_id.exists' => 'Prodi yang di pilih tidak tersedia!'
                ]
            );

            Dosen::create([
                'name' => trim($request->first_name . ' ' . $request->last_name),
                'email' => $request['email'],
                'nid' => $request['nid'],
                'alamat' => $request['alamat'],
                'no_telp' => $request['no_telp'],
                'password' => Hash::make($request['password']),
                'prodi_id' => $request['prodi_id']
            ]);

            return redirect()->route('dosens')->with('message', 'Dosen berhasil ditambahkan');

        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->errors())->withInput();
        }
    }

    public function EditDosen($dosen_id)
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Dosen::with('prodi')->findOrFail($dosen_id);
        $prodi = Prodi::pluck('id', 'name');

        $nameParts = explode(' ', $dosen->name, 2);

        return inertia('Admin/Users/Dosen/EditDosen', [
            'admin' => $admin,
            'dosen' => $dosen,
            'prodi' => $prodi,
            'namepart' => [
                'first_name' => $nameParts[0],
                'last_name' => $nameParts[1]
            ]
        ]);
    }

    public function DosenUpdate(Request $request, $dosen_id)
    {
        try {

            $dosen = Dosen::with('prodi')->find($dosen_id);

            if (!$dosen) {
                return redirect()->back()->with('message', 'Data tidak terisi!');
            }

            $request->validate(
                [
                    'email' => ['required', 'string', 'email', Rule::unique('dosens')->ignore($dosen)],
                    'password' => ['nullable', 'string', 'min:8', 'confirmed'],
                    'first_name' => ['required', 'string', 'min:2'],
                    'last_name' => ['required', 'string', 'min:2'],
                    'nid' => ['required', 'numeric', 'digits:10', Rule::unique('dosens')->ignore($dosen)],
                    'alamat' => ['required', 'string', 'min:3'],
                    'no_telp' => ['required', 'numeric', 'digits_between:10,12'],
                    'prodi_id' => ['required', 'integer', 'exists:prodis,id']
                ],
                [
                    'email.required' => 'Email wajib di isi!',
                    'email.string' => 'Email harus berupa huruf!',
                    'email.email' => 'Inputan bukan email',
                    'email.unique' => 'Email sudah terdaftar!',
                    'password.string' => 'Password harus berupa huruf!',
                    'password.min' => 'Password kurang dari 8 kata!',
                    'password.confirmed' => 'Password tidak sama!',
                    'first_name.required' => 'First name wajib di isi!',
                    'first_name.string' => 'First name harus berupa huruf!',
                    'first_name.min' => 'First name kurang dari 2 huruf!',
                    'last_name.required' => 'Last name wajib di isi!',
                    'last_name.string' => 'Last name harus berupa huruf!',
                    'last_name.min' => 'Last name kurang dari 2 huruf!',
                    'alamat.required' => 'Alamat wajib di isi!',
                    'alamat.string' => 'Alamat harus berupa huruf!',
                    'alamat.min' => 'Alamat kurang dari 3 kata!',
                    'nid.required' => 'NID wajib di isi!',
                    'nid.numeric' => 'NID harus berupa angka!',
                    'nid.digits' => 'NID harus terdiri 10 digit angka!',
                    'nid.unique' => 'NID udah terdaftar!',
                    'no_telp.required' => 'No.Telp wajib di isi!',
                    'no_telp.numeric' => 'No.Telp harus berupa angka!',
                    'no_telp.digits_between' => 'No.Telp harus terdiri dari 10 hingga 12 angka!',
                    'prodi_id.required' => 'Prodi wajib di isi!',
                    'prodi_id.integer' => 'Prodi harus berupa angka!',
                    'prodi_id.exists' => 'Prodi yang di pilih tidak tersedia!'
                ]
            );

            $updateData = [
                'name' => trim($request->first_name . ' ' . $request->last_name),
                'email' => $request['email'],
                'nid' => $request['nid'],
                'alamat' => $request['alamat'],
                'no_telp' => $request['no_telp'],
                'prodi_id' => $request['prodi_id']
            ];

            if (!empty($request->password)) {
                $updateData['password'] = Hash::make($request['password']);
            }

            $dosen->update($updateData);

            return redirect()->route('dosens')->with('message', 'Dosen telah di update!');

        } catch (ValidationException $e) {
            return redirect()->back()->withErrors($e->errors())->withInput();
        }
    }

    public function DosenDelete(Dosen $dosen)
    {
        $dosen->delete();

        return redirect()->route('dosens')->with('message', 'Dosen berhasil dihapus!');
    }

    //Profile
    public function Profile()
    {
        $admin = Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null;
        $dosen = Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null;

        if ($admin) {
            $user = Admin::find($admin->id);
        } else if ($dosen) {
            $user = Dosen::with('prodi.jurusan', 'kelass', 'matakuliahs')->find($dosen->id);
        } else {
            $user = null;
        }

        return inertia('Admin/Profile', [
            'user' => $user
        ]);
    }



}
