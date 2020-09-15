import React from "react";
import { Container, Content, Background } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import logo from "../../Assets/logo.svg";

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber" />
      <form>
        <h1>Faça seu logon</h1>
        <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button name="login" type="submit">
          Entrar
        </Button>
        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="/SignUp">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
