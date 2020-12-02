import React, { useCallback, useRef, useState } from "react";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import { Container, Content, AnimationContainer, Background } from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FiLock } from "react-icons/fi";
import logo from "../../Assets/logo.svg";
import getValidationErrors from "../../utils/getValidationErrors";
import { useToast } from "../../hooks/ToastContext";
import * as Yup from "yup";
import { useLocation, useHistory } from "react-router-dom";
import api from "../../services/api";

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = () => {
  let formRef = useRef<FormHandles>(null);
  let [loading, setLoading] = useState(false);

  const { addToast } = useToast();
  let history = useHistory();
  let location = useLocation();

  let handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        let token = location.search.replace(`?token=`, "");

        if (!token) {
          addToast({
            title: "Ocorreu um erro!",
            message: "É necessário um token válido para continuar!",
            type: "error",
          });
          return;
        }

        setLoading(true);
        let { password, password_confirmation } = data;
        formRef.current?.setErrors({});
        let schema = Yup.object().shape({
          password: Yup.string().required(
            "Forneça uma senha que atenda as politicas!"
          ),
          password_confirmation: Yup.string()
            .required("Forneça uma senha que atenda as politicas!")
            .oneOf([Yup.ref("password")], "As senhas devem ser iguais!"),
        });

        await schema.validate(data, { abortEarly: false });

        await api.post("/password/reset", {
          password,
          password_confirmation,
          token,
        });

        addToast({
          title: "Senha alterada!",
          message: "Email de recuperação enviado com sucesso!",
          type: "success",
        });
        history.push("/");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          let error = getValidationErrors(err);
          formRef.current?.setErrors(error);
          return;
        }
        addToast({
          title: "Ocorreu um erro!",
          message: "Ocorreu um erro ao resetar a senha, tente novamente!",
          type: "error",
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, history, location]
  );
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Trocar senha!</h1>

            <Input
              name="password"
              type="password"
              icon={FiLock}
              placeholder="Nova Senha"
            />

            <Input
              name="password_confirmation"
              type="password"
              icon={FiLock}
              placeholder="Confirmação da senha"
            />

            <Button loading={loading} name="trocarSenhaSenha" type="submit">
              Trocar Senha
            </Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ResetPassword;
