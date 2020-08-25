/**
 * Um service deve exportar apenas uma funcionalidade, no caso ele ira realizar apenas uma tarefa. por isso utilizar o Default
 *
 * Parar Criar: name, email,password
 * No exemplo abaixo o campo name tem um valor definido pela atribuicao e esse valor nao sera obrigatorio informar. no caso do email ele é obrigatorio e deve ser do tipo string
 */


 interface TechObject {
     title: string,
     experience: number
 }

interface CreateUserData {
  name?: string; // ?:significa opcional
  email: string;
  password: string;
  techs: Array<string | TechObject>; // ou tipo[]
} // Forma que definimos os tipos de um conjunto de dados, semelhante a um  objeto

export default function createUser({
  name = "",
  email,
  password,
  techs,
}: CreateUserData) {
  const user = {
    name,
    email,
    password,
    techs,
  };

  return user;
}
