<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Gate;

class UsersController extends Controller implements HasMiddleware
{
    public static function middleware()
    {
        return [
            new Middleware('auth:sanctum'),
        ];
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPage = $request->query('per_page', 10); // Default: 10
        $users = User::simplePaginate($perPage);

        return response()->json([
            'message' => 'Users retrieved successfully',
            'users' => $users,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
        ]);

        $users = User::create($fields);

        return response()->json([
            'message' => 'User created successfully',
            'users' => $users,
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $users = User::find($id);

        if (!$users) {
            return response()->json([
                'message' => 'User not found',
                'errors' => 'No user found with the given ID'
            ], 404);
        }

        return response()->json([
            'message' => 'User retrieved successfully',
            'users' => $users
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $users = User::find($id);

        if (!$users) {
            return response()->json([
                'message' => 'User not found',
                'errors' => 'No user found with the given ID'
            ], 404);
        }

        Gate::authorize('update', $users);

        $fields = $request->validate([
            'name' => 'string',
            'email' => 'email|unique:users,email',
            'password' => 'string|min:8',
        ]);

        $users->update($fields);

        return response()->json([
            'message' => 'User updated successfully',
            'users' => $users,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $users = User::find($id);

        if (!$users) {
            return response()->json([
                'message' => 'User not found',
                'errors' => 'No user found with the given ID'
            ], 404);
        }

        Gate::authorize('delete', $users);

        $users->delete();

        return response()->json([
            'message' => 'User deleted successfully',
        ], 200);
    }
}
