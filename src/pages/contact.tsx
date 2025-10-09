import { Box, Container, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
function ContactForm() {
  return (
    <Container
      id="contact"
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        gap: "20px",
      }}>
      <Typography variant="h2" component="h2" textAlign="center" marginTop={14}>
        Feel Free To Contact Me!
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          marginTop: 5,
        }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography variant="h3" component="h3" fontSize="36px">
            {" "}
            Email me
          </Typography>
          <EmailIcon sx={{ fontSize: "36px", color: "#0672FF" }} />
        </Box>

        <Typography>noamab22@gmail.com</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Typography variant="h3" component="h3" fontSize="36px">
            Lets Connect
          </Typography>
          <LinkedInIcon sx={{ fontSize: "36px", color: "#0a66c2" }} />
        </Box>
        <Box sx={{ display: "flex", gap: "5px" }}>
          <Typography>Feel free to connect with me on my</Typography>
          <Typography
            sx={{ color: "#0a66c2", textDecoration: "none" }}
            component="a"
            href="https://www.linkedin.com/in/noam-abramovich-316169276/">
            Linkedin
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default ContactForm;

//https://github.com/nonobromo
