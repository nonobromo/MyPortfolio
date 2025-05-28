import { Box, Typography } from "@mui/material";
function HeaderIcon() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}>
      <Typography sx={{ color: "#FFF", fontWeight: 600, fontSize: "40px" }}>
        Noam
      </Typography>
    </Box>
  );
}

export default HeaderIcon;
