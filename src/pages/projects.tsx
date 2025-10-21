import { Container, Typography } from "@mui/material";
import TechIcon from "../components/common/techicon";
import Spendify from "../images/Spendify.png";
import Wordaday from "../images/Wordaday.png";
import Basic from "../images/Basic.png";
import ProjectItem from "../components/common/projectItem";
import { useEffect } from "react";
function ProjectsPage() {
  const items = [
    {
      title: "Spendify",
      description: "Personal Expense Tracker",
      image: Spendify,
      alt: "Spendify",
      projectUrl: "https://spendify-9azz.onrender.com/",

      icons: [
        <TechIcon
          className="devicon-react-original colored"
          text="React"
          flexDirection="column"
          techFontSize="36px"
          key="react"
        />,
        <TechIcon
          text="Typescript"
          flexDirection="column"
          techFontSize="36px"
          className="devicon-typescript-plain colored"
          key="typescript"
        />,
        <TechIcon
          text="MUI"
          flexDirection="column"
          techFontSize="36px"
          className="devicon-materialui-plain colored"
          key="mui"
        />,
      ],
    },
    {
      title: "Wordaday",
      description: "Wordle recreated from the frontend to the backend",
      image: Wordaday,
      alt: "Wordaday",
      projectUrl: "https://wordaday.onrender.com/",
      icons: [
        <TechIcon
          className="devicon-mongodb-plain colored"
          text="MongoDB"
          flexDirection="column"
          techFontSize="36px"
          key="mongodb"
        />,
        <TechIcon
          text="Express"
          flexDirection="column"
          techFontSize="36px"
          className="devicon-express-original colored"
          key="express"
        />,
        <TechIcon
          text="React"
          flexDirection="column"
          techFontSize="36px"
          className="devicon-react-original colored"
          key="react"
        />,
        <TechIcon
          text="NodeJS"
          flexDirection="column"
          techFontSize="36px"
          className="devicon-nodejs-plain-wordmark colored"
          key="nodejs"
        />,
      ],
    },
    {
      title: "Basic",
      description: "Emlpoyee task mangement",
      image: Basic,
      alt: "Basic",
      projectUrl: "https://basic-wzvv.onrender.com/",
      icons: [
        <TechIcon
          className="devicon-mongodb-plain colored"
          text="MongoDB"
          flexDirection="column"
          techFontSize="36px"
          key="mongodb"
        />,
        <TechIcon
          text="Express"
          flexDirection="column"
          techFontSize="36px"
          className="devicon-express-original colored"
          key="express"
        />,
        <TechIcon
          text="React"
          flexDirection="column"
          techFontSize="36px"
          className="devicon-react-original colored"
          key="react"
        />,
        <TechIcon
          text="NodeJS"
          flexDirection="column"
          techFontSize="36px"
          className="devicon-nodejs-plain-wordmark colored"
          key="nodejs"
        />,
      ],
    },
  ];

  useEffect(() => {
    let itemElements = [];
    const items = document.querySelectorAll(".css-qfbm96-MuiGrid-root");

    itemElements = [...items].filter((el): el is HTMLElement => el !== null);

    const obvserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("fade-in", entry.isIntersecting);
        });
      },
      { threshold: 0.6 }
    );

    itemElements.forEach((item) => obvserver.observe(item));

    return () => {
      itemElements.forEach((item) => obvserver.unobserve(item));
      obvserver.disconnect();
    };
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}>
      <Typography
        id="projects"
        variant="h2"
        sx={{ fontSize: "48px", marginTop: 20, textAlign: "center" }}>
        My Projects
      </Typography>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: 5,
        }}>
        {items.map((item) => {
          return (
            <ProjectItem
              title={item.title}
              icons={item.icons}
              alt={item.alt}
              description={item.description}
              image={item.image}
              projectUrl={item.projectUrl}
              key={item.title}
            />
          );
        })}
      </Container>
    </Container>
  );
}

export default ProjectsPage;
