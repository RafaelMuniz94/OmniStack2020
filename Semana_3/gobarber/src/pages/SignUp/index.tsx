import React, { useCallback, useRef } from "react";
import { Container, Content, AnimatedContainer, Background } from "./styles";
import { FormHandles } from "@unform/core";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FiArrowDownLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import logo from "../../Assets/logo.svg";
import { Form } from "@unform/web";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";
import { Link, useHistory } from "react-router-dom";
import api from '../../services/api'
import {useToast} from '../../hooks/ToastContext'

interface SignUpFormData{
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  let formRef = useRef<FormHandles>(null); // Possibilita o uso de Referencias da DOM ao formulario (atrelado la embaixo na criacao do form)
  let {addToast} = useToast()
  let history = useHistory()
  let handleSubmit = useCallback(async (data: SignUpFormData) => {

    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string()
          .required("Nome Obrigatório!")
          .min(3, "Mínimo 3 caracteres!"),
        email: Yup.string()
          .required("Email Obrigatório!")
          .email("Digite um email válido"),
        password: Yup.string().min(6, "Mínimo 6 caracteres!"),
      }); // Para validar um objeto inteiro
      await schema.validate(data, {
        abortEarly: false,
      });

      history.push('/');

      await api.post('/users',data)
      addToast({
        title: "Usuário cadastrado com sucesso!",
        type:"success"
      })
    } catch (err) {
      if( err instanceof Yup.ValidationError){
        let errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
        return;

      }

      addToast({
        title: "Não foi possível adicionar o usuário!",
        type:"error"
      })
    }
  }, [addToast,history]);

  return (
    <Container>
      <Background />
      <Content>
        <AnimatedContainer>
          <img src={logo} alt="GoBarber" />
          {/* <Form initialData={{name:''}} onSubmit={handleSubmit}> Para passar um objeto inicial para o campo */}
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu Cadastro</h1>
            <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button name="login" type="submit">
              Cadastrar
            </Button>
          </Form>

          <Link to="/">
            <FiArrowDownLeft />
            Voltar para Logon
          </Link>
        </AnimatedContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
