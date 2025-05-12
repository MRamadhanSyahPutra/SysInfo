<?php

namespace App\Providers;

use App\Models\Admin;
use App\Models\Dosen;
// use Illuminate\Support\ServiceProvider;
use App\Policies\DosenPolicy;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */

    // protected $policies = [
    //     Dosen::class => DosenPolicy::class,
    // ];
    protected $policies = [
        \App\Models\Dosen::class => \App\Policies\DosenPolicy::class,
    ];


    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $this->registerPolicies();
    }
}
