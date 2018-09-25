@extends('layouts.default')

@section('content')

    <div class="container">
        <h3>{{$product->name}}</h3>
        <div class="card grey lighten-4">
            <div class="card-content">
                <form action="/products/{{ $product->id }}" method="post">
                    {{csrf_field()}}
                    {{method_field('PUT')}}

                    <div class="input-field">
                        <input type="text" placeholder="{{__('Name')}}" name="name" value="{{$product->name}}">
                    </div>

                    <div class="input-field">
                        <input type="text" placeholder="{{__('Image')}}" name="image" value="{{$product->image}}">
                    </div>

                    <div class="input-field">
                        <select class="browser-default" name="category_id">
                              @foreach($categories as $category)
                                <option value="{{$category->id}}" >{{$category->name}}</option>
                            @endforeach
                        </select>
                    </div>

                    <div class="input-field">
                        <input type="text" placeholder="{{__('Price')}}" name="price" value="{{$product->price}}">
                    </div>

                    <div class="input-field">
                        <textarea class="materialize-textarea" placeholder="{{__('Descripton')}}" name="descripton">{{$product->descripton}}</textarea>
                    </div>
                    <button type="submit" class="btn red accent-2">{{__('Send')}}</button>
                </form>
            </div>
            <div class="card-action">
                <a href="/products/{{ $product->id }}">{{__('Back')}}</a>|
                <a href="/products/{{ $product->id }}/delete">{{__('Delete')}}</a>
            </div>

        </div>
    </div>
@endsection
