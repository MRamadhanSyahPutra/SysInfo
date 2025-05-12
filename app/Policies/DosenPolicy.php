<?php

namespace App\Policies;

use App\Models\Admin;
use App\Models\Dosen;
use App\Models\User;
use Illuminate\Auth\Access\Response;
use Illuminate\Auth\Access\HandlesAuthorization;

class DosenPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    use HandlesAuthorization;

    public function viewAny(Admin $admin): bool
    {
        return in_array($admin->email, [
            'admin@gmail.com'
        ]);
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(Admin $admin, Dosen $dosen): bool
    {
        return in_array($admin->email, [
            'admin@gmail.com'
        ]);
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(Admin $admin): bool
    {
        return in_array($admin->email, [
            'admin@gmail.com'
        ]);
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(Admin $admin, Dosen $dosen): bool
    {
        return false;
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, Dosen $dosen): bool
    {
        return false;
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, Dosen $dosen): bool
    {
        return false;
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, Dosen $dosen): bool
    {
        return false;
    }
}
