import { Project } from "@/common/types/project";
import { Box, Card, CardMedia, Chip, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ProjectTile = ({ project }: { project: Project }) => {
  return (
    <Card
      sx={{
        display: "flex",
        m: 2,
      }}
    >
      <CardMedia component="span">
        {project.coverImage && (
          <Image
            src={project.coverImage}
            alt={project.title}
            width={256}
            height={256}
            priority
          />
        )}

        {project.coverComponent && <>{project.coverComponent}</>}
      </CardMedia>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          ml: 2,
          mt: 1,
        }}
      >
        <Typography component="div" variant="h5">
          {project.title}

          {project.tags.map((tag, idx) => (
            <Chip
              key={`project-${project.title}-tags-${idx}`}
              sx={{ mx: 1 }}
              label={tag}
              size="small"
              variant="outlined"
            />
          ))}
        </Typography>
        <Typography
          sx={{ mt: 1 }}
          variant="subtitle1"
          color="text.secondary"
          component="div"
        >
          {project.description}
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          textAlign: "end",
          mr: 2,
          mb: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ flexGrow: 1 }} />
        <Typography component={Link} href={project.path} noWrap>
          Learn more &gt;
        </Typography>
      </Box>
    </Card>
  );
};

export default ProjectTile;
