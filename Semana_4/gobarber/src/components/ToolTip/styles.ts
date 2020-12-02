import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  span {
    width: 160px;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 6px);
    left: 50%; /* Joga metade para a esquerda */
    transform: translateX(-50%); /* Joga metade da metade para a esquerda */

    color: #312e38;

    &::before { /* Flecha abaixo do tooltip */
      content: "";
      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%; /* Joga metade para a esquerda */
      transform: translateX(-50%); /* Joga metade da metade para a esquerda */
    }
  }
`;
