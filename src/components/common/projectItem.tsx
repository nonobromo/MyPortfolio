import { Box, Grid, Link, Stack, Typography } from "@mui/material";

import { ReactNode, useEffect, useRef, useState } from "react";

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
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // observer.unobserve(entry.target);
      }
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Grid
      ref={ref}
      className={isVisible ? "fade-in" : ""}
      container
      spacing={2}
      sx={{
        borderBottom: "1px solid #ccc",
        p: 2,
      }}>
      <Grid
        size={{ xs: 12, md: 8 }}
        sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "500px", height: "auto" }}>
          <Box
            component="img"
            src={image}
            alt={alt}
            sx={{
              maxInlineSize: "100%",
              display: "block",
            }}
          />
        </Box>
      </Grid>

      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Stack spacing={2}>
          <Typography
            variant="h3"
            component="h3"
            sx={{ textAlign: { xs: "center", md: "left" }, color: "#0672FF" }}>
            {title}
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            sx={{
              textAlign: { xs: "center", md: "left" },
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}>
            {description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              justifyContent: { xs: "center", md: "flex-start" },
            }}>
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
          alignSelf={{ xs: "center", md: "flex-start" }}
          mt="auto">
          View Live Project
        </Link>
      </Grid>
    </Grid>
  );
}

export default ProjectItem;
