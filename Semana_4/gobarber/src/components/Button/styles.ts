import styled from "styled-components";
import {shade} from 'polished'

export const Container = styled.button`
 
    background: #ff9000;
    height: 56px;
    color: #f4ede8;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    width: 100%;
    font-weight: 500;
    margin-top: 16px;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, "#FF9000")};
      color: ${shade(0.2, "#eee")};
    }
  
`;
