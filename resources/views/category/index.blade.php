@extends('layouts.default')

@section('content')
    <div class="container">
        <h3>{{__('Most rescent categories')}}</h3>
        <category
            name="{{__('Name')}}"
            descripton="{{__('Descripton')}}"
            open="{{__('Open')}}"
            send="{{__('Send')}}"
            details="{{__('Details')}}"
            category="{{__('Category')}}"
            category-name="{{__('Name')}}"
            category-descripton="{{__('Descripton')}}"
            new-category="{{__('New Category')}}"
        >
            @include('layouts.default.preloader');
        </category>

    </div>
@endsection

@section('scripts')
    <script src="/js/categories.js"></script>
@endsection

