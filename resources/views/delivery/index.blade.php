@extends('layouts.default')

@section('content')
    <div class="container">
        <h3>{{__('My Deliveries')}}</h3>
        <delivery
            name="{{__('Name')}}"
            phone="{{__('Phone')}}"
            street="{{__('Street')}}"
            neighborhood="{{__('Neighborhood')}}"
            state="{{__('State')}}"
            country="{{__('Country')}}"
            postal-code="{{__('Postal Code')}}"
            complement="{{__('Complement')}}"
            number="{{__('Number')}}"
            reference="{{__('Reference')}}"
            open="{{__('Open')}}"
            send="{{__('Send')}}"
            new-delivery="{{__('New Delivery')}}"
            edit="{{__('Edit')}}"
            del="{{__('Delete')}}"
        >
            @include('layouts.default.preloader');
        </delivery>

    </div>
@endsection

@section('scripts')
    <script src="/js/deliveries.js"></script>
@endsection
