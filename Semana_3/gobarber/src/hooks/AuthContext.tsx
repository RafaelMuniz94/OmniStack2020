import React, { createContext, useCallback, useState, useContext } from "react"; // contexto para tornar acessivel entre componentes que nao tenham relacao
import api from "../services/api";

interface SignInCredentials {
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
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData); // Para iniciar o contexto sem valor

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

  const signOut = useCallback(() => {
    localStorage.removeItem("@GoBarber:token");
    localStorage.removeItem("@GoBarber:user");

    setAuth({} as AuthState);
  }, []);
  return (
    <AuthContext.Provider
      value={{ token: auth.token, user: auth.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }

  return context;
}

export default AuthProvider;
