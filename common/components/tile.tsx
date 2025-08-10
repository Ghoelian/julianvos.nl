"use client";

import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import StyledNextLink from "@/common/components/styled-next-link";
import { Tool } from "@/common/types/tool";
import { Project } from "@/common/types/project";

const Tile = ({ item }: { item: Project & Tool }) => {
  return (
    <Card
      sx={{
        height: 256,
        mb: 2,
        "&:last-child": {
          mb: 0,
        },
      }}
    >
      <CardActionArea
        sx={{
          display: "flex",
          alignItems: "stretch",
          height: "100%",
        }}
        component={"a"}
        href={item.path}
      >
        <CardMedia component="span">
          {item.coverImage && (
            <Image
              src={item.coverImage}
              alt={item.title}
              style={{
                objectFit: "contain",
              }}
              width={256}
              height={256}
              priority
            />
          )}

          {item.coverComponent && <>{item.coverComponent}</>}
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
            {item.title}
            <br />
            {item.tags.map((tag, idx) => (
              <Chip
                key={`item-${item.title}-tags-${idx}`}
                sx={{ mr: 2 }}
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
            {item.description}
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
          <StyledNextLink href={item.path} noWrap>
            Learn more &gt;
          </StyledNextLink>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default Tile;
