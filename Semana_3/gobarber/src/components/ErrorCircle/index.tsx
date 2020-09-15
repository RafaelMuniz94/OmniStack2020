import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { Container } from "./styles";

interface ErrorProps {
  message: string;
}

const ErrorCicle: React.FC<ErrorProps> = ({ message }) => {
  console.log(message);
  return (
    <Container title={message}>
      <FiAlertCircle color="#C53030" size={20} />
    </Container>
  );
};
export default ErrorCicle;
