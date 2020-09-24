import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from "react";
import { TextInputProps } from "react-native";
import { useField } from "@unform/core";

import { Container, TextInput, Icon } from "./styles";

interface InputProps extends TextInputProps {
  name: string;
  icon: string; // Diferente do react web
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, icon, ...rest },
  ref
) => {
  const inputElementRef = useRef<any>(null);
  const { registerField, defaultValue = "", fieldName, error } = useField(name);
  const InputValueRef = useRef<InputValueReference>({ value: defaultValue });

  let [isFocused, setIsFocused] = useState(false);
  let [isFilled, setFilled] = useState(false);

  let handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  let handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setFilled(!!InputValueRef.current.value);
  }, []);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: InputValueRef.current,
      path: `value`,
      setValue(ref: any, value) {
        InputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value }); // Muda oxto do input quando o valor dentro da referencia seja nula
      },
      clearValue() {
        InputValueRef.current.value = "";
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  })); //Passa uma funcionalidade de um componente interno para seu componente pai
  return (
    <Container isFocused={isFocused}>
      <Icon name={icon} size={20} color={isFocused || isFilled ? "#FF9000" : "#666360"} />
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark" //Apenas IOS
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={(value) => {
          InputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  ); //Componentes filhos
}; //Componente Pai

export default forwardRef(Input); // Sempre deve ser utilizada quando ouver uma passagem de ref para o elemento
