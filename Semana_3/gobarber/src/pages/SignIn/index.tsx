import React, { useCallback, useRef } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { Container, Content, Background } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import logo from "../../Assets/logo.svg";
import getValidationErrors from "../../utils/getValidationErrors";
import { useAuth } from "../../hooks/AuthContext";
import { useToast } from "../../hooks/ToastContext";
import * as Yup from "yup";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  let formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth(); // De Padrao vai renderizar duas vezes
  const { addToast } = useToast();
  let handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        let { email, password } = data;
        formRef.current?.setErrors({});
        let schema = Yup.object().shape({
          email: Yup.string()
            .required("Email Obrigatório!")
            .email("Digite um email válido"),
          password: Yup.string().required(
            "Forneça uma senha que atenda as politicas!"
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({ email, password });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          let error = getValidationErrors(err);
          formRef.current?.setErrors(error);
        } else {
          addToast({
            title: "Ocorreu um erro!",
            message: "Ocorreu um erro ao logar, verifique suas credenciais!",
            type: "error",
          });
          addToast({
            title: "Ocorreu um erro!",
            message: "Ocorreu um erro ao logar, verifique suas credenciais!",
            type: "info",
          });
          addToast({
            title: "Ocorreu um erro!",
            message: "Ocorreu um erro ao logar, verifique suas credenciais!",
            type: "success",
          });
        }
      }
    },
    [signIn,addToast]
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>

        <a href="/SignUp">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
