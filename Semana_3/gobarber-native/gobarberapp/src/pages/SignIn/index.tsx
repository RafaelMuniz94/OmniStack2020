import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
} from "react-native";
import logoImg from "../../assets/logo.png"; // Essa linha fica com erro ate criar a pasta @types
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Icon from "react-native-vector-icons/Feather";
import {useNavigation} from '@react-navigation/native'
import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from "./styles";

const SignIn: React.FC = () => {
  const navigation = useNavigation();
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
            <Input name="Email" icon="mail" placeholder="E-mail" />
            <Input name="Password" icon="lock" placeholder="Senha" />
            <Button
              onPress={() => {
                console.log("Hi");
              }}
            >
              Entrar
            </Button>
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
      <CreateAccountButton onPress={()=>{navigation.navigate('SignUp')}}>
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
