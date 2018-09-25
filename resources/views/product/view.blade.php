@extends('layouts.default')

@section('content')
    @if(isset($created))
        <div class="card-panel teal lighten-2">
            <strong>{{__('Product updated successfully.')}}</strong>
        </div>
    @endif
    <div class="container">
        <h3>{{$result->name}}</h3>
        <div class="card grey lighten-3">
            <div class="card-content">R$ {{$result->price}}</div>
            <img class="responsive-img" src="/img/{{$result->image }}" style="height: 200px;width: 200px;">
            <div class="card-content">
                {{$result->descripton}}
            </div>
            <a href="/card/{{$result->id }}" class="modal-content">
                <i class="material-icons">{{__('Buy')}}</i>
            </a>
            @if(\Auth::user())
            <a href="/products/{{$result->id }}/edit" class="modal-content">
                <i class="material-icons">{{__('Edit')}}</i>
            </a>
            @endif
        </div>

    </div>
@endsection

@section('scripts')
@endsection
