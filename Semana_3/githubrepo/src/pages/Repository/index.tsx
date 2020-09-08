import React, { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom"; // permite visualizar os parametros da rota
import { Header, RepositoryInfo, RepositoryInfoHeader, Issues } from "./styles";
import logoImage from "../../Assets/page_logo.svg";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import api from "../../Services/api";
interface RepositoriyParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  title: string;
  id: number;
  html_url:string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoriyParams>();
  const [repository, setRepository] = useState<Repository | null>(null); // Para objeto é interessante comecar com ele vazio
  const [issue, setIssue] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`/repos/${params.repository}`).then((response) => {
      setRepository(response.data);
    });

    api.get(`/repos/${params.repository}/issues`).then((response) => {
      setIssue(response.data);
    }); // Essa forma é boa de ser utilizada quando uma chamada nao depende da outra, dessa forma as duas irao ocorrer ao mesmo tempo
  }, [params.repository]); // Nesse caso é necessario informar que o effct deve ocorrer para cada vez que o param for alterado, pois dessa forma, caso haja navegacao sem reiniciar a pagina, ele ira recarregar novamente, caso contrario ele ate chamará outra rota, porem nao irar alterar a tela

  return (
    <>
      <Header>
        <img src={logoImage} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      {repository && (
        <RepositoryInfo>
          <RepositoryInfoHeader>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </RepositoryInfoHeader>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}
     <Issues>
        {issue.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>
    </>
  );
};

export default Repository;
