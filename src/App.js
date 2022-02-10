import Layout from "./UI/layout/Layout";

import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import theme_config from "./UI/Theme";
import "./App.css";

function App() {
  const theme = createTheme(theme_config);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </Router>
  );
}

export default App;