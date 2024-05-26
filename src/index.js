// Importa o módulo express, que é um framework para construir aplicativos web em Node.js
const express = require('express');
const { v4: uuidv4 } = require('uuid');
// Cria uma aplicação express
const app = express();
app.use(express.json())


const projects = []

function logRoutes(request, response, next){
    const {method, url} = request
    const route =`[${method.toUpperCase()}] ${url}`
    console.log(route)
    return next()
}
app.use(logRoutes)

app.get('/projects', function(request, response){
    return response.json(projects)
});

// Método POST para criar um novo projeto
app.post('/projects', function(request, response){
       const {name, owner} = request.body //parametros de rota poderia ser no put
 const project = {
    id: uuidv4(),
    name,
    owner
 }
    projects.push(project)

    return response.status(201).json(project)
});

// Método PUT para atualizar um projeto existente identificado pelo ID
app.put('/projects/:id/', function(request, response){
      const {id} = request.params //parametros de rota
    const {name, owner} = request.body //Recebendo os parametros via Json
    
    const projectIndex = projects.findIndex(p => p.id === id)

    if(projectIndex < 0){
       return response.status(404).json({error: 'Project not found' }) 
    }
    
    if(!name || !owner){
        return response.status(400).json({error: 'Name and owner are required' }) 
    }

    const project = {
        id, 
        name,
        owner
    }

    projects[projectIndex] = project

    return response.json(project)
});

// Método DELETE para deletar um projeto existente identificado pelo ID
app.delete('/projects/:id', function(request, response){
    const {id} = request.params //parametros de rota

    const projectIndex = projects.findIndex(p => p.id === id)

    if(projectIndex < 0){
       return response.status(404).json({error: 'Project not found' }) 
    }

    projects.splice(projectIndex, 1)

    return response.status(204).send()
});


// Inicia o servidor e faz com que ele escute na porta 3000
app.listen(3000, () => {
    // Imprime no console que o servidor está rodando e escutando na porta 3000
    console.log('Servidor rodando na porta 3000');
});