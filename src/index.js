// Importa o módulo express, que é um framework para construir aplicativos web em Node.js
const express = require('express');
// Importa o módulo uuid, especificamente a versão 4, para gerar IDs únicos
const { v4: uuidv4 } = require('uuid');

// Cria uma aplicação express
const app = express();
// Middleware para interpretar o corpo das requisições como JSON
app.use(express.json());

// Array para armazenar os projetos
const projects = [];

// Middleware para registrar as rotas acessadas
function logRoutes(request, response, next) {
    const { method, url } = request;
    console.log(`[${method.toUpperCase()}] ${url}`);// Imprime no terminal o método que esta sendo consultado na API 
    return next();
}

// Função auxiliar para encontrar o índice de um projeto pelo ID
function findProjectIndexById(id) {
    return projects.findIndex(project => project.id === id);
}

// Função auxiliar para validar o corpo da requisição
function validateProjectData(name, owner) {
    if (!name || !owner) {
        return { error: 'Name and owner are required' };
    }
    return null;
}

// Método GET para listar todos os projetos
app.get('/projects', (request, response) => {
    return response.json(projects);
});

// Método POST para criar um novo projeto
app.post('/projects', logRoutes, (request, response) => {
    const { name, owner } = request.body;

    const error = validateProjectData(name, owner);
    if (error) {
        return response.status(400).json(error);
    }

    const project = {
        id: uuidv4(),
        name,
        owner
    };

    projects.push(project);
    return response.status(201).json(project);
});

// Método PUT para atualizar um projeto existente identificado pelo ID
app.put('/projects/:id', logRoutes, (request, response) => {
    const { id } = request.params;
    const { name, owner } = request.body;

    const projectIndex = findProjectIndexById(id);
    if (projectIndex < 0) {
        return response.status(404).json({ error: 'Project not found' });
    }

    const error = validateProjectData(name, owner);
    if (error) {
        return response.status(400).json(error);
    }

    const project = { id, name, owner };
    projects[projectIndex] = project;

    return response.json(project);
});

// Método DELETE para deletar um projeto existente identificado pelo ID
app.delete('/projects/:id', logRoutes, (request, response) => {
    const { id } = request.params;

    const projectIndex = findProjectIndexById(id);
    if (projectIndex < 0) {
        return response.status(404).json({ error: 'Project not found' });
    }

    projects.splice(projectIndex, 1);
    return response.status(204).send();
});

// Inicia o servidor e faz com que ele escute na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
