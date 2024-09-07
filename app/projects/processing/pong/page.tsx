import { Metadata } from "next";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import StyledNextLink from "@/common/components/styled-next-link";

export const metadata: Metadata = {
  title: "~/projects/pong",
};

const Pong = () => {
  return (
    <Card>
      <CardHeader title="Pong in p5.js" />

      <CardContent>
        <Typography>
          I originally built this in Processing (
          <StyledNextLink
            href="https://codeberg.org/Ghoelian/processing-projects/src/branch/master/Pong"
            target="_blank"
            rel="noopener noreferrer"
          >
            source
          </StyledNextLink>
          ).
        </Typography>

        <Typography>
          I converted it to run in p5.js so I could showcase it here, without
          having to download anything. I&apos;m not sure why there&apos;s a
          white bar on the left tbh.
        </Typography>

        <br />

        <Typography>
          If you want to run the original Processing version, you&apos;ll have
          to install the{" "}
          <StyledNextLink href="https://processing.org/download">
            Processing editor
          </StyledNextLink>{" "}
          first, and then open Pong.pde as a project.
        </Typography>

        <br />

        <Typography>
          Controls: W and S control the left paddle, up and down arrows control
          the right paddle.
        </Typography>

        <br />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <iframe
            src="https://editor.p5js.org/Ghoelian/full/z797FL6nb"
            style={{ width: 750, height: 450 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default Pong;
