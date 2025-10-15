import { Container, Typography } from "@mui/material";
import TechIcon from "../components/common/techicon";
import Spendify from "../images/Spendify.png";
import Wordaday from "../images/Wordaday.png";
import ProjectItem from "../components/common/projectItem";
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
        />,
        <TechIcon
          text="Typescript"
          flexDirection="column"
          techFontSize="36px"
          className="devicon-typescript-plain colored"
        />,
        <TechIcon
          text="MUI"
          flexDirection="column"
          techFontSize="36px"
          className="devicon-materialui-plain colored"
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
        />,
        <TechIcon
          text="Express"
          flexDirection="column"
          techFontSize="36px"
          className="devicon-express-original colored"
        />,
        <TechIcon
          text="React"
          flexDirection="column"
          techFontSize="36px"
          className="devicon-react-original colored"
        />,
        <TechIcon
          text="NodeJS"
          flexDirection="column"
          techFontSize="36px"
          className="devicon-nodejs-plain-wordmark colored"
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
      id="projects"
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "48px", marginTop: 20, textAlign: "center" }}
      >
        My Projects
      </Typography>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: 5,
        }}
      >
        {items.map((item) => {
          return (
            <ProjectItem
              title={item.title}
              icons={item.icons}
              alt={item.alt}
              description={item.description}
              image={item.image}
              projectUrl={item.projectUrl}
            />
          );
        })}
      </Container>
    </Container>
  );
}

export default ProjectsPage;
