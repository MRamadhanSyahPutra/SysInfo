<?php

namespace App\Providers;

use App\Models\Dosen;
use Inertia\Inertia;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (config('app.env') != 'local') {
            URL::forceScheme('https');
        }

        Inertia::share([
            'flash' => function () {
                return [
                    'message' => session('message'),
                ];
            },
            'auth' => function () {
                return [
                    'mhs' => Auth::guard('mahasiswa')->check() ? Auth::guard('mahasiswa')->user() : null,
                    'dosen' => Auth::guard('dosen')->check() ? Auth::guard('dosen')->user() : null,
                    'admin' => Auth::guard('admin')->check() ? Auth::guard('admin')->user() : null,

                    //Policy
                    'can' => [
                        'viewAnyDosen' => Auth::guard('admin')->check()
                            ? Auth::guard('admin')->user()->can('viewAny', Dosen::class)
                            : false,
                    ],
                ];
            },
        ]);
    }
}
