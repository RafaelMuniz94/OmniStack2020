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
import { useNavigation } from "@react-navigation/native";
import { Container, Title, BackToSignIn, BackToSignInText } from "./styles";

const SignUp: React.FC = () => {
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
              <Title>Crie sua conta</Title>
            </View>
            <Input name="name" icon="user" placeholder="Nome" />
            <Input name="Email" icon="mail" placeholder="E-mail" />
            <Input name="Password" icon="lock" placeholder="Senha" />
            <Button
              onPress={() => {
                console.log("Hi");
              }}
            >
              Entrar
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <BackToSignIn onPress={()=> navigation.goBack()}>
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
