<?php

namespace App\Http\Controllers;

use App\Product;
use App\Category;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::where('active','=',1)
            ->orderBy('updated_at','desc')
            ->with('category')
            ->paginate(50);

        return response()->json($products);
    }

    public function list($id)
    {
        $products = Product::where('active','=',1)
            ->where('category_id','=',$id)
            ->orderBy('updated_at','desc')
            ->paginate(50);

        $category = Category::where('id','=',$id)
            ->paginate(50);

        return response(
            view('product.list',['result'=>$products, 'catetory'=>$category]),
            200
        );

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $product = new Product();
        $product->name = $request->input('name');
        $product->descripton = $request->input('descripton');
        $product->image = $request->input('image');
        $product->price = $request->input('price');
        $product->category_id = $request->input('category_id');
        $product->active = 1;
        $product->save();

        //return response()->json(['created' => 'success', 'data' =>$product]);
        return response(
            view('product.view',['result'=>$product,'created' => 'success']),
            200
        );

    }

    public function update(Request $request, Product $product)
    {
        $product->name = $request->input('name');
        $product->descripton = $request->input('descripton');
        $product->image = $request->input('image');
        $product->price = $request->input('price');
        $product->category_id = $request->input('category_id');
        $product->active = 1;
        $product->update();

        //return response()->json(['created' => 'success', 'data' =>$product]);
        return response(
            view('product.view',['result'=>$product,'created' => 'success']),
            200
        );

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        $products = Product::where('active','=',1)
            ->orderBy('updated_at','desc')
            ->with('category')
            ->paginate(50);

        return response()->json($products);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $products = Product::find($id);
        $products->active = 0;
        $products->save();

        return view('product.index');
    }
}
