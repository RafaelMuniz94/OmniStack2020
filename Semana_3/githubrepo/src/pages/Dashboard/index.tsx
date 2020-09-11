import React, { useState, useEffect, FormEvent } from "react";
import { Title, Form, Repositories, Error } from "./styles";
import logoimage from "../../Assets/page_logo.svg";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import api from "../../Services/api";

interface Repository {
  // Nao é necessario colocar a tipagem completa do objeto, colocar apenas oque sera utilizado
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    let storageRepositories = localStorage.getItem(
      "@GitHubExplorer:repositories"
    );
    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    } else {
      return [];
    }
  });
  const [inputError, setInputError] = useState("");
  const [newRepo, setNewRepo] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "@GitHubExplorer:repositories",
      JSON.stringify(repositories)
    ); // Local storage é por endereco
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    // Adicao de um novo repo
    // Consumir a api e buscar um novo repositorio
    event.preventDefault();
    try {
      if (!newRepo) {
        setInputError("Digite autor/repositório existente!");
        return;
      }
      const response = await api.get<Repository>(`repos/${newRepo}`);
      setRepositories([...repositories, response.data]);
      setNewRepo("");
      setInputError("");
    } catch (err) {
      setInputError("Erro na busca a esse repositório!");
      setNewRepo("");
    }
  }

  return (
    <>
      <img src={logoimage} alt="Github explorer" />
      <Title>Explore repositórios do GitHub</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        {/* a propriedade hasError, teve que ser criada personalizada no arquivo de styles */}
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do Repository"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      {/* A linha acima representa um if que so sera mostrado se o elemento a esquerda for true */}
      <Repositories>
        {repositories.map((repository) => (
          <Link
            key={repository.full_name}
            to={`/repository/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  );
}; // Nesse formato é mais simples de definir a tipagem desse componente, de forma menos verboso, no react para esse modelo sempre iremos tipar o elemento como FUNCTION COMPONENT

export default Dashboard;
