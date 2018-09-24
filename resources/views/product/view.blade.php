@extends('layouts.default')

@section('content')
    <div class="container">
        <h3>{{$result->name}}</h3>
        <div class="card grey lighten-4">
            <div class="card-content">
                {{$result->descripton}}
            </div>
        </div>

    </div>
@endsection

@section('scripts')
@endsection
