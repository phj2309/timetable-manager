import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import TimetablePage from "./pages/TimetablePage/TimetablePage";
import theme from "./styles/theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Navigate to="/timetable" />} />
          <Route path="/timetable" element={<TimetablePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
