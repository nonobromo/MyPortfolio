import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HeaderLink from "./common/headerLink";
import HeaderIcon from "./headerIcon";
import DescriptionIcon from "@mui/icons-material/Description";
import IconLink from "../components/common/iconLink";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
function Header() {
  const [open, setIsOpen] = useState<boolean>(false);
  const siteLinks = [
    { text: "About", to: "/about" },
    { text: "Projects", to: "/projects" },
  ];

  function openMenu() {
    setIsOpen((perv) => !perv);
  }
  return (
    <Box
      sx={{
        width: "100vw",
        height: "15vh",
        display: "flex",
        alignItems: "center",
      }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "row-reverse", md: "row" },
          alignItems: "center",
        }}>
        <HeaderIcon />
        <MenuIcon
          sx={{ color: "#FFF", display: { xs: "block", md: "none" } }}
          onClick={openMenu}
        />

        <Box
          sx={{
            position: "absolute",
            top: "15vh",
            left: open ? "0" : "-100%",
            width: "100%",
            backgroundColor: "#121212",
            color: "#FFF",
            display: { xs: "flex", md: "none" },
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            py: 2,
            zIndex: 10,
            transition: "0.5s",
          }}>
          <Link
            to="/"
            onClick={openMenu}
            style={{
              textDecoration: "none",
              color: "#FFF",
              fontSize: "20px",
            }}>
            Home
          </Link>
          {siteLinks.map((link) => (
            <HeaderLink key={link.text} text={link.text} to={link.to} />
          ))}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DescriptionIcon sx={{ fontSize: "24px", color: "#FFF" }} />
            <Typography fontSize="20px" color="#0672FF">
              Resume
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconLink
              to="https://github.com/nonobromo"
              icon={<GitHubIcon sx={{ fontSize: "24px", color: "#fff" }} />}
            />
            <IconLink
              to="https://www.linkedin.com/in/noam-abramovich-316169276/"
              icon={<LinkedInIcon sx={{ fontSize: "24px", color: "#fff" }} />}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 4,
          }}>
          <Box
            sx={{
              display: "flex",
              gap: 4,
            }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#FFF",
                fontWeight: 600,
                fontSize: "28px",
              }}>
              Home
            </Link>
            {siteLinks.map((link) => {
              return <HeaderLink text={link.text} to={link.to} />;
            })}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <DescriptionIcon sx={{ fontSize: "28px", color: "#FFF" }} />
            <Typography fontSize="28px" color="#0672FF">
              Resume
            </Typography>
          </Box>

          <Box>
            <IconLink
              to="https://github.com/nonobromo"
              icon={<GitHubIcon sx={{ fontSize: "28px", color: "#fff" }} />}
            />
            <IconLink
              to="https://www.linkedin.com/in/noam-abramovich-316169276/"
              icon={<LinkedInIcon sx={{ fontSize: "28px", color: "#fff" }} />}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
