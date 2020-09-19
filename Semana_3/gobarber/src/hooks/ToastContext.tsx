import React, { createContext, useContext, useCallback, useState } from "react";
import { uuid } from "uuidv4";
import ToastContainer from "../components/ToastContainer";

export interface ToastMessage {
  id: string;
  title: string;
  message?: string;
  type?: "success" | "error" | "info";
}
interface ToastContextData {
  addToast(message: Omit<ToastMessage, "id">): void;
  removeToast(id: string): void;
}
const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  let [messages, setMessages] = useState<ToastMessage[]>([] as ToastMessage[]);

  const addToast = useCallback(
    ({ type, title, message }: Omit<ToastMessage, "id">) => {
      let id = uuid();
      let toast = {
        id,
        type,
        title,
        message,
      };

      setMessages((state) => [...state, toast]); // passa as mensagens anteriores sem depender da variavel messages
    },
    []
  );
  let removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);
  return (
    <ToastContext.Provider value={{ removeToast, addToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
}

export { ToastProvider, useToast };