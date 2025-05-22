<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class VerifyDosen
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $routeDosen = $request->route('dosen');
        $request_id = is_object($routeDosen) ? $routeDosen->id : $routeDosen;

        $dosen_id = Auth::guard('dosen')->id();

        if (!$dosen_id || $request_id != $dosen_id) {
            return abort(403, 'Unauthorized');
        }

        return $next($request);
    }
}
