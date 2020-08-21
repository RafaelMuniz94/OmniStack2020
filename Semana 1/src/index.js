const express = require("express");

const app = express();

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

let projetos = [];

app.get("/", (request, response) => {
  return response.send("Rota raiz"); // Retorna apenas um texto
});

app.get("/projects", (request, response) => {
    const {title,owner} = request.query; // Como utilizar os parametros da querystring
  return response.json(projetos);
}); // Definindo a rota projects

app.get("/json", (request, response) => {
  return response.json({ valor: `Estou retornando um JSON` });
});

app.post("/projects", (request, response) => {
  let { title,owner } = request.body;
  projetos.push(title);
  return response.json(projetos);
});

app.put("/projects/:id", (request, response) => {
  let {id} = request.params;
  console.log(id)
  return response.json(projetos);
});

app.delete("/projects/:id", (request, response) => {
    let params = request.params;
  return response.json(projetos);
});

app.listen(3333, () => {
  console.log(`Running 🚀`);
}); // app esta ouvindo a porta 3333
