<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class guestMultiAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $users = ['admin', 'dosen'];

        foreach ($users as $user) {
            if (Auth::guard($user)->check()) {
                return redirect()->route('dashboard')->with(['message' => 'Akses ke halaman ini tidak tersedia.']);
            }
        }

        return $next($request);
    }
}
