@extends('layouts.default')

@section('content')

    <div class="container">
        <h3>{{$category->name}}</h3>
        <div class="card grey lighten-4">
            <div class="card-content">
                <form action="/categories/{{ $category->id }}" method="post">
                    {{csrf_field()}}
                    {{method_field('PUT')}}

                    <div class="input-field">
                        <input type="text" placeholder="{{__('Name')}}" name="name" value="{{$category->name}}">
                    </div>
                    <div class="input-field">
                        <textarea class="materialize-textarea" placeholder="{{__('Descripton')}}" name="descripton">{{$category->descripton}}</textarea>
                    </div>
                    <button type="submit" class="btn red accent-2">{{__('Send')}}</button>
                </form>
            </div>
            <div class="card-action">
                <a href="/categories/{{ $category->id }}">{{__('Back')}}</a>|
                <a href="/categories/{{ $category->id }}/delete">{{__('Delete')}}</a>
            </div>

        </div>
    </div>
@endsection
