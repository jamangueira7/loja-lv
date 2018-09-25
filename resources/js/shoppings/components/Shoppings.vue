<template>
    <div class="card">
        <div class="card-content" v-for="headers in headers_response">
            <div class="card-text" v-for="header in headers">
                <span class="title"  ><b>{{code}}: </b> {{header.code}}</span><br>
                <span class="title"  ><b>{{total}}: </b>R$ {{header.total}}</span><br>
                <ul class="collection">
                    <li class="collection-item avatar"
                        v-for="shopping in shoppings_response"
                        v-if="header.code===shopping.code">
                        <img :src="'/img/'+ shopping.image" alt="" class="circle">
                        <span class="title" ><b>{{code}}:</b> {{shopping.name}}</span><br>
                        <span class="title" ><b>{{price}}:</b> {{shopping.price}}</span><br>
                    </li>

                </ul>
            </div>


        </div>
    </div>

</template>

<script>
    export default {
        props:[
            'code',
            'total',
            'price',
        ],
        data() {
            return {
                shoppings_response: [],
                headers_response: [],
                logged: window.user || {}

            }
        },
        methods: {
            getShoppings() {
                window.axios.get('/shoppingsjson').then((response) => {
                    this.shoppings_response = response.data

                })
            },
            getHeaders() {
                window.axios.get('/headersjson').then((response) => {
                    this.headers_response = response.data

            })
            }
        },
        mounted() {
            this.getShoppings()
            this.getHeaders()
        }
    }
</script>
