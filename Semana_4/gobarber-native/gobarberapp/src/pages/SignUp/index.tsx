import React, { useCallback, useRef } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import logoImg from "../../assets/logo.png"; // Essa linha fica com erro ate criar a pasta @types
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { Form } from "@unform/mobile";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";
import { FormHandles } from "@unform/core";
import api from '../../services/api'
import { Container, Title, BackToSignIn, BackToSignInText } from "./styles";


interface SignUpFormData{
  name:string,
  email:string,
  password:string
}

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  let emailInputRef = useRef<TextInput>(null);
  let passwordInputRef = useRef<TextInput>(null);
  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    try {
      formRef.current?.setErrors({});
      let schema = Yup.object().shape({
        name: Yup.string().
        required("Nome é obrigatório!"),
        email: Yup.string()
          .required("O Email é obrigatório!")
          .email("O e-mail deve ter um formato válido!"),
        password: Yup.string()
        .min(6, "A senha deve possuir no mínimo 6 caracteres!")
        .required("É necessário fornecer uma senha!"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/users', data)
      Alert.alert(`Cadastro realizado com sucesso!`, 'Pode realizar login na Aplicação!')
      navigation.goBack()

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        let errors = getValidationErrors(err);
        console.log(errors)
        formRef.current?.setErrors(errors);
        return;
      }

      Alert.alert(
        "Erro ao criar conta",
        "Não foi possível criar conta, tente novamente mais tarde"
      );
    }
  }, [navigation]);

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
            <Image source={logoImg} />
            <View>
              <Title>Crie sua conta</Title>
            </View>
            <Form ref={formRef} onSubmit={handleSubmit}>
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
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
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
              Entrar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <BackToSignIn onPress={() => navigation.goBack()}>
        <>
          <Icon name="arrow-left" size={20} color="#FFF" />
          <BackToSignInText>Voltar para Logon</BackToSignInText>
        </>
      </BackToSignIn>
    </>
  );
};

export default SignUp;
/* A view em volta do Title  tem a funcao de manter a animacao no componente de texto, visto que quando solto ele nao tem animacoes
keyboardShouldPersistTaps na scrollview define o comportamento do teclado ao tocar na scrollview, no caso do handled ele mantem o comportamento padrao
*/
