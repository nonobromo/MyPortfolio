import { Box, Container } from "@mui/material";
import HeaderLink from "./common/headerLink";

import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import SiteLogo from "./common/siteLogo";
function Header() {
  const [open, setIsOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("#home");

  const siteLinks = [
    { text: "About", to: "#about" },
    { text: "Projects", to: "#projects" },
    { text: "Contact", to: "#contact" },
  ];

  function openMenu() {
    setIsOpen((perv) => !perv);
  }
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        height: "10vh",
      }}>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { md: "row" },
          alignItems: "center",
          boxShadow: "0px 4px 0.5rem -0.1rem black",
          backdropFilter: "blur(10px)",
        }}>
        <SiteLogo
          text="< Noam />"
          to="#home"
          fontSize="36px"
          setIsOpen={setIsOpen}
          setActiveLink={setActiveLink}
        />
        {open ? (
          <ClearIcon
            sx={{ color: "#FFF", display: { xs: "block", md: "none" } }}
            onClick={openMenu}
          />
        ) : (
          <MenuIcon
            onClick={openMenu}
            sx={{ color: "#FFF", display: { xs: "block", md: "none" } }}
          />
        )}

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          {siteLinks.map((link) => {
            return (
              <HeaderLink
                text={link.text}
                to={link.to}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
              />
            );
          })}
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            gap: 4,
            position: "absolute",
            right: open ? "0" : "-100%",
            top: "10vh",
            width: "100%",
            height: "100vh",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#121212",
            transition: "0.5s",
          }}>
          {siteLinks.map((link) => {
            return (
              <HeaderLink text={link.text} to={link.to} setIsOpen={setIsOpen} />
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
