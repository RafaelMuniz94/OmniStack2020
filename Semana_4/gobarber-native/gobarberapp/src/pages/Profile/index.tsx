import React, { useCallback, useRef } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { Form } from "@unform/mobile";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";
import { FormHandles } from "@unform/core";
import api from "../../services/api";
import {
  Container,
  BackButton,
  Title,
  UserAvatarButton,
  UserAvatar,
} from "./styles";
import { useAuth } from "../../hooks/auth";
import ImagePicker from "react-native-image-picker";

interface ProfileFormData {
  name: string;
  email: string;
  password: string;
  old_password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  let { user, updateUser } = useAuth();
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  let emailInputRef = useRef<TextInput>(null);
  let old_passwordInputRef = useRef<TextInput>(null);
  let passwordInputRef = useRef<TextInput>(null);
  let password_confirmationInputRef = useRef<TextInput>(null);
  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});
        let schema = Yup.object().shape({
          name: Yup.string().required("Nome é obrigatório!"),
          email: Yup.string()
            .required("O Email é obrigatório!")
            .email("O e-mail deve ter um formato válido!"),
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
        });
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

        Alert.alert(`Perfil atualizado com sucesso!`);
        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          let errors = getValidationErrors(err);
          console.log(errors);
          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          "Erro na atualização do Perfil",
          "Ocorreu um erro ao atualizar perfil, tente novamente mais tarde"
        );
      }
    },
    [navigation, updateUser]
  );

  let handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  let handleUpdateAvatar = useCallback(() => {
    ImagePicker.showImagePicker(
      {
        title: "Selecione um avatar",
        cancelButtonTitle: "Cancelar",
        takePhotoButtonTitle: "Usar Câmera",
        chooseFromLibraryButtonTitle: "Escolher da Galeria",
      },
      (response) => {
        if (response.didCancel) return;
        else if (response.error) {
          Alert.alert("Erro ao atualizar seu avatar");
          return;
        } else {
          
          let data = new FormData();
          data.append('avatar',{
              uri: response.uri,
              type:"image/jpeg",
              name: `${user?.id}.jpg`
          })

          api.patch('users/avatar',data).then(
              apiResponse =>{
                updateUser(apiResponse.data)
              }
          )
        }
      }
    );
  }, [updateUser, user?.id]);
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <BackButton onPress={handleGoBack}>
              <Icon name="chevron-left" size={24} color="#999591" />
            </BackButton>
            <UserAvatarButton onPress={handleUpdateAvatar}>
              <UserAvatar source={{ uri: user?.avatar_url }} />
            </UserAvatarButton>

            <View>
              <Title>Meu Perfil</Title>
            </View>
            <Form
              initialData={{ name: user?.name, email: user?.email }}
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <Input
                autoCorrect={true}
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
                enablesReturnKeyAutomatically={true}
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />
              <Input
                ref={emailInputRef}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                name="email"
                icon="mail"
                placeholder="E-mail"
                enablesReturnKeyAutomatically={true}
                returnKeyType="next"
                onSubmitEditing={() => {
                  old_passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={old_passwordInputRef}
                name="old_password"
                icon="lock"
                placeholder="Senha Atual"
                secureTextEntry
                textContentType={"newPassword"}
                returnKeyType="send"
                enablesReturnKeyAutomatically={true}
                containerStyle={{ marginTop: 16 }}
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Nova Senha"
                secureTextEntry
                textContentType={"newPassword"}
                returnKeyType="next"
                enablesReturnKeyAutomatically={true}
                onSubmitEditing={() => {
                  password_confirmationInputRef.current?.focus();
                }}
              />
              <Input
                ref={password_confirmationInputRef}
                name="password_confirmation"
                icon="lock"
                placeholder="Confirmar a Senha"
                secureTextEntry
                textContentType={"newPassword"}
                returnKeyType="send"
                enablesReturnKeyAutomatically={true}
                onSubmitEditing={() => formRef.current?.submitForm()}
              />
            </Form>
            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              Confirmar Mudanças
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Profile;
