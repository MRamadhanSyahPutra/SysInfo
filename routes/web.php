<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\KelasController;
use App\Http\Controllers\ProdiController;
use App\Http\Controllers\JurusanController;
use App\Http\Controllers\MahasiswaController;
use App\Http\Controllers\MatakuliahController;

//Welcome
Route::prefix('/')->group(function () {
    Route::controller(MahasiswaController::class)->group(function () {
        Route::get('/', 'Welcome')->name('welcome');
        Route::get('about', 'About')->name('about');
    });
    Route::controller(MahasiswaController::class)->middleware(['web', 'guest.mhs', 'guest.multi'])->group(function () {
        Route::get('login', 'LoginMahasiswa')->name('login');
        Route::post('login', 'LoginMPost')->name('postlogin');
    });
});

// Home
Route::prefix('home')->middleware('auth.mhs')->group(function () {
    Route::controller(MahasiswaController::class)->group(function () {
        Route::get('/', 'Home')->name('home');
        Route::get('logout', 'Logout')->name('logout.mhs');
    });
});

Route::get(
    'test',
    function () {
        echo 'Test 1';
    }
);

// Admin
Route::prefix('admin')->group(function () {
    Route::redirect('/', 'admin/login');

    Route::controller(AdminController::class)->middleware(['web', 'guest.multi', 'guest.mhs'])->group(function () {
        Route::get('login', 'LoginAdmin')->name('admin.login');
        Route::post('login', 'PostLogin')->name('postlogin.admin');
    });


    //route yang di amankan
    Route::prefix('dashboard')->middleware(['auth.multi', 'guest.mhs'])->group(function () {
        Route::controller(AdminController::class)->group(function () {
            Route::get('/', 'Dashboard')->name('dashboard');
            Route::get('logout', 'Logout')->name('Logout');

            // Users(Mahasiswa & Dosen)
            Route::prefix('users')->group(function () {
                Route::get('/', 'Users')->name('users');

                // Mahasiswa
                Route::get('mahasiswas', 'Mahasiswas')->name('mahasiswas');
                Route::get('mahasiswas/create', 'CreateMahasiswa')->name('createmahasiswas');
                Route::post('mahasiswa', 'MahasiswaPost')->name('mahasiswapost');
                Route::get('mahasiswa/{mahasiswa}/edit', 'EditMahasiswa')->name('mahasiswa.edit');
                Route::put('mahasiswa/{mahasiswa}', 'MahasiswaUpdate')->name('mahasiswa.update');
                Route::delete('mahasiswa/{mahasiswa}', 'MahasiswaDelete')->name('mahasiswa.delete');

                // Dosen
                Route::prefix('dosens')->middleware('admin.policy')->group(function () {
                    Route::get('/', 'Dosens')->name('dosens');
                    Route::get('create', 'CreateDosen')->name('createdosen');
                    Route::post('/', 'DosenPost')->name('dosenpost');
                    Route::get('{dosen}/edit', 'EditDosen')->name('dosen.edit');
                    Route::put('{dosen}', 'DosenUpdate')->name('dosen.update');
                    Route::delete('{dosen}', 'DosenDelete')->name('dosen.delete');
                });
            });

            //Jurusan
            Route::controller(JurusanController::class)->group(function () {
                Route::prefix('jurusans')->group(function () {
                    Route::get('/', 'Jurusans')->name('jurusan');
                    Route::get('create', 'CreateJurusan')->name('createjurusan');
                    Route::post('/', 'JurusanPost')->name('jurusanpost');
                    Route::get('{jurusan}/edit', 'EditJurusan')->name('jurusan.edit');
                    Route::put('{jurusan}', 'UpdateJurusan')->name('jurusan.update');
                    Route::delete('{jurusan}', 'JurusanDelete')->name('jurusan.delete');
                });
            });

            // Prodi
            Route::controller(ProdiController::class)->group(function () {
                Route::prefix('prodis')->group(function () {
                    Route::get('/', 'Prodis')->name('prodi');
                    Route::get('create', 'CreateProdi')->name('createprodi');
                    Route::post('/', 'ProdiPost')->name('prodipost');
                    Route::get('{prodi}/edit', 'ProdiEdit')->name('prodi.edit');
                    Route::put('{prodi}', 'UpdateProdi')->name('prodi.update');
                    Route::delete('{prodi}', 'ProdiDelete')->name('prodi.delete');
                });
            });

            // Class
            Route::controller(KelasController::class)->group(function () {
                Route::prefix('class')->group(function () {
                    Route::get('/', 'Index')->name('class');

                    Route::prefix('dosen')->middleware(['dosen.policy', 'dosen.verify'])->group(function () {
                        Route::get('/{dosen}', 'IndexDosen')->name('class.dosen');
                        Route::get('{dosen}/create', 'CreateClassToDosen')->name('createclassto.dosen');
                        Route::post('{dosen}/create/post', 'ClassToDosenPost')->name('createtodosen.post');
                    });

                    Route::prefix('admin')->group(function () {
                        Route::get('/', 'IndexAdmin')->name('class.admin');
                        Route::get('create', 'CreateKelas')->name('createkelas.admin');
                        Route::post('/', 'ClassPost')->name('classpost.admin');
                        Route::get('{kelas}/edit', 'ClassEdit')->name('classedit.admin');
                        Route::put('{kelas}', 'ClassUpdate')->name('classupdate.admin');
                        Route::delete('{kelas}', 'ClassDelete')->name('classdelete.admin');
                    });
                });
            });

            //Matakuliah
            Route::controller(MatakuliahController::class)->group(function () {
                Route::prefix('matakuliahs')->group(function () {
                    Route::get('/', 'Index')->name('matakuliahs');

                    //Matakuliahs
                    Route::prefix('matakuliah')->group(function () {
                        Route::get('/', 'MatakuliahIndex')->name('matakuliah');
                        Route::get('create', 'CreateMatakuliah')->name('create.matakuliah');
                        Route::post('/', 'MatakuliahPost')->name('post.matakuliah');
                        Route::get('{matakuliah}/edit', 'EditMatakuliah')->name('edit.matakuliah');
                        Route::put('{matakuliah}', 'UpdateMatakuliah')->name('update.matakuliah');
                        Route::delete('{matakuliah}', 'DeleteMatakuliah')->name('delete.matakuliah');
                    });

                    //Dosen
                    Route::prefix('dosen')->middleware(['dosen.policy', 'dosen.verify'])->group(function () {
                        Route::get('/{dosen}', 'IndexDosen')->name('dosen.matakuliah');
                        Route::get('/{dosen}/create', 'CreateDosen')->name('dosencreate.matakuliah');
                        ROute::post('{dosen}', 'DosenPost')->name('dosenpost.matakuliah');
                    });

                    //Mahasiswa
                    Route::prefix('mahasiswa')->group(function () {
                        Route::get('/', 'IndexMahasiwa')->name('mahasiswa.matakuliah');

                        //Menambahkan Matakuliah untuk Mahasiswa
                        Route::prefix('mahasiswas')->group(function () {
                            Route::get('/', 'IndexMahasiswas')->name('index.mahasiswas');
                            Route::get('{mahasiswa}/show', 'ShowMahasiswa')->name('show.mahasiswa');
                            Route::get('{mahasiswa}/create', 'CreateMahasiswa')->name('create.mahasiswa');
                            Route::post('{mahasiswa}', 'MahasiswaPost')->name('post.mahasiswa');
                        });

                        //Mendaftarkan Mahasiswa untuk matakuliah
                        Route::prefix('matakuliahs')->group(function () {
                            Route::get('/', 'IndexMatakuliah')->name('index.matakuliahs');
                            Route::get('{matakuliah}/show', 'ShowMatakuliah')->name('show.matakuliah');
                            Route::get('{matakuliah}/create', 'CreateMatakuliahToMahasiswa')->name('createmahasiswato.matakuliah');
                            Route::post('{matakuliah}', 'MatakuliahtoMasasiswas')->name('matakuliah.tomahasiswas');
                        });
                    });
                });
            });
        });
    });

});
