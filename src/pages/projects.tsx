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
    },
    {
      title: "Spendify",
      description: "Personal Expense Tracker",
      image: Spendify,
      alt: "Spendify",
    },
    {
      title: "Lift Off",
      description: "Business Card Manager ",
      image: LiftOff,
      alt: "LiftOff",
    },
    {
      title: "Todoify",
      description: "Todo List App",
      image: Todoify,
      alt: "Todoify",
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
            />
          );
        })}
      </Grid>
    </Container>
  );
}

export default ProjectsPage;
