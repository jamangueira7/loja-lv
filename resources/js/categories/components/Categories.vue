<template>
    <div class="card">
        <div class="card-content">
            <ul class="collection">
                <li class="collection-item avatar" v-for="category in categories_response.data">
                    <span class="title"><b>{{name}}:</b> {{category.name}}</span><br>
                    <p><b>{{descripton}}:</b> {{category.descripton}} <br>
                    </p>
                    <br>
                   <a :href="'/categories/'+ category.id" class="modal-content"><i class="material-icons">{{details}}</i></a>
                </li>
            </ul>

        </div>
        <div class="card-content" v-if="logged.role == 1">
            <span class="card-title">{{newCategory}}</span>

            <form @submit="save()">
                <div class="input-field">
                    <input type="text" :placeholder="categoryName" v-model="categories_to_save.name">
                </div>
                <div class="input-field">
                    <textarea class="materialize-textarea" :placeholder="categoryDescripton" v-model="categories_to_save.descripton"></textarea>
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
            'send',
            'open',
            'send',
            'details',
            'category',
            'categoryName',
            'categoryDescripton',
            'newCategory',
        ],
        data() {
            return {
                categories_response: [],
                logged: window.user || {},
                categories_to_save: {
                    name: '',
                    descripton: ''
                }
            }
        },
        methods: {
            save() {
                window.axios.post('/categories/new', this.categories_to_save).then((response) => {
                    this.getCategories()
                })
            },
            getCategories() {
                window.axios.get('/categoriesjson').then((response) => {
                    this.categories_response = response.data

                })
            }
        },
        mounted() {
            this.getCategories()
        }
    }
</script>
