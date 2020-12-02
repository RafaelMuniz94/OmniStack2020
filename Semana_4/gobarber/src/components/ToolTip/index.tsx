import React from "react";
import { Container } from "./styles";

interface ToolTipsProps {
  title: string;
  className?: string; // Para indicar ao tooltip que ele ira receber uma estilizacao de um objeto de nivel superior ao dele. Nao deve ser obrigatorio
}

const ToolTip: React.FC<ToolTipsProps> = ({title,className, children}) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};


export default ToolTip