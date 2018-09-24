<template>
    <div class="card">
        <div class="card-content">
            <span class="card-title">{{name}}</span>
            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>{{name}}</th>
                    <th>{{image}}</th>
                    <th>{{descripton}}</th>
                    <th>{{price}}</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr >
                    <td></td>
                    <td></td>
                    <td>0</td>
                    <td>
                        <a :href="/product/">{{open}}</a>
                    </td>
                </tr>
                </tbody>
            </table>
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
        ]

    }
</script>
