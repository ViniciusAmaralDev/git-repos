import React from "react";
import Providers from "./providers";
import MainNavigator from "./routes";

export default function App() {
  return (
    <Providers>
      <MainNavigator />
    </Providers>
  );
}
