## Sobre o projeto

Loja virtal com Laravel usando MySQL como banco de dados, Vue.js e Materialize para o frontend.

## Pre-requisitos


- **[Laravel 5.4](https://laravel.com/docs/5.4/releases)**
- **[MySQL](https://www.mysql.com/)**
- **[Vue.js 2.x](https://vuejs.org/)**

## Passos para rodar o projeto

- Fazer o clone do projeto
- Criar dois bancos no MySQL ('loja-lv' e 'loja-lv-test')
- Alterar os arquivos .env e .env.testing com os dados do seu banco.
- Rodar pelo terminal o comando para gerar as tabelas e dados ficticios "php artisan migrate:fresh" e "php artisan db:seed".
- Pelo terminal rodar o comando "php artisan serve --port=8080". Assim o acesso do proejto ficar "localhost:8080".
- Roda o npm (npm run dev)
- Procurar um usuario no banco para fazer o login (procure um admin rule=1), a senha de todos é "secret".

## Vulnerabilidades

Não implementei os Polices nem as validações.
## License

[MIT license](https://opensource.org/licenses/MIT).
