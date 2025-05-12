<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Auth\AuthenticationException;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__ . '/../routes/web.php',
        commands: __DIR__ . '/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            HandleInertiaRequests::class,
        ]);

        $middleware->alias([
            'guest.multi' => \App\Http\Middleware\guestMultiAuth::class,
            'auth.multi' => \App\Http\Middleware\MultiAuth::class,
            'guest.mhs' => \App\Http\Middleware\guestMhsAuth::class,
            'auth.mhs' => \App\Http\Middleware\MhsAuth::class,
            'admin.policy' => \App\Http\Middleware\DosenPolicyRoute::class,
        ]);

    })
    ->withExceptions(function (Exceptions $exceptions) {
        $exceptions->render(function (Throwable $e, $request) {
            // Tangani AuthenticationException
            if ($e instanceof AuthenticationException) {
                // Jika request mengharapkan JSON
                if ($request->expectsJson()) {
                    return response()->json(['error' => 'Unauthenticated'], 401);
                }

                // Identifikasi guard yang menyebabkan exception
                $guard = $e->guards()[0] ?? "web";
                switch ($guard) {
                    case 'admin':
                        $login = 'admin.login';
                        break;
                    case 'dosen':
                        $login = 'admin.login';
                        break;
                    default:
                        $login = 'login';
                        break;

                }

                // Redirect ke route login sesuai guard
                return redirect()->guest(route($login));
            }

            // Untuk exception lainnya, kembalikan default handler Laravel
            return null;
        });

    })->create();
