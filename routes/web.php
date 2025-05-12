<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\MahasiswaController;

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
        });
    });

});
