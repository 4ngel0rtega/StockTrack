<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'quantity',
    ];

    /**
     * Format the date when serialized.
     */
    protected function serializeDate(\DateTimeInterface $date)
    {
        return Carbon::parse($date)->subHours(6);
    }
}
