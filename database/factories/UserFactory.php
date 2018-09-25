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
        'role' => rand(0,1),
    ];
});

$factory->define(App\Category::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'descripton' => $faker->text,
        'active' => 1,
    ];
});
$factory->define(App\Product::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'descripton' => $faker->text,
        'image' => rand(1,3).'.png', // secret
        'price' => rand(80.00,100.00),
        'active' => 1,
        'category_id' => function(){
            $categories = \App\Category::all()->random(1)[0];
            return $categories['id'];
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
            $user = \App\User::all()->random(1)[0];
            return $user['id'];
        }
    ];
});

$factory->define(App\Shopping::class, function (Faker $faker) {

    return [
        'code' => '',
        'user_id' => function(){
            $user = \App\User::all()->random(1)[0];
            return $user['id'];
        },
        'product_id' => function(){
            $product = \App\Product::all()->random(1)[0];
            return $product['id'];
        }
    ];
});

$factory->define(App\Header::class, function (Faker $faker) {

    return [
        'code' => function(){
            $chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuwxyz0123456789";
            $randomString = '';
            for($i = 0; $i < 25; $i = $i+1){
                $randomString .= $chars[mt_rand(0,60)];
            }
            return $randomString;
        },
        'total' => function(){
            return factory(App\Product::class)->create()->price;
        }
    ];
});
