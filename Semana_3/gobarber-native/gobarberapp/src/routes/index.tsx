import React from "react";
import { ActivityIndicator, View } from "react-native";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

import { useAuth } from "../hooks/auth";

let Routes: React.FC = () => {
  let { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#r" />
      </View>
    );
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
