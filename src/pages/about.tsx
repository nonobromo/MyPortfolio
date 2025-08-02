import { Box, Container, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import DescriptionIcon from "@mui/icons-material/Description";
function About() {
  return (
    <Container maxWidth="lg" id="about" sx={{ minHeight: "100vh" }}>
      <Typography variant="h1" sx={{ fontSize: "48px", marginTop: 14 }}>
        A Little about me
      </Typography>

      <Box
        sx={{
          marginTop: "36px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h2" sx={{ fontSize: "36px", color: "#0672FF" }}>
          My Education <SchoolIcon />
        </Typography>
        <Typography variant="body1" fontSize="24px">
          Studied Full-Stack development in HackerU from 2023-2025.
        </Typography>

        <Typography variant="h3" sx={{ fontSize: "30px", color: "#0672FF" }}>
          {" "}
          My current occupation <WorkIcon />
        </Typography>
        <Typography variant="body1" fontSize="24px">
          I currently work in IT support at{" "}
          <span style={{ color: "#0057AD" }}>IKEA</span>, where I help resolve
          technical issues for employees. This includes troubleshooting internet
          connectivity, resolving printer problems, and fixing common issues in
          Office applications. I've also created internal workflows for handling
          frequent problems and manage user accounts through Active Directory.
        </Typography>
      </Box>

      <Box sx={{ marginTop: 4 }}>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
          component="a"
        >
          <Typography fontSize={{ xs: "24px", md: "36px" }} color="#0672FF">
            Check Out My Resume
          </Typography>
          <DescriptionIcon sx={{ fontSize: "36px", color: "#FFF" }} />
        </Box>
      </Box>
    </Container>
  );
}

export default About;
