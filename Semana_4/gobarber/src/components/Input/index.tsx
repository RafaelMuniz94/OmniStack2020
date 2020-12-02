import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { Container } from "./styles";
import { IconBaseProps } from "react-icons";
import { FiAlertCircle } from "react-icons/fi";
import { useField } from "@unform/core";
import ErrorCircle from "../ErrorCircle";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  containerStyle?: object;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name,
  containerStyle = {},
  icon: Icon,
  ...rest
}) => {
  const { fieldName, defaultValue, error, registerField } = useField(name); // Isso é um hook para
  let [isFocused, setIsFocused] = useState(false);
  let [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null); // Cria uma referencia para que aquele componente seja acessado de uma forma direta, sem ter que armazenar em algum estado

  let handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []); // No JS sempre que uma function possuir uma function filha ela ira recriar aquela funcao sempre que for chamada, isso pode gerar problemas de performance para isso sempre que criar uma funcion dentro de um componente, devemos utilizar um hook chamado useCallback, para que elas fiquem memorizadas e nao sejam recarregadas todas as vezes que forem chamadas.

  let handleInputFocus = useCallback(() => setIsFocused(true), []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current, // Acesso ao campo no html
      path: "value", //Indica ao unform que é onde estara o valor do componente
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
    >
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {/* {error && <FiAlertCircle color="#C53030" size={20}/>} */}
      {error && <ErrorCircle message={error} />}
    </Container>
  );
};

export default Input;
