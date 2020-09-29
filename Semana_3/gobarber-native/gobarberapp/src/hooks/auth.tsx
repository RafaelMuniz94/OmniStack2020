import React, {
  useCallback,
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../services/api";

interface SignCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: object;
}

interface AuthContextData {
  user?: object;
  password?: string;
  loading:boolean;
  signIn(Credentials: SignCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData); // Para iniciar o contexto sem valor

const AuthProvider: React.FC = ({ children }) => {
  let [auth, setAuth] = useState<AuthState>({} as AuthState);

  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      let [token, user] = await AsyncStorage.multiGet([
        "@Gobarber:token",
        "@Gobarber:user",
      ]);

      if (token[1] && user[1]) {
        setAuth({ token: token[1], user: JSON.parse(user[1]) });
      }
      setLoading(false)
    }

    loadStorageData();
  }, []);

  let signIn = useCallback(async ({ email, password }) => {
    let response = await api.post("/sessions", { email, password });
    let { token, user } = response.data;

    await AsyncStorage.multiSet([
      ["@Gobarber:token", token],
      ["@Gobarber:user", JSON.stringify(user)],
    ]);

    setAuth({ token, user });
  }, []);

  let signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(["@Gobarber:token", "@Gobarber:user"]);

    setAuth({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: auth.user, signIn, signOut,loading }}>
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
