import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Platform, Alert } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import {
  Container,
  Header,
  BackButton,
  HeaderTitle,
  UserAvatar,
  Content,
  ProvidersListContainer,
  ProvidersList,
  ProviderContainer,
  ProviderAvatar,
  ProviderName,
  Calendar,
  Title,
  OpenDayPickerButton,
  OpenDayPickerButtonText,
  Schedule,
  Section,
  SectionTitle,
  SectionContent,
  Hour,
  HourText,
  CreateAppointmentButton,
  CreateAppointmentButtonText,
} from "./styles";
import { format } from "date-fns";
import { useAuth } from "../../hooks/auth";
import api from "../../services/api";
import DateTimePicker from "@react-native-community/datetimepicker";

interface RouteParams {
  providerID: string;
}

export interface IProvider {
  id: string;
  name: string;
  avatar_url: string;
}

interface AvailabilityItem {
  hour: number;
  available: boolean;
}

const CreateAppointment: React.FC = () => {
  let route = useRoute();
  let routeParams = route.params as RouteParams;
  let { goBack, navigate } = useNavigation();
  let { user } = useAuth();
  let [providers, setProviders] = useState<IProvider[]>([]);
  let [selectedProvider, setSelectedProvider] = useState(
    routeParams.providerID
  );
  let [showDatePicker, setShowDatePicker] = useState(false);
  let [selectedDate, setSelectedDate] = useState(new Date());
  let [selectedHour, setSelectedHour] = useState(0);
  let [availability, setAvailability] = useState<AvailabilityItem[]>([]);

  let navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  let handleSelectedProvider = useCallback(
    (providerId: string) => {
      setSelectedProvider(providerId);
    },
    []
  );

  let handleToggleDatePicker = useCallback(() => {
    setShowDatePicker((state) => !state);
  }, [setShowDatePicker]);

  let handleDateChange = useCallback((e: any, date: Date | undefined) => {
    if (Platform.OS === "android") {
      setShowDatePicker(false);
    }
    if (date) setSelectedDate(date);
  }, []);

  let morningAvailability = useMemo(() => {
    return availability
      .filter(({ hour }) => {
        return hour < 12;
      })
      .map(({ hour, available }) => {
        return {
          hour,
          available,
          hourFormatted: format(new Date().setHours(hour), `HH:00`),
        };
      });
  }, [selectedDate]);

  let afternoonAvailability = useMemo(() => {
    return availability
      .filter(({ hour }) => {
        return hour >= 12;
      })
      .map(({ hour, available }) => {
        return {
          hour,
          available,
          hourFormatted: format(new Date().setHours(hour), `HH:00`),
        };
      });
  }, [selectedDate]);

  useEffect(() => {
    api.get("providers").then((response) => {
      setProviders(response.data);
    });
  }, []);

  useEffect(() => {
    api
      .get(`providers/${selectedProvider}/day-availability`, {
        params: {
          day: selectedDate.getDate(),
          month: selectedDate.getMonth() + 1,
          year: selectedDate.getFullYear(),
        },
      })
      .then((response) => {
        setAvailability(response.data);
      });
  }, [selectedDate, selectedProvider]); // Se o selectedDate mudar o useEffect sera disparado

  let handleSelectHour = useCallback((hour: number) => {
    setSelectedHour(hour);
  }, []);

  let handleCreateAppointment = useCallback(async () => {
    try {
      let date = new Date(selectedDate);
      date.setHours(selectedHour);
      date.setMinutes(0);

      console.log(selectedDate)
      console.log(selectedHour)
      console.log(date)

      await api.post("appointments", {
        provider_id: selectedProvider,
        date,
      });

      navigate("AppointmentCreated", { date: date.getTime() });
    } catch (err) {
      Alert.alert(
        "Erro ao Criar agendamento",
        "Ocorreu um erro ao tentar criar o agendamento, tente novamente"
      );
    }
  }, [navigate,selectedDate,selectedHour,selectedProvider]);

  return (
    <Container>
      <Header>
        <BackButton
          onPress={() => {
            navigateBack();
          }}
        >
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>
        <HeaderTitle>Cabeleireiros</HeaderTitle>
        <UserAvatar source={{ uri: user?.avatar_url }} />
      </Header>

      <Content>
        <ProvidersListContainer>
          <ProvidersList
            data={providers}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(provider) => provider.id}
            renderItem={({ item: provider }) => (
              <ProviderContainer
                onPress={() => handleSelectedProvider(provider.id)}
                selected={provider.id === selectedProvider}
              >
                <ProviderAvatar source={{ uri: provider.avatar_url }} />
                <ProviderName selected={provider.id === selectedProvider}>
                  {provider.name}
                </ProviderName>
              </ProviderContainer>
            )}
          ></ProvidersList>
        </ProvidersListContainer>

        <Calendar>
          <Title>Escolha a data</Title>
          <OpenDayPickerButton onPress={handleToggleDatePicker}>
            <OpenDayPickerButtonText>
              Selecione outra data
            </OpenDayPickerButtonText>
          </OpenDayPickerButton>
          {showDatePicker && (
            <DateTimePicker
              mode="date"
              display="calendar"
              onChange={handleDateChange}
              textColor="#f4ede8"
              value={selectedDate}
            />
          )}
        </Calendar>

        <Schedule>
          <Title>Escolha o horário:</Title>
          <Section>
            <SectionTitle>Manhã</SectionTitle>
            <SectionContent>
              {morningAvailability.map(({ hourFormatted, hour, available }) => (
                <Hour
                  enabled={available}
                  selected={selectedHour === hour}
                  available={available}
                  key={hourFormatted}
                  onPress={() => handleSelectHour(hour)}
                >
                  <HourText selected={selectedHour === hour}>
                    {hourFormatted}
                  </HourText>
                </Hour>
              ))}
            </SectionContent>
          </Section>
          <Section>
            <SectionTitle>Tarde</SectionTitle>
            <SectionContent>
              {afternoonAvailability.map(
                ({ hourFormatted, hour, available }) => (
                  <Hour
                    enabled={available}
                    selected={selectedHour === hour}
                    available={available}
                    key={hourFormatted}
                    onPress={() => handleSelectHour(hour)}
                  >
                    <HourText selected={selectedHour === hour}>
                      {hourFormatted}
                    </HourText>
                  </Hour>
                )
              )}
            </SectionContent>
          </Section>
        </Schedule>

        <CreateAppointmentButton onPress={handleCreateAppointment}>
          <CreateAppointmentButtonText>Agendar</CreateAppointmentButtonText>
        </CreateAppointmentButton>
      </Content>
    </Container>
  );
};

export default CreateAppointment;
