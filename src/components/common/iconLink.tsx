import { IconButton } from "@mui/material";

import { ReactNode } from "react";
type IconLinkProps = {
  to: string;
  icon: ReactNode;
};

const IconLink = ({ icon, to }: IconLinkProps) => {
  return (
    <IconButton
      component="a"
      href={to}
      target="_blank"
      rel="noopener noreferrer">
      {icon}
    </IconButton>
  );
};

export default IconLink;
