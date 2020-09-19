import React, { useEffect } from "react";
import { Container } from "./styles";
import { ToastMessage, useToast } from "../../..//hooks/ToastContext";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXOctagon,
} from "react-icons/fi";

interface ToastProps {
  message: ToastMessage;
  style: object;
}
const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

let Toast: React.FC<ToastProps> = ({ message,style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 3000);

    return () => { // No react caso uma funcao seja retornada de dentro de useEffect ela é executada imediatamente quando o componente deixar de existir
      clearTimeout(timer);
    }; // Executa imediatamente se o componente deixar de existir
  }, [removeToast, message.id]);

  return (
    <Container type={message.type} hasdescription={!!message.message} style={style}>
      {icons[message.type || "info"]}
      <div>
        <strong>
          {message.title}
          {message.message && <p>{message.message}</p>}
        </strong>
      </div>
      <button type="button" onClick={() => removeToast(message.id)}>
        <FiXOctagon size={18} />
      </button>
    </Container>
  );
};

export default Toast;
