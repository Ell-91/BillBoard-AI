// src/App.tsx
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import the Layout component
import Layout from "./components/layout/Layout";

// Import page components
import Dashboard from "./scenes/dashboard";
// import Predictions from "./pages/Predictions";

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/predictions"
                element={<div>predictions page</div>}
              />
            </Routes>
          </Layout>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
