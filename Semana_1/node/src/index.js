const express = require("express");
const cors = require("cors");
const { uuid, isUuid } = require("uuidv4"); // Inportando apenas a fucao uuid da biblioteca uuidv4, ela tem como funcao criar um id unico universal

const app = express();
app.use(cors()); // Sem uma configuracao especifica, qualquer frontend podera acessar

app.use(express.json()); // necessario para que as rotas utilizem json
/**
 * Metodos HTTP:
 *
 * Get - Utilizado para buscar informacoes
 * Post - Utilizado para enviar informacoes para o servidor
 * Put - Utilizado para alterar uma informacao completamente no servidor
 * PATCH - Utilizado para alterar uma informacao parcialmente no servidor
 * DELETE - Utilizado para deletar uma informacao no servidor
 */

/**
 * Tipos de Parametros:
 *
 * Parametros sao formas do client enviar informacoes ao backend
 *
 * Query params: Utilizados principamente para Filtros e paginacao, sao definidos apos um ? na url apos o recurso desejado. Esses parametros sao separados por &
 * Route Params: Utilizados para identificar recursos para identificar ou deletar, ele esta definido como um valor sem identificador apos o recurso desejado
 * Request body: Utilizado para envio de dados para o servidor, esse tipo de parametro nao deixara visivel qual os valores foram enviados para o servidor
 */

/**
 * Middleware:
 *
 * Interceptador de requisiçoes, pode interromper totalmente uma requisicao
 * Pode alterar dados de uma requisicao (por exemplo em um telefone sem fio)
 * Ele tem o formato de funcao, recebem request e response, rotas sao middlewares
 * Para middlewares que nao sao rotas teremos o parametro next para indicar qual sera a proxima rota a ser chamada
 * Middlewares sao utilizados para disparar automaticamente trechos de codigo de uma requisicao
 * É possivel incluir um middle em uma rota especifica, basta informar ele na chamada do metodo, antes da function que a rota devera executar
 */

let projects = [];

function logRequests(request, response, next) {
  const { method, url } = request;

  const loglabel = `[${method.toUpperCase()} ${url}]`;
  console.time(loglabel);

  next(); // deve ser chamada para que a rota seguinte aconteça

  console.timeEnd(loglabel);
}

function validateProjectId(request, response, next) {
  const { id } = request.params;
  if (!isUuid(id)) {
    return response.status(400).json({ error: "Invalid ID!" });
  }
  return next();
}

app.use(logRequests); // definindo que o middleware deverá ser utilizado para todas as rotas, deve ser incluido antes das rotas

app.use("/projects/:id", validateProjectId); // Dessa forma nao sera necessario colocar em cada rota, pois criamos um padrao de rota que esse middle devera ser aplicado

app.get("/", (request, response) => {
  return response.send("Rota raiz"); // Retorna apenas um texto
});

app.get("/projects", (request, response) => {
  const { title, owner } = request.query; // Como utilizar os parametros da querystring

  let results = [];

  results.push(
    title ? projects.filter((project) => project.title.includes(title)) : null
  );

  results.push(
    owner ? projects.filter((project) => project.owner === owner) : null
  );

  //if (results && results.length > 0) return response.json(results);

  return response.json(projects);
}); // Definindo a rota projects

app.get("/json", (request, response) => {
  return response.json({ valor: `Estou retornando um JSON` });
});

app.post("/projects", (request, response) => {
  let { title, owner } = request.body;
  let project = { id: uuid(), title, owner };
  projects.push(project);
  return response.json(project);
});

app.put("/projects/:id", (request, response) => {
  let { id } = request.params;
  let { title, owner } = request.body;
  let projectIndex = projects.findIndex((project) => {
    return project.id === id;
  });

  if (projectIndex < 0) {
    return response.status(404).json({ error: "Project not found!" });
  }

  let project = { id, title, owner };

  projects[projectIndex] = project;

  return response.json(project);
});

app.delete("/projects/:id", validateProjectId, (request, response) => {
  let { id } = request.params;

  let projectIndex = projects.findIndex((project) => {
    return project.id === id;
  }); // procura o index do projeto por id e caso nao encontre retorna o index -1

  if (projectIndex < 0) {
    return response.status(404).json({ error: "Project not found!" });
  }

  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

app.listen(3333, () => {
  console.log(`Running 🚀`);
}); // app esta ouvindo a porta 3333
