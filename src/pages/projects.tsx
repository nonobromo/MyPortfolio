import { Box, Container, Typography } from "@mui/material";
import TechIcon from "../components/common/techicon";

function ProjectsPage() {
  const items = [
    {
      title: "Basic",
      description: "CRM Task Magagment App",
      createdWith: [
        <TechIcon
          text="React"
          className="devicon-react-original colored"
          techFontSize={24}
        />,
        <TechIcon
          text="MongoDB"
          className="devicon-mongodb-plain colored"
          techFontSize={24}
        />,
        <TechIcon
          text="NodeJS"
          className="devicon-nodejs-plain-wordmark colored"
          techFontSize={24}
        />,
      ],
    },
    {},
    {},
    {},
    {},
    {},
  ];

  return (
    <Container maxWidth="lg" sx={{ marginTop: "20px" }}>
      <Typography variant="h1" fontSize="48px" gutterBottom>
        My Projects
      </Typography>

      <div className="projects-container">
        {items.map((item) => {
          return (
            <Box
              className="project-item"
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography variant="h2" fontSize="36px">
                {item?.title}
              </Typography>
              <Typography variant="h3" fontSize="24px">
                {item?.description}
              </Typography>
              <Box sx={{ display: "flex", gap: 3 }}>
                {item?.createdWith?.map((tech) => {
                  return tech;
                })}
              </Box>
            </Box>
          );
        })}
      </div>
    </Container>
  );
}

export default ProjectsPage;
