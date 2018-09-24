<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', // secret
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Category::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'descripton' => $faker->text,
    ];
});
$factory->define(App\Product::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'descripton' => $faker->text,
        'image' => rand(1,3).'.png', // secret
        'price' => rand(80.00,100.00),
        'category_id' => function(){
            return factory(App\Category::class)->create()->id;
        }
    ];
});

$factory->define(App\Delivery::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'phone' => '11 3355-8899',
        'street' => $faker->streetAddress,
        'neighborhood' => $faker->streetAddress,
        'state' => $faker->streetSuffix,
        'country' => $faker->country,
        'postal_code' => $faker->streetAddress,

        'complement' => '123 G',
        'number' => rand(1,600000),
        'reference' => $faker->name,
        'user_id' => function(){
            return factory(App\User::class)->create()->id;
        }
    ];
});

$factory->define(App\Shopping::class, function (Faker $faker) {
    $codes = [
        'F4E8E9RT65',
        'TTUU4U5U8U',
        'Q6W9T3222D',
        'T8T8R7R4F5',
        'YT9DF5D22C',
        'S7V7N7Y7NB',
        'H3T54D1WWW',
        'VNMJ2HGY5F',
        'QP2OI58CV7',
        '7796FDDEES',
    ];
    return [
        'code' => $codes[array_rand($codes)],
        'user_id' => function(){
            return factory(App\User::class)->create()->id;
        },
        'product_id' => function(){
        return factory(App\Product::class)->create()->id;
    }
    ];
});

$factory->define(App\Header::class, function (Faker $faker) {
    $codes = [
        'F4E8E9RT65',
        'TTUU4U5U8U',
        'Q6W9T3222D',
        'T8T8R7R4F5',
        'YT9DF5D22C',
        'S7V7N7Y7NB',
        'H3T54D1WWW',
        'VNMJ2HGY5F',
        'QP2OI58CV7',
        '7796FDDEES',
    ];
    return [
        'code' => $codes[array_rand($codes)],
        'total' => function(){
            return factory(App\Product::class)->create()->price;
        }
    ];
});
