import { Box, Typography } from "@mui/material";

type TechIconProps = {
  text: string;
  className: string;
  techFontSize?: string | number;
};

function TechIcon({ className, text, techFontSize }: TechIconProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        alignItems: "center",
      }}>
      <i
        className={`${className}`}
        style={{ fontSize: techFontSize ? techFontSize : "48px" }}></i>
      <Typography component="span">{text}</Typography>
    </Box>
  );
}

export default TechIcon;
