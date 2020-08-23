import React from "react";
import {getTime} from '../time'

export default function Body(props) {
  function handleAddProject(name) {
      //props.projects.push(`${name} - ${Date.now()}`)//Nao respeita o conceito de imutabilidade
        props.setProjects([...props.projects,`${name} - ${getTime()}`]); // Solicita ao react que renderize o componente novamente passando as informacoes adicionais
     
  }

  return (
    <>
      <h2>{props.title}</h2>
      <ul>
        {props.projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul> 

      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}
