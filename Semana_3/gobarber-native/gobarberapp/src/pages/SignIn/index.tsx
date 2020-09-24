import React, { useCallback, useRef } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  TextInput
} from "react-native";
import logoImg from "../../assets/logo.png"; // Essa linha fica com erro ate criar a pasta @types
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import { FormHandles } from "@unform/core";
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
  Formulary,
} from "./styles";



interface InputPasswordRefProps{
  value:string
}
const SignIn: React.FC = () => {

  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const handleSignIn = useCallback(async (data: object) => {
    console.log(data);
  }, []);

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
              <Title>Faça seu logon</Title>
            </View>
            <Formulary ref={formRef} onSubmit={handleSignIn}>
              <Input 
              returnKeyType="next"
              onSubmitEditing={() => {passwordInputRef.current?.focus()}}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              name="Email" 
              icon="mail" 
              placeholder="E-mail" />
              <Input
              ref={passwordInputRef}
              secureTextEntry
              returnKeyType="send"
              onSubmitEditing={() => {formRef.current?.submitForm()}}
              name="Password"
              icon="lock"
              placeholder="Senha" />
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Entrar
              </Button>
            </Formulary>
            <ForgotPassword
              onPress={() => {
                console.log("Password");
              }}
            >
              <ForgotPasswordText>Esqueci minha Senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccountButton
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <>
          <Icon name="log-in" size={20} color="#FF9000" />
          <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
        </>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
/* A view em volta do Title  tem a funcao de manter a animacao no componente de texto, visto que quando solto ele nao tem animacoes
keyboardShouldPersistTaps na scrollview define o comportamento do teclado ao tocar na scrollview, no caso do handled ele mantem o comportamento padrao
*/
