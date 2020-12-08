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
  user: User;
}

interface AuthContextData {
  user?: User;
  password?: string;
  loading: boolean;
  signIn(Credentials: SignCredentials): Promise<void>;
  updateUser(user: User): Promise<void>;
  signOut(): void;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
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
        api.defaults.headers.authorization = `Bearer ${token[1]}`;
        setAuth({ token: token[1], user: JSON.parse(user[1]) });
      }
      setLoading(false);
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

    api.defaults.headers.authorization = `Bearer ${token}`;
    setAuth({ token, user });
  }, []);

  let updateUser = useCallback(async (user: User) => {
    await AsyncStorage.setItem("@Gobarber:user", JSON.stringify(user));
    setAuth({
      token:auth.token,
      user,
    })
  }, [setAuth,auth.token]);


  let signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(["@Gobarber:token", "@Gobarber:user"]);

    setAuth({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: auth.user, signIn,updateUser, signOut, loading }}>
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
