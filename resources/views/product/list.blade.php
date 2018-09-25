@extends('layouts.default')

@section('content')

   <div class="container">
       <h3>{{$catetory[0]->name}}</h3>
       @foreach($result as $data)
            <div class="card grey lighten-3">
                <div class="card-content"><b>{{__('Name')}}: </b>{{$data->name}}</div>
                <div class="card-content"><b>{{__('Price')}}: </b>R$ {{$data->price}}</div>
                <img class="responsive-img" src="/img/{{$data->image }}" style="height: 200px;width: 200px;">
                <div class="card-content">
                    <b>{{__('Descripton')}}: </b>{{$data->descripton}}
                </div>
                <a href="/card/{{$data->id }}" class="modal-content">
                    <i class="material-icons">{{__('Buy')}}</i>
                </a>
                @if(\Auth::user())
                    <a href="/products/{{$data->id }}/edit" class="modal-content">
                        <i class="material-icons">{{__('Edit')}}</i>
                    </a>
                @endif
            </div>
        @endforeach
    </div>
@endsection

@section('scripts')
@endsection
