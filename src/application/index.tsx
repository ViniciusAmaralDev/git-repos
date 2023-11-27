import React from "react";
import Providers from "./providers";
import { Home } from "./screens/home";

export default function App() {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}
