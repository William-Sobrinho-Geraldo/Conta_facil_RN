import React from "react";
import { Text } from "react-native";
import TelaPrincipal from "./src/telas/telaPrincipal/index";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <TelaPrincipal />
    </Provider>
  );
};