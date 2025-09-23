import { Box, Grid, ListItem, Stack, Typography } from "@mui/material";

import { ReactNode } from "react";
import TechIcon from "./techicon";

type ProjectItemProps = {
  image?: string;
  title: string | undefined;
  description: string | undefined;
  alt: string;
  icons?: ReactNode[];
  projectUrl: string | undefined;
};

function ProjectItem({
  title,
  description,
  image,
  alt,
  icons,
  projectUrl,
}: ProjectItemProps) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        borderBottom: "1px solid #ccc",
        paddingBottom: "20px",
        overflow: "hidden",
        p: 2,
      }}
    >
      <Grid size={{ xs: 12, md: 8 }}>
        <Box
          component="img"
          src={image}
          sx={{
            width: { xs: "100%", md: "60%" },
            height: "400px",
            objectFit: "cover",
            objectPosition: { xs: "center", md: "top left" },
            borderRadius: 6,
          }}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Stack spacing={2}>
          <Typography variant="h3" component="h3">
            {title}
          </Typography>
          <Typography variant="h4" component="h4">
            {description}
          </Typography>
          <Box sx={{ display: "flex", gap: "20px" }}>
            {icons?.map((icon) => {
              return icon;
            })}
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default ProjectItem;
