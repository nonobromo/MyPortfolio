import { Box, Container, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
function About() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1" sx={{ fontSize: "48px", marginTop: 5 }}>
        A Little about me
      </Typography>

      <Box
        sx={{
          marginTop: "36px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}>
        <Typography variant="h2" sx={{ fontSize: "36px", color: "#0672FF" }}>
          My Education <SchoolIcon />
        </Typography>
        <Typography variant="body1">
          Studied Full-Stack development in HackerU from 2023-2025
        </Typography>

        <Typography variant="h3" sx={{ fontSize: "36px", color: "#0672FF" }}>
          {" "}
          My current occupation <WorkIcon />
        </Typography>
        <Typography variant="body1">
          I currently work in IT support at IKEA, where I help resolve technical
          issues for employees. This includes troubleshooting internet
          connectivity, resolving printer problems, and fixing common issues in
          Office applications. I've also created internal workflows for handling
          frequent problems and manage user accounts through Active Directory.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
