import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App.tsx";
import them from "./theme.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={them}>
      <ColorModeScript initialColorMode={them.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
