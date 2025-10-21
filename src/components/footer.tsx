import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        borderTop: "1px solid #ccc",
        paddingTop: "5px",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "5px",
      }}>
      <Typography>Noam Abramovich © All Rights Reserved</Typography>
      <Typography>Created With Vite + React</Typography>
    </Box>
  );
}

export default Footer;
