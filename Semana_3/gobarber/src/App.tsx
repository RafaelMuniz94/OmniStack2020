import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import AppProvider from "./hooks";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Routes from "./routes/index";

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyle />
  </BrowserRouter>
);
export default App;
