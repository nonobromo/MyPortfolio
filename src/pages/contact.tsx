import { Container, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactMethod from "../components/common/contactMethod";
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
      <ContactMethod
        icon={<EmailIcon sx={{ fontSize: "36px", color: "#0672FF" }} />}
        title="Email Me"
        secondaryTitle="noamab22@gmail.com"
      />

      <ContactMethod
        title="Lets Connect"
        icon={<LinkedInIcon sx={{ fontSize: "36px", color: "#0672FF" }} />}
        secondaryTitle="Feel free to connect with me on"
        urlText="Linkedin"
        url="https://www.linkedin.com/in/noam-abramovich-316169276/"
      />

      <ContactMethod
        title="My Repositories"
        secondaryTitle="Check me out on"
        icon={<GitHubIcon sx={{ fontSize: "36px", color: "#0662FF" }} />}
        url="https://github.com/nonobromo"
        urlText="Github"
      />
    </Container>
  );
}

export default ContactForm;

//https://github.com/nonobromo
