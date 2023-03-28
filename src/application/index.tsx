import React from "react";
import theme from "./theme";
import MainRoute from "./routes";
import Providers from "./providers";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Providers>
        <MainRoute />
      </Providers>
    </ThemeProvider>
  );
}
