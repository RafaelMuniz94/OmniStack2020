import React, { ChangeEvent, useCallback, useRef } from "react";
import { Container, Content, AvatarInput, Header } from "./styles";
import { FormHandles } from "@unform/core";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from "react-icons/fi";
import { Form } from "@unform/web";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";
import { useHistory, Link } from "react-router-dom";
import api from "../../services/api";
import { useToast } from "../../hooks/ToastContext";
import { useAuth } from "../../hooks/AuthContext";

interface ProfileFormData {
  name: string;
  email: string;
  password: string;
  old_password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  let formRef = useRef<FormHandles>(null); // Possibilita o uso de Referencias da DOM ao formulario (atrelado la embaixo na criacao do form)
  let { addToast } = useToast();
  let history = useHistory();
  let handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string()
            .required("Nome Obrigatório!")
            .min(3, "Mínimo 3 caracteres!"),
          email: Yup.string()
            .required("Email Obrigatório!")
            .email("Digite um email válido"),
          old_password: Yup.string(),
          password: Yup.string().when("old_password", {
            is: (val) => !!val.length,
            then: Yup.string()
              .required("É necessario fornecer uma nova senha!")
              .min(6, "Mínimo 6 caracteres!"),
            otherwise: Yup.string(), //.min(6, "Mínimo 6 caracteres!")
          }),
          password_confirmation: Yup.string()
            .when("old_password", {
              is: (val) => !!val.length,
              then: Yup.string()
                .required("É necessario fornecer uma nova senha!")
                .min(6, "Mínimo 6 caracteres!"),
              otherwise: Yup.string(), //.min(6, "Mínimo 6 caracteres!")
            })
            .oneOf([Yup.ref("password")], "Confirmação incorreta"),
        }); // Para validar um objeto inteiro
        await schema.validate(data, {
          abortEarly: false,
        });

        let formData = Object.assign(
          {
            name: data.name,
            email: data.email,
          },
          data.old_password
            ? {
                old_password: data.old_password,
                password: data.password,
                password_confirmation: data.password_confirmation,
              }
            : {}
        );

        let response = await api.put("/profile/update", formData);

        updateUser(response.data);

        // await api.post("/users", data);
        addToast({
          title: "Perfil atuailizado com sucesso!",
          type: "success",
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          let errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          title: "Não foi possível atualizar o perfil!",
          type: "error",
        });
      }
    },
    [addToast, history]
  );
  let { user, updateUser } = useAuth();

  let handleAvatarChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        let data = new FormData();
        data.append("avatar", event.target.files[0]);

        await api.patch("/users/avatar", data).then((response) => {
          updateUser(response.data);
          addToast({
            title: "Avatar Atualizado!",
            type: "success",
          });
        });
      }
    },
    [addToast, updateUser]
  );

  return (
    <Container>
      <Header>
        <div>
          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>
        </div>
      </Header>
      <Content>
        {/* <Form initialData={{name:''}} onSubmit={handleSubmit}> Para passar um objeto inicial para o campo */}
        <Form
          ref={formRef}
          initialData={{
            name: user.name,
            email: user.email,
          }}
          onSubmit={handleSubmit}
        >
          <AvatarInput>
            <img src={user.avatar_url} alt={user.name} />
            <label htmlFor="avatar">
              <FiCamera />
              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </label>
          </AvatarInput>

          <h1>Meu Perfil</h1>
          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />

          <Input
            containerStyle={{ marginTop: 24 }}
            name="old_password"
            icon={FiLock}
            type="password"
            placeholder="Senha Atual"
          />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Nova Senha"
          />

          <Input
            name="password_confirmation"
            icon={FiLock}
            type="password"
            placeholder="Confirmar Senha"
          />

          <Button name="login" type="submit">
            Confirmar Mudanças
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
