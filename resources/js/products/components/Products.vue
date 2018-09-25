<template>
    <div class="card">
        <div class="card-content">
            <ul class="collection">
                <li class="collection-item avatar" v-for="product in products_response.data">
                    <img :src="'/img/'+ product.image" alt="" class="circle">
                    <span class="title"><b>{{name}}:</b> {{product.name}}</span><br>
                    <span class="title"><b>{{price}}:</b> R$ {{product.price}}</span><br>
                    <span class="title"><b>{{category}}:</b>
                        <a :href="'/products/listcategory/'+ product.category.id"
                           class="modal-content">{{product.category.name}}</a>
                    </span>
                    <p><b>{{descripton}}:</b> {{product.descripton}} <br>
                    </p>
                    <br>
                    <a :href="'/card/'+ product.id" class="modal-content"><i class="material-icons">{{buy}}</i></a>
                    <a :href="'/products/'+ product.id" class="modal-content"><i class="material-icons">{{details}}</i></a>
                </li>
            </ul>
        </div>
        <div class="card-content" v-if="logged.role == 0">
            <span class="card-title">{{newProduct}}</span>

            <form @submit="save()">
                <div class="input-field">
                    <input type="text" :placeholder="name" v-model="products_to_save.name">
                </div>
                <div class="input-field">
                    <input type="number" :placeholder="price" v-model="products_to_save.price">
                </div>
                <div class="input-field">
                    <span class="card-text">{{category}}:</span>
                    <select class="browser-default" name="category_id" v-model="products_to_save.category_id">
                        <option
                            v-for="category in categories_response.data"
                            v-bind:value="category.id">{{category.name}}
                        </option>
                    </select>
                </div>
                <div class="input-field">
                    <input type="text" :placeholder="image" v-model="products_to_save.image">
                </div>
                <div class="input-field">
                    <textarea class="materialize-textarea" :placeholder="descripton" v-model="products_to_save.descripton"></textarea>
                </div>
                <button type="submit" class="btn red accent-2">{{send}}</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        props:[
            'name',
            'descripton',
            'image',
            'price',
            'send',
            'open',
            'buy',
            'details',
            'category',
            'newProduct',
        ],

        data() {
            return {
                products_response: [],
                categories_response: [],
                logged: window.user || {},
                products_to_save: {
                    name: '',
                    descripton: '',
                    image: '',
                    price: '',
                    category_id: ''
                }
            }
        },
        methods: {
            save() {
                window.axios.post('/products/new', this.products_to_save).then(() => {
                    this.getProducts()
                })
            },
            getProducts() {
                window.axios.get('/productsjson').then((response) => {
                    this.products_response = response.data
                })
            },
            getCategory() {
                window.axios.get('/categoriesjson').then((response) => {
                    this.categories_response = response.data
                })
            }
        },
        mounted() {
            this.getProducts()
            this.getCategory()
        }

    }
</script>
