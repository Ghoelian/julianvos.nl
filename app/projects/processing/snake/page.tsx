import { Metadata } from "next";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import StyledNextLink from "@/common/components/styled-next-link";

export const metadata: Metadata = {
  title: "/home/julianv/projects/snake",
};

const Snake = () => {
  return (
    <Card>
      <CardHeader title="Snake in p5.js" />

      <CardContent>
        <Typography>
          I originally built this in Processing (
          <StyledNextLink
            href="https://codeberg.org/Ghoelian/processing-projects/src/branch/master/Snake"
            target="_blank"
            rel="noopener noreferrer"
          >
            source
          </StyledNextLink>
          ).
        </Typography>

        <Typography>
          I converted it to run in p5.js so I could showcase it here, without
          having to download anything.
        </Typography>

        <br />

        <Typography>
          If you want to run the original Processing version, you&apos;ll have
          to install the{" "}
          <StyledNextLink href="https://processing.org/download">
            Processing editor
          </StyledNextLink>{" "}
          first, and then open Snake.pde as a project.
        </Typography>

        <br />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <iframe
            src="https://editor.p5js.org/Ghoelian/full/Sm3doe56d"
            style={{ width: 605, height: 650 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Snake;
