import React from "react";
import { Text, View, Button } from "react-native";

import { useAuth } from "../../hooks/auth";

let Dashboard: React.FC = () => {
  let { signOut } = useAuth();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 100,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Dashboard</Text>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
