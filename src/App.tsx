import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BackgroundArcs } from "./components/BackgroundArcs";
import { HomePage } from "./pages/HomePage";
import { BioPage } from "./pages/BioPage";
import { ApplicationPage } from "./pages/ApplicationPage";
import { useTheme } from "./theme";

export const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <BrowserRouter>
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
          className="main-content"
          style={{
            flex: 1,
            padding: "var(--gf-space-lg)",
            paddingTop: "var(--gf-space-xl)"
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/bio" element={<BioPage />} />
            <Route path="/apply" element={<ApplicationPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

