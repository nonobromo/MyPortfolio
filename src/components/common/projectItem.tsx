import { Box, Grid, Paper, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

type ProjectItemProps = {
  image?: string;
  title: string | undefined;
  description: string | undefined;
  alt: string;
  icons?: string[];
};

function ProjectItem({ title, description, image, alt }: ProjectItemProps) {
  return (
    <Grid size={{ xs: 12, md: 6 }} sx={{ paddingBottom: "100px" }}>
      <Paper
        elevation={4}
        sx={{
          backgroundColor: "#1e2937",
          height: "100%",
          maxHeight: "800px",
          borderRadius: 3,
          overflow: "hidden",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.02)",
          },
          paddingBottom: "40px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: "center",
          }}
        >
          {image && (
            <Box
              component="img"
              src={image}
              alt={alt || "Project image"}
              loading="lazy"
              sx={{
                width: "100%",
                height: "300px",
                objectFit: "fit",
                display: "block",
              }}
            />
          )}
          <Typography component="h2" variant="h2" color="">
            {title}
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            fontSize={{ xs: "24px", md: "36px" }}
          >
            {description}{" "}
          </Typography>
          <Box
            sx={{
              display: " flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              variant="h4"
              component="h4"
              fontSize="24px"
              color="#0672FF"
            >
              View Live Project
            </Typography>
            <OpenInNewIcon sx={{ color: "#0672ff" }} />
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
}

export default ProjectItem;
