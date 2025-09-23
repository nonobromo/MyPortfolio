import { Box, Container, Typography } from "@mui/material";
import TechIcon from "../components/common/techicon";
import Spendify from "../images/Spendify.webp";

function ProjectsPage() {
  // const items = [
  //   {
  //     title: "Basic",
  //     description: "CRM Task Magagment App",
  //     image: Basic,
  //     alt: "Basic",
  //     projectUrl: "https://basic-wzvv.onrender.com/",
  //   },
  //   {
  //     title: "Spendify",
  //     description: "Personal Expense Tracker",
  //     image: Spendify,
  //     alt: "Spendify",
  //     projectUrl: "https://spendify-9azz.onrender.com/",
  //   },
  //   {
  //     title: "Lift Off",
  //     description: "Business Card Manager ",
  //     image: LiftOff,
  //     alt: "LiftOff",
  //     projectUrl: "https://lift-off-35qv.onrender.com/",
  //   },
  //   {
  //     title: "Todoify",
  //     description: "Todo List App",
  //     image: Todoify,
  //     alt: "Todoify",
  //     projectUrl: "https://todoify-4ptv.onrender.com/",
  //   },
  // ];

  return (
    <Container
      id="projects"
      maxWidth="lg"
      sx={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
      }}>
      <Typography variant="h2" fontSize="48px" gutterBottom marginTop={16}>
        My Projects
      </Typography>

      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}>
        <Typography variant="h3" component="h3">
          Spendify
        </Typography>
        <Typography variant="h4" component="h4">
          Personal Exepnse Tracker
        </Typography>

        <Box sx={{ display: "flex", gap: 3 }}>
          <TechIcon
            flexDirection="row"
            className="devicon-react-original colored"
            text="React"
            techFontSize="20px"
          />

          <TechIcon
            flexDirection="row"
            className="devicon-typescript-plain colored"
            text="Typescript"
            techFontSize="20px"
          />
        </Box>

        <Box
          component="img"
          src={Spendify}
          sx={{ inlineSize: "500px", objectFit: "cover" }}
        />
      </Box>
    </Container>
  );
}

export default ProjectsPage;
