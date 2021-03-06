@extends('layouts.default')

@section('content')
    <div class="container">
        <h3>{{__('Most rescent products')}}</h3>
        <product
            name="{{__('Name')}}"
            descripton="{{__('Descripton')}}"
            image="{{__('Image')}}"
            price="{{__('Price')}}"
            send="{{__('Send')}}"
            open="{{__('Open')}}"
            buy="{{__('Buy')}}"
            details="{{__('Details')}}"
            category="{{__('Category')}}"
            new-product="{{__('New Product')}}"

        >
            @include('layouts.default.preloader');
        </product>

    </div>
@endsection

@section('scripts')
    <script src="/js/products.js"></script>
@endsection

