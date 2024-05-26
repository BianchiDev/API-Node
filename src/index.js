// Importa o módulo express, que é um framework para construir aplicativos web em Node.js
const express = require('express');
const { v4: uuidv4 } = require('uuid');
// Cria uma aplicação express
const app = express();
app.use(express.json())

const projects = []

// Imprime o diretório atual no console para depuração
console.log('Diretório atual:', __dirname);

// Imprime o caminho completo do arquivo index.js no console para depuração
console.log('Arquivo index.js encontrado em:', __filename);

// Define uma rota para o caminho raiz ('/'). Quando uma solicitação GET for feita a essa rota,
// a função de callback será executada.
app.get('/projects', function(request, response){
    // Envia a resposta "Olá Bianchi!" quando a rota raiz for acessada
    const {title, owner, page} = request.query //trabalhando com request query que paramentros de consulta.
    console.log(title, owner, page)
    return response.json([
        'projeto 1',
        'projeto 2'
    ]
    )
});

// Método POST para criar um novo projeto
app.post('/projects', function(request, response){
    // Retorna uma lista de projetos em formato JSON
    // Neste exemplo, a lista de projetos é fixa e não considera dados da requisição
    const {name, owner} = request.body //parametros de rota poderia ser no put
    console.log(name, owner)// Os valores recebidos por rotas será sempre
    return response.json([
        'projeto 1',
        'projeto 2',
        'projeto 3'
    ]);
});

// Método PUT para atualizar um projeto existente identificado pelo ID
app.put('/projects/:id/', function(request, response){
    // O ID do projeto é obtido através dos parâmetros da URL (:id)
    // Retorna uma lista de projetos em formato JSON
    // Neste exemplo, a lista de projetos é fixa e representa a atualização de um projeto
    const {id} = request.params //parametros de rota
    const {name, owner} = request.body //Recebendo os parametros via Json
    console.log(id, name, owner)// Os valores recebidos por rotas será sempre
    return response.json([
        'projeto 4',
        'projeto 2',
        'projeto 3'
    ]);
});

// Método DELETE para deletar um projeto existente identificado pelo ID
app.delete('/projects/:id', function(request, response){
    // O ID do projeto é obtido através dos parâmetros da URL (:id)
    // Retorna uma lista de projetos em formato JSON
    // Neste exemplo, a lista de projetos é fixa e representa a exclusão de um projeto
    return response.json([
        'projeto 2',
        'projeto 3'
    ]);
});


// Inicia o servidor e faz com que ele escute na porta 3000
app.listen(3000, () => {
    // Imprime no console que o servidor está rodando e escutando na porta 3000
    console.log('Servidor rodando na porta 3000');
});