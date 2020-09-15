import styled from 'styled-components'
import backgroundImg from "../../Assets/createAccountBackground.png";
import {shade} from 'polished'

export const Container = styled.div`

    height: 100vh;
    display: flex;
    align-items: stretch;


`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    align-items: center;
    width: 100%;
    max-width: 700px;
    form{
        margin: 80px 0;
        width: 340px;
        text-align: center;

        h1{
            margin-bottom: 24px;
        }
        

        a{
            color: #F4EDe8;
            display: block;
            margin-top:24px;
            transition: color 0.2s;
            &:hover{
                color: ${shade(0.2,'#F4EDe8')};
            }
        }
    }
    /* > a{  - Apenas a que vier direto no estilo superior, nesse caso nao afetando o que esta dentro do form */
        > a{ 
            color: #F4EDE8;
            display: block;
            margin-top:24px;
            transition: color 0.2s;

            display: flex;
            align-items: center;

            svg{
                margin-right: 16px
            }
            &:hover{
                color: ${shade(0.2,'#F4EDE8')};
            }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center;
    background-size: cover;
`;