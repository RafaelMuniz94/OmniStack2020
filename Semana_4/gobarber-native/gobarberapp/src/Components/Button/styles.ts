import styled from "styled-components/native";
import {RectButton} from 'react-native-gesture-handler'
import {fontRegular} from '../../assets/fonts'

export const Container = styled(RectButton)`
    width: 100%;
    height: 60px;
    background: #FF9000;
    border-radius: 10px;
    justify-content: center;
    align-items: center;

`;
export const ButtonText = styled.Text`
    font-family: ${fontRegular};
    font-size: 18px;
    color: #312e38;
`;
