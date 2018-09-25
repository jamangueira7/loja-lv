<?php

namespace App\Http\Controllers;

use App\Category;
use Log;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::where('active','=',1)
            ->orderBy('updated_at','desc')
            ->paginate(50);

        return response()->json($categories);
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
        $category = new Category();
        $category->name = $request->input('name');
        $category->descripton = $request->input('descripton');
        $category->active = 1;
        $category->save();

        //return response()->json(['created' => 'success', 'data' =>$category]);
        return response(
            view('category.view',['result'=>$category,'created' => 'success']),
            200
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        $categories = Category::where('active','=',1)
            ->orderBy('updated_at','desc')
            ->paginate(50);

        return response()->json($categories);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $category->name = $request->input('name');
        $category->descripton = $request->input('descripton');
        $category->update();

        //return response()->json(['created' => 'success', 'data' =>$category]);
        return response(
            view('category.view',['result'=>$category,'created' => 'success']),
            200
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $category = Category::find($id);
        $category->active = 0;
        $category->save();

        return view('category.index');
    }
}
