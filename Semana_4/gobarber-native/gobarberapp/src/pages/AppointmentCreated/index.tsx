import React, { useCallback, useMemo } from "react";
import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

interface RouteParams {
  date: number;
}

const AppointmentCreated: React.FC = () => {
  let { reset } = useNavigation();
  let { params } = useRoute();

  let routeParams = params as RouteParams;

  const handleOkPressed = useCallback(() => {
    reset({
      routes: [{ name: "Dashboard" }], //Estado da rota para resetar o usuario
      index: 0,
    });
  }, [reset]);

  let formattedDate = useMemo(() => {
    return format(routeParams.date, "EEEE', dia' dd 'de ' MMMM 'de ' yyyy 'às 'HH:mm 'h'", { locale: ptBr });
  }, [routeParams.date]);

  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />
      <Title>Agendamento concluído</Title>
      <Description>{formattedDate}</Description>
      <OkButton onPress={handleOkPressed}>
        <OkButtonText>OK</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
