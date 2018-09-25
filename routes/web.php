<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//ROTAS PUBLICAS
//PRODUTOS
Route::get('/', function () {
    return view('product.index');
});
Route::get('/products', function () {
    return view('product.index');
});
Route::get('/products/{id}', function ($id) {
    $result = \App\Product::findOrFail($id);
    return view('product.view', compact('result'));
});
Route::get('/productsjson','ProductController@index');

//CATEGORIA
Route::get('/products/listcategory/{id}','ProductController@list');
Route::get('/categories', function () {
    return view('category.index');
});
Route::get('/categories/{id}', function ($id) {
    $result = \App\Category::findOrFail($id);
    return view('category.view', compact('result'));
});
Route::get('/categoriesjson','CategoryController@index');

Route::middleware(['auth'])->group(function (){
    //PRODUTOS
    Route::put('/products/{product}','ProductController@update');
    Route::post('/products/new','ProductController@store');
    Route::get('/products/{product}/delete','ProductController@delete');
    Route::get('/products/{product}/edit', function (\App\Product $product){
        $categories = \App\Category::all();
        return view('product.edit',compact('product','categories'));
    });

    //CATEGORIA
    Route::put('/categories/{category}','CategoryController@update');
    Route::post('/categories/new','CategoryController@store');
    Route::get('/categories/{category}/delete','CategoryController@delete');
    Route::get('/categories/{category}/edit', function (\App\Category $category){
        $categories = \App\Category::all();
        return view('category.edit',compact('category','categories'));
    });
    //ENTREGA
    Route::get('/deliveries', function () {
        return view('delivery.index');
    });
    Route::put('/deliveries/{delivery}','DeliveryController@update');
    Route::post('/deliveries/new','DeliveryController@store');
    Route::get('/deliveries/{delivery}/delete','DeliveryController@delete');
    Route::get('/deliveries/{delivery}/edit', function (\App\Delivery $delivery){
        return view('delivery.edit',compact('delivery'));
    });
    Route::get('/deliveriesjson/{id}','DeliveryController@index');

    //COMPRAS
    Route::get('/shoppings', function () {
        return view('shopping.index');
    });
    Route::post('/shoppings/new','ShoppingController@store');
    Route::get('/shoppingsjson','ShoppingController@show');
    //CABEÇALHO DA COMPRA
    Route::get('/headersjson','HeaderController@index');
});

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
//MUDAR IDIOMA
Route::get('/locale/{locale}', function ($locale) {
    session(['locale' => $locale]);
    return back();
});
