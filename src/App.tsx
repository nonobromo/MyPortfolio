import { Box, Container } from "@mui/material";
import Header from "./components/header";

import Home from "./pages/home";
import About from "./pages/about";
import ProjectsPage from "./pages/projects";

function App() {
  return (
    <Box
      sx={{
        maxHeight: "100vh",
      }}
    >
      <Container sx={{ display: "flex", flexDirection: "column" }}>
        <Header />
        <Home />
        <About />
        <ProjectsPage />
      </Container>
    </Box>
  );
}

export default App;
