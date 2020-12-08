import React, { useCallback, useEffect, useState } from "react";
import { Button } from "react-native";
import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  ProvidersList,
  ProviderContainer,
  ProviderAvatar,
  ProviderInfo,
  ProviderName,
  ProviderMeta,
  ProviderMetaText,
  ProvidersListTitle,
} from "./styles";
import { useAuth } from "../../hooks/auth";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";
import api from "../../services/api";

export interface IProvider {
  id: string;
  name: string;
  avatar_url: string;
}

let Dashboard: React.FC = () => {
  let { signOut, user } = useAuth();
  let { navigate } = useNavigation();

  let navigateToProfile = useCallback(() => {
    navigate("Profile");
  }, [navigate]);
  let [providers, setProviders] = useState<IProvider[]>([]);
  
  useEffect(() => {
    api.get("providers").then((response) => {
      setProviders(response.data);
    });
  }, []);

  let navigationToCreateAppointment = useCallback(
    (providerID: string) => {
      navigate("CreateAppointment", { providerID });
    },
    [navigate]
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem Vindo,{"\n"}
          <UserName>{user?.name}</UserName>
        </HeaderTitle>

        <ProfileButton
          onPress={() => {
            navigateToProfile();
          }}
        >
          <UserAvatar source={{ uri: user?.avatar_url }} />
        </ProfileButton>
      </Header>
      <ProvidersList
        data={providers}
        keyExtractor={(provider) => provider.id}
        ListHeaderComponent={
          <ProvidersListTitle>Cabeleireiros</ProvidersListTitle>
        }
        renderItem={({ item: Provider }) => (
          <ProviderContainer
            onPress={() => navigationToCreateAppointment(Provider.id)}
          >
            <ProviderAvatar source={{ uri: Provider.avatar_url }} />
            <ProviderInfo>
              <ProviderName>{Provider.name}</ProviderName>
              <ProviderMeta>
                <Icon name="calendar" size={14} color="#ff9000" />
                <ProviderMetaText>Segunda á Sexta</ProviderMetaText>
              </ProviderMeta>

              <ProviderMeta>
                <Icon name="clock" size={14} color="#ff9000" />
                <ProviderMetaText>08:00 ás 18:00</ProviderMetaText>
              </ProviderMeta>
            </ProviderInfo>
          </ProviderContainer>
        )}
      />

      <Button title="Sair" onPress={signOut} />
    </Container>
  );
};

export default Dashboard;
