<?php

namespace App\Models;

use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Auth\Authenticatable as AuthenticatableTrait;
use Illuminate\Foundation\Auth\Access\Authorizable;

class Admin extends Model implements Authenticatable
{
    use HasFactory, Notifiable, AuthenticatableTrait, Authorizable;

    protected $table = 'admins';
    protected $fillable = [
        'name',
        'email',
        'password'
    ];
    protected $hidden = ['password'];
}
