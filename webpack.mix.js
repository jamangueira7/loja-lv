const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/bootstrap.js', 'public/js/bootstrap.js')
mix.js('resources/js/products/app.js', 'public/js/products.js')
mix.js('resources/js/categories/app.js', 'public/js/categories.js')
   .sass('resources/sass/app.scss', 'public/css')
    .extract(['vue']);