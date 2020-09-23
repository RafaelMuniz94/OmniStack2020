import styled from "styled-components/native";
import { Platform } from "react-native";
import { fontRegular } from "../../assets/fonts";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === "android" ? 150 : 0}px; /* (30px)Para gerar a margin do botao e evitar que ele encoste nas paredes do container. (100px) Para no android evitar que seja coberto o botao ao abrir o teclado*/
`;
export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: ${fontRegular};
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;
export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: ${fontRegular};
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const CreateAccountButtonText = styled.Text`
  color: #ff9000;
  font-size: 18px;
  font-family: ${fontRegular};
  margin-left: 16px;
`;
