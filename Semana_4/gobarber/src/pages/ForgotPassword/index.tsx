import React, { useCallback, useRef,useState } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { Container, Content, AnimationContainer, Background } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FiLogIn, FiMail } from "react-icons/fi";
import logo from "../../Assets/logo.svg";
import getValidationErrors from "../../utils/getValidationErrors";
import { useToast } from "../../hooks/ToastContext";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  let formRef = useRef<FormHandles>(null);
  let [loading,setLoading] = useState(false)

  const { addToast } = useToast();
  let history = useHistory();

  let handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
          setLoading(true)
        let { email } = data;
        formRef.current?.setErrors({});
        let schema = Yup.object().shape({
          email: Yup.string()
            .required("Email Obrigatório")
            .email("Digite um email válido"),
        });
        await schema.validate(data, { abortEarly: false });

        api.post("/password/forgot", {
          email,
        });

        addToast({
          title: "Email enviado!",
          message: "Email de recuperação enviado com sucesso!",
          type: "success",
        });

        
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          let error = getValidationErrors(err);
          formRef.current?.setErrors(error);
          return;
        }
        addToast({
          title: "Ocorreu um erro!",
          message: "Ocorreu um erro ao recuperar a senha, tente novamente!",
          type: "error",
        });
      }finally{
          setLoading(false)
          //history.push("/");
      }
    },
    [addToast, history]
  );
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Recuperar senha!</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail" />

            <Button loading={loading} name="recuperarSenha" type="submit">
              Recuperar Senha
            </Button>
          </Form>

          <Link to="/">
            <FiLogIn />
            Voltar ao Login
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ForgotPassword;
