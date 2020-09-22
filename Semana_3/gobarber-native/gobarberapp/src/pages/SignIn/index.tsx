import React from "react";
import { Text, Image } from "react-native";
import { Container,Title } from "./styles";
import logoImg from '../../assets/logo.png' // Essa linha fica com erro ate criar a pasta @types

const SignIn: React.FC = () => {
  return <Container>
    <Image source={logoImg} />
    <Title>Faça seu logon</Title>
  </Container>;
};

export default SignIn;
