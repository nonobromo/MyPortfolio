import { Box, Container, Typography } from "@mui/material";
import "swiper/swiper-bundle.css";
import IconContainer from "../components/iconsContainer";

function Home() {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          fontSize={{ xs: "36px", md: "48px" }}
          textAlign="center"
          fontWeight="600"
          variant="h1"
          component="h1"
          marginTop="48px"
        >
          Hi, I'm <span style={{ color: "#0672FF" }}>Noam</span> 👋
        </Typography>
        <Typography
          component="h2"
          variant="h2"
          textAlign="center"
          sx={{ fontSize: "48px", fontWeight: 600 }}
        >
          A full stack web developer
          <br />
          who enjoys building web applications
        </Typography>
        <IconContainer />
      </Container>
    </Box>
  );
}

export default Home;
