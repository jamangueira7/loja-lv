@extends('layouts.default')

@section('content')

    <div class="container">
        <h3>{{$delivery->name}}</h3>
        <div class="card grey lighten-4">
            <div class="card-content">
                <form action="/deliveries/{{ $delivery->id }}" method="post">
                    {{csrf_field()}}
                    {{method_field('PUT')}}

                    <div class="input-field">
                        <input type="text" placeholder="{{__('Name')}}" name="name" value="{{$delivery->name}}">
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="{{__('Phone')}}" name="phone" value="{{$delivery->phone}}">
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="{{__('Street')}}" name="street" value="{{$delivery->street}}">
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="{{__('Neighborhood')}}" name="neighborhood" value="{{$delivery->neighborhood}}">
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="{{__('State')}}" name="state" value="{{$delivery->state}}">
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="{{__('Country')}}" name="country" value="{{$delivery->country}}">
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="{{__('postalCode')}}" name="postalcode" value="{{$delivery->postal_code}}">
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="{{__('Complement')}}" name="complement" value="{{$delivery->complement}}">
                    </div>
                    <div class="input-field">
                        <input type="number" placeholder="{{__('Number')}}" name="number" value="{{$delivery->number}}">
                    </div>
                    <div class="input-field">
                        <input type="text" placeholder="{{__('Reference')}}" name="reference" value="{{$delivery->reference}}">
                    </div>

                    <button type="submit" class="btn red accent-2">{{__('Send')}}</button>
                </form>
            </div>
            <div class="card-action">
                <a href="/deliveries">{{__('Back')}}</a>|
                <a href="/deliveries/{{ $delivery->id }}/delete">{{__('Delete')}}</a>
            </div>

        </div>
    </div>
@endsection
