<?php

namespace App\Http\Controllers;

use App\Delivery;
use Illuminate\Http\Request;

class DeliveryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($id)
    {
        $deliveries = Delivery::where('user_id',$id)
            ->orderBy('updated_at','desc')
            ->paginate(50);

        return response()->json($deliveries);
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
        $delivery = new Delivery();
        $delivery->name = $request->input('name');
        $delivery->phone = $request->input('phone');
        $delivery->street = $request->input('street');
        $delivery->neighborhood = $request->input('neighborhood');
        $delivery->state = $request->input('state');
        $delivery->country = $request->input('country');
        $delivery->postal_code = $request->input('postalcode');
        $delivery->complement = $request->input('complement');
        $delivery->number = $request->input('number');
        $delivery->reference = $request->input('reference');
        $delivery->user_id =  \Auth::user()->id;

        $delivery->save();

        //return response()->json(['created' => 'success', 'data' =>$delivery]);
        return response(
            view('delivery.index',['result'=>$delivery,'created' => 'success']),
            200
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Delivery  $delivery
     * @return \Illuminate\Http\Response
     */
    public function show(Delivery $delivery)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Delivery  $delivery
     * @return \Illuminate\Http\Response
     */
    public function edit(Delivery $delivery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Delivery  $delivery
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Delivery $delivery)
    {
        $delivery->name = $request->input('name');
        $delivery->phone = $request->input('phone');
        $delivery->street = $request->input('street');
        $delivery->neighborhood = $request->input('neighborhood');
        $delivery->state = $request->input('state');
        $delivery->country = $request->input('country');
        $delivery->postal_code = $request->input('postalcode');
        $delivery->complement = $request->input('complement');
        $delivery->number = $request->input('number');
        $delivery->reference = $request->input('reference');

        $delivery->save();

        //return response()->json(['created' => 'success', 'data' =>$delivery]);
        return response(
            view('delivery.index',['result'=>$delivery,'created' => 'success']),
            200
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Delivery  $delivery
     * @return \Illuminate\Http\Response
     */
    public function destroy(Delivery $delivery)
    {
        //
    }
}
