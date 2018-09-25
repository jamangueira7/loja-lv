@extends('layouts.default')

@section('content')
    <div class="container">
        <h3>{{__('My Shoppings')}}</h3>
        <shopping
            code="{{__('Code')}}"
            total="{{__('Total')}}"
            price="{{__('Price')}}"

        >
            @include('layouts.default.preloader');
        </shopping>

    </div>
@endsection

@section('scripts')
    <script src="/js/shoppings.js"></script>
@endsection
