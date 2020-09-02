/**
 * Por convenção nome de componentes tem que vir em letra maiuscula
 *
 * Componentes mais importantes do REACT:
 * Componente
 * Propriedade - Informacao que pode ser passada de um componente pai para um filho
 * Estado e Imutabilidade - Garentem performance em aplicacoes pesadas
 * O conceito de imutabilidade define que nao podemos mutar variaveis, ou seja nao podemos alterar incluir ou deletar informacoes de mameira direta, para isso teremos que recriar a informacao com as alteracoes desejadas
 *
 */

import React, { useState, useEffect } from "react"; // todo componente deve ter esse import
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import api from "./services/api";

import "./CSS/App.css";
import backgroundImage from "./Assets/background.png";

function App() {
  //Deve ter o mesmo nome do arquivo

  const [projects, setProjects] = useState(
    []
  ); /** useState retorna um array com 2 posicoes
  1. Variavel com se valor  inicial
  2. Funcao para atualizar o valor
  */

 useEffect(() => {
    api.get("projects").then((response) => {
        setProjects(response.data)
    });
  }, []); // Array de dependencias vazio significa que vai ser executado apenas quando for colocada na tela
  /**
   * Usada para disparar funcoes quando uma alteracao for alterada ou exibido em tela
   *
   * Dois parametros
   * 1.Qual funcao deve ser disparada
   * 2.Quando disparada
   */

  return (
    // Nao é possivel colocar um componente abaixo do outro sem que eles possuam algum outro elemento para cobri-los, por exemplo uma div
    <>
      <Header title="Roact" />
      {/* <img width={300} src={backgroundImage} /> */}
      <Body title="Projects" projects={projects} setProjects={setProjects} />
      <Footer>
        <ul>
          <li>Homepage</li>
          <li>Project</li>
          <li>Login</li>
        </ul>
      </Footer>
    </>
  );
}

export default App;
