import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BackgroundArcs } from "./components/BackgroundArcs";
import { HomePage } from "./pages/HomePage";
import { useTheme } from "./theme";

export const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className="cyan-theme"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        fontFamily: "var(--gf-font-body)",
        background: "var(--gf-color-background)",
        color: "var(--gf-color-text)",
        position: "relative"
      }}
    >
      <BackgroundArcs />
      <Header />
      <main
        style={{
          flex: 1,
          padding: "var(--gf-space-lg)",
          paddingTop: "var(--gf-space-xl)"
        }}
      >
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

