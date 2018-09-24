<?php

use Illuminate\Database\Seeder;

class ShoppingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Shopping::class,50)->create();
    }
}
