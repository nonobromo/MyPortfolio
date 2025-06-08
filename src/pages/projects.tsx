import { Container, Grid, Typography } from "@mui/material";

import Basic from "../images/BasicMain.png";
import Spendify from "../images/Spendify.png";
import LiftOff from "../images/Lift-Off.webp";
import Todoify from "..//images/Todoify.webp";
import ProjectItem from "../components/common/projectItem";
function ProjectsPage() {
  const items = [
    {
      title: "Basic",
      description: "CRM Task Magagment App",
      image: Basic,
      alt: "Basic",
      projectUrl: "https://basic-wzvv.onrender.com/",
    },
    {
      title: "Spendify",
      description: "Personal Expense Tracker",
      image: Spendify,
      alt: "Spendify",
      projectUrl: "https://spendify-9azz.onrender.com/",
    },
    {
      title: "Lift Off",
      description: "Business Card Manager ",
      image: LiftOff,
      alt: "LiftOff",
      projectUrl: "https://lift-off-35qv.onrender.com/",
    },
    {
      title: "Todoify",
      description: "Todo List App",
      image: Todoify,
      alt: "Todoify",
      projectUrl: "https://todoify-4ptv.onrender.com/",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ marginTop: "20px" }}>
      <Typography variant="h1" fontSize="48px" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={12}>
        {items.map((item) => {
          return (
            <ProjectItem
              title={item.title}
              description={item.description}
              image={item.image}
              alt={item.alt}
              projectUrl={item.projectUrl}
            />
          );
        })}
      </Grid>
    </Container>
  );
}

export default ProjectsPage;
