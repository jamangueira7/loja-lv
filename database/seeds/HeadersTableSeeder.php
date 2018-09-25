<?php

use Illuminate\Database\Seeder;

class HeadersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $headers = factory(\App\Header::class,50)->create();
        $headers->each(function ($header){
            $shoppings = factory(\App\Shopping::class, rand(5,10))->create([
                'code' => $header->code,
                'user_id' => factory(\App\User::class)->create(),
            ]);
            $header->total = 0;
            foreach ($shoppings as $shopping){
                $product = \App\Product::where('id', $shopping['product_id'])->get();
                $header->total += $product[0]['price'];
            }
            $header->save();
        });

    }
}
