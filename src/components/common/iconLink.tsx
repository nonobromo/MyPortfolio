import { IconButton, Typography } from "@mui/material";

import { ReactNode } from "react";
type IconLinkProps = {
  to: string;
  icon: ReactNode;
  text: string;
};

const IconLink = ({ icon, to, text }: IconLinkProps) => {
  return (
    <IconButton
      component="a"
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Typography variant="button" fontSize={"24px"}>
        {text}
      </Typography>
      {icon}
    </IconButton>
  );
};

export default IconLink;
