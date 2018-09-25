<ul id="locale" class="dropdown-content">
    <li><a href="/locale/pt-br">Português</a></li>
    <li><a href="/locale/en">English</a></li>
</ul>
<ul id="menu" class="dropdown-content">
    <li><a href="/products">{{__('Products')}}</a></li>
    <li><a href="/categories">{{__('Categories')}}</a></li>
    @if(\Auth::user())
    <li><a href="/deliveries">{{__('Deliveries')}}</a></li>
    @endif
    @if(\Auth::user())
        <li><a href="/shoppings">{{__('Shoppings')}}</a></li>
    @endif
</ul>
    <nav>
        <div class="nav-wrapper">
            <div class="container">
                <a href="" class="brand-logo">{{__('Minha Loja')}}</a>
                <ul class="right">
                    <li>
                        <a href="#" data-target="locale" class="dropdown-button dropdown-trigger">
                            {{ __('Language') }}
                        </a>
                    </li>
                    <li>
                        <a href="#" data-target="menu" class="dropdown-button dropdown-trigger">
                            {{ __('Menu') }}
                        </a>
                    </li>

                </ul>

            </div>
        </div>
    </nav>
