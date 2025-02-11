<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Gate;

class ProductController extends Controller implements HasMiddleware
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
        $products = Product::simplePaginate($perPage);
    
        return response()->json([
            'message' => 'Products retrieved successfully',
            'products' => $products,
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
            'price' => 'required|numeric',
            'quantity' => 'required|integer',
        ]);

        $product = Product::create($fields);

        return response()->json([
            'message' => 'Product created successfully',
            'product' => $product,
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                'message' => 'Product not found',
                'errors' => 'No product found with the given ID'
            ], 404);
        }

        return response()->json([
            'message' => 'Product retrieved successfully',
            'product' => $product
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                'message' => 'Product not found',
                'errors' => 'No product found with the given ID'
            ], 404);
        }

        Gate::authorize('update', $product);

        $fields = $request->validate([
            'name' => 'nullable|string',
            'description' => 'nullable|string',
            'price' => 'nullable|numeric',
            'quantity' => 'nullable|integer',
        ]);

        $product->update($fields);

        return response()->json([
            'message' => 'Product updated successfully',
            'product' => $product
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                'message' => 'Product not found',
                'errors' => 'No product found with the given ID'
            ], 404);
        }

        Gate::authorize('delete', $product);

        $product->delete();

        return response()->json([
            'message' => 'Product deleted successfully',
            'product' => $product,
        ], 200);
    }
}
