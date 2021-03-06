import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  // <Container>
  //     <button {...props}/>
  // </Container>
  //<Container {...props}/>
  <Container type="button" {...rest}>
    {loading ? "Carregando..." : children}
  </Container>
);

export default Button;
