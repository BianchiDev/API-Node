<h1 align="center">API-Node</h1>
<hr>

## Desenvolvendo os principais conceitos para criação APIs Restful com NodeJS e Typescript e alguns projetos.
<hr>

 ` Esse projeto consiste em uma aplicação backend com funcionalidades para criação de cadastro de usuários (users), que inclui um relacionamento com o cadastro de funções (roles), autenticação com token de acesso e token de atualização, atualização de perfil e atualização de imagem de avatar através de upload.  `
 <br>

- Conceitos básicos de API Restful

- Criação de API Node.js com ExpressJS e Typescript

- Documentação de API REST com Swagger (Open API)

- Acesso a banco de dados SQLite com TypeORM

- Autenticação com token de acesso e refresh token (JWT)

- Upload de arquivos

- Validação de dados de requisições

 <hr>

 ## Ferramentas necessárias para esse projeto!!!
 <hr>

- Navegador de internet

- Terminal de shell

- Git

- NodeJS versão 16 ou posterior

- Visual Studio Code ou similar

- Insomnia, Postman ou similar
<hr>

## Configunração do ambiente.
<hr>

` Criando o package.json` <br> 
``` npm init -y ```

` Instalando o express` <br>
``` npm intall express --save ```


` Atualizar os pacotes e dependências` <br>
``` npm update ```

` Instalando o nodemon e configurando para LiveReload `
``` npm i -D nodemon ```

` Dentro do arquivo package.json, detro de "scripts" colocar o script de start`

```"start": "nodemon src/index.js"```
` Para subir a plicação basta rodar o seguinte comando:`
```npm start```