import { Box, Typography } from "@mui/material";

type TechIconProps = {
  text:
    | "HTML"
    | "CSS"
    | "Javascript"
    | "Typescript"
    | "React"
    | "MongoDB"
    | "NodeJS"
    | "Express"
    | "MUI";
  className:
    | "devicon-html5-plain colored"
    | "devicon-css3-plain colored"
    | "devicon-javascript-plain colored"
    | "devicon-typescript-plain colored"
    | "devicon-react-original colored"
    | "devicon-mongodb-plain colored"
    | "devicon-nodejs-plain-wordmark colored"
    | "devicon-materialui-plain colored"
    | "devicon-express-original colored";
  techFontSize?: string | number;
  flexDirection?: "column" | "row";
};

function TechIcon({
  className,
  text,
  techFontSize,
  flexDirection,
}: TechIconProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: flexDirection,
        gap: 1,
        alignItems: "center",
      }}
    >
      <i
        className={`${className}`}
        style={{ fontSize: techFontSize ? techFontSize : "48px" }}
      ></i>
      <Typography component="span">{text}</Typography>
    </Box>
  );
}

export default TechIcon;
