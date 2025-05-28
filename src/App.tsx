import { Box } from "@mui/material";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import ProjectsPage from "./pages/projects";
import ContactForm from "./pages/contact";

function App() {
  return (
    <Box sx={{ maxHeight: "100vh" }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Box>
  );
}

export default App;
