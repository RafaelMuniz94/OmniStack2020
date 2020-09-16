import React, { createContext, useCallback, useState } from "react"; // contexto para tornar acessivel entre componentes que nao tenham relacao
import api from "../services/api";

interface SignInCredentias {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: object;
}

interface AuthContextData {
  user: object;
  token?: string;
  signIn(credentials: SignInCredentias): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
); // Para iniciar o contexto sem valor

const AuthProvider: React.FC = ({ children }) => {
  let [auth, setAuth] = useState<AuthState>(() => {
    let token = localStorage.getItem("@GoBarber:token");
    let user = localStorage.getItem("@GoBarber:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("/sessions", { email, password });

    let { token, user } = response.data;

    localStorage.setItem("@GoBarber:token", token);
    localStorage.setItem("@GoBarber:user", JSON.stringify(user));

    setAuth({ token, user });
  }, []);
  return (
    <AuthContext.Provider
      value={{ token: auth.token, user: auth.user, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
