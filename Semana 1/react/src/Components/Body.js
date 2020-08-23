import React from "react";
import { getTime } from "../time";
import api from "../services/api";

export default function Body(props) {
  async function handleAddProject(name) {
    //props.projects.push(`${name} - ${Date.now()}`)//Nao respeita o conceito de imutabilidade

    //props.setProjects([...props.projects,`${name} - ${getTime()}`]); // Solicita ao react que renderize o componente novamente passando as informacoes adicionais

    const response = await api.post("projects", {
      title: `Novo Projeto - ${getTime()}`,
      owner: "Rafael Muniz",
    });

    const project = response.data

    props.setProjects([...props.projects,project])
  }

  return (
    <>
      <h2>{props.title}</h2>
      <ul>
        {props.projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}
