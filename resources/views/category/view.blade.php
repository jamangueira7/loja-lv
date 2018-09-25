@extends('layouts.default')

@section('content').
    @if(isset($created))
        <div class="card-panel teal lighten-2">
            <strong>{{__('Category updated successfully.')}}</strong>
        </div>
    @endif
    <div class="container">
        <h3>{{$result->name}}</h3>
        <div class="card grey lighten-3">
            <div class="card-content">R$ {{$result->name}}</div>
            <div class="card-content">
                {{$result->descripton}}
            </div>
            @if(\Auth::user())
            <a href="/categories/{{$result->id }}/edit" class="modal-content">
                <i class="material-icons">{{__('Edit')}}</i>
            </a>
            @endif
        </div>
    </div>
@endsection

@section('scripts')
@endsection
