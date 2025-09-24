import { Box, Grid, Link, Stack, Typography } from "@mui/material";

import { ReactNode } from "react";

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
        overflow: "hidden",
        p: 2,
      }}
    >
      <Grid size={{ xs: 12, md: 8 }}>
        <Box
          component="img"
          src={image}
          alt={alt}
          sx={{
            width: { xs: "100%", md: "60%" },
            height: "400px",
            objectFit: "cover",
            objectPosition: { xs: "center", md: "top left" },
            borderRadius: 6,
          }}
        />
      </Grid>

      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Stack spacing={2}>
          <Typography
            variant="h3"
            component="h3"
            sx={{ textAlign: { xs: "center", md: "left" }, color: "#0672FF" }}
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            {description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {icons?.map((icon) => {
              return icon;
            })}
          </Box>
        </Stack>
        <Link
          underline="hover"
          href={projectUrl}
          fontSize="24px"
          justifyContent="flex-start"
          mt="auto"
        >
          View Live Project
        </Link>
      </Grid>
    </Grid>
  );
}

export default ProjectItem;
