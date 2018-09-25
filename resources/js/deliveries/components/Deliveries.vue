<template>
    <div class="card">
        <div class="card-content">
            <ul class="collection">
                <li class="collection-item avatar" v-for="delivery in deliveries_response.data">
                    <span class="title"><b>{{name}}:</b> {{delivery.name}}</span><br>
                    <span class="title"><b>{{phone}}:</b> {{delivery.phone}}</span><br>
                    <span class="title"><b>{{street}}:</b> {{delivery.street}}</span><br>
                    <span class="title"><b>{{neighborhood}}:</b> {{delivery.neighborhood}}</span><br>
                    <span class="title"><b>{{state}}:</b> {{delivery.state}}</span><br>
                    <span class="title"><b>{{country}}:</b> {{delivery.country}}</span><br>
                    <span class="title"><b>{{postalCode}}:</b> {{delivery.postal_code}}</span><br>
                    <span class="title"><b>{{complement}}:</b> {{delivery.complement}}</span><br>
                    <span class="number"><b>{{number}}:</b> {{delivery.number}}</span><br>
                    <span class="title"><b>{{reference}}:</b> {{delivery.reference}}</span><br>
                    <a :href="'/deliveries/'+ delivery.id +'/edit'" class="modal-content"><i class="material-icons">{{edit}}</i></a>
                    <a :href="'/deliveries/'+ delivery.id +'/delete'" class="modal-content"><i class="material-icons">{{del}}</i></a>
                </li>
            </ul>

        </div>
        <div class="card-content" v-if="logged.role == 1">
            <span class="card-title">{{newDelivery}}</span>

            <form @submit="save()">
                <div class="input-field">
                    <input type="text" :placeholder="name" v-model="deliveries_to_save.name">
                </div>
                <div class="input-field">
                    <input type="text" :placeholder="phone" v-model="deliveries_to_save.phone">
                </div>
                <div class="input-field">
                    <input type="text" :placeholder="street" v-model="deliveries_to_save.street">
                </div>
                <div class="input-field">
                    <input type="text" :placeholder="neighborhood" v-model="deliveries_to_save.neighborhood">
                </div>
                <div class="input-field">
                    <input type="text" :placeholder="state" v-model="deliveries_to_save.state">
                </div>
                <div class="input-field">
                    <input type="text" :placeholder="country" v-model="deliveries_to_save.country">
                </div>
                <div class="input-field">
                    <input type="text" :placeholder="postalCode" v-model="deliveries_to_save.postalcode">
                </div>
                <div class="input-field">
                    <input type="text" :placeholder="complement" v-model="deliveries_to_save.complement">
                </div>
                <div class="input-field">
                    <input type="number" :placeholder="number" v-model="deliveries_to_save.number">
                </div>
                <div class="input-field">
                    <input type="text" :placeholder="reference" v-model="deliveries_to_save.reference">
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
            'phone',
            'street',
            'neighborhood',
            'state',
            'country',
            'postalCode',
            'complement',
            'number',
            'reference',
            'send',
            'open',
            'edit',
            'del',
            'newDelivery',
        ],
        data() {
            return {
                deliveries_response: [],
                logged: window.user || {},
                deliveries_to_save: {
                    name :'',
                    phone :'',
                    street :'',
                    neighborhood :'',
                    state :'',
                    country :'',
                    postalcode :'',
                    complement :'',
                    number :'',
                    reference :'',
                }
            }
        },
        methods: {
            save() {
                window.axios.post('/deliveries/new', this.deliveries_to_save).then(() => {
                    this.getDeliveries()
                })
            },
            getDeliveries() {
                window.axios.get('/deliveriesjson/'+this.logged.id).then((response) => {
                    this.deliveries_response = response.data

                })
            }
        },
        mounted() {
            this.getDeliveries()
        }
    }
</script>
