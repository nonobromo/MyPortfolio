import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

type ContactMethodProps = {
  title: string;
  icon: ReactNode;
  secondaryTitle: string;
  url?: string;
  urlText?: string;
};

function ContactMethod({
  icon,
  secondaryTitle,
  title,
  url,
  urlText,
}: ContactMethodProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        marginTop: 5,
      }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Typography
          variant="h3"
          component="h3"
          fontSize={{ xs: "20px", md: "36px" }}>
          {" "}
          {title}
        </Typography>
        {icon}
      </Box>

      <Box sx={{ display: url ? "flex" : "", gap: "5px" }}>
        <Typography
          sx={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            fontSize: "1rem",
          }}>
          {secondaryTitle}

          <Typography
            sx={{
              color: "#0a66c2",
              textDecoration: "none",
              fontSize: "1rem",
            }}
            component="a"
            href={url}>
            {urlText}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

export default ContactMethod;
