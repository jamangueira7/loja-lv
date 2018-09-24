<?php

use Illuminate\Database\Seeder;

class HeadersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private $soma = 0;

    public function run()
    {
        $headers = factory(\App\Header::class,50)->create();
        $headers->each(function ($header){
            $shoppings = factory(\App\Shopping::class, rand(5,10))->create(['code' => $header->code]);
            foreach ($shoppings as $shopping){
                $product = \App\Product::where('id', $shopping['product_id'])->get();
                $this->soma =+ $product[0]['price'];
            }
            $header->total = $this->soma;
            $this->soma = 0;
        });
    }
}
