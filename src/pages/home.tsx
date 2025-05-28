import { Box, Container, Typography } from "@mui/material";
import "swiper/swiper-bundle.css";
import IconContainer from "../components/iconsContainer";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "48px",
      }}>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}>
        <Typography
          fontSize="60px"
          textAlign="center"
          fontWeight="600"
          variant="h1">
          Hi, I'm <span style={{ color: "#0672FF" }}>Noam</span> 👋
        </Typography>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{ fontSize: "48px", fontWeight: 600 }}>
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
