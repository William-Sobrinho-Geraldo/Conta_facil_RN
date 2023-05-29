import React from "react";
import TelaPrincipal from "./src/telas/telaPrincipal/index";
import { Provider } from "react-redux";
import store from "./src/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <TelaPrincipal />
    </Provider>
  );
};