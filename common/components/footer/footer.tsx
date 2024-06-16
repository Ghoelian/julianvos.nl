import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { DateTime } from "luxon";
import StyledNextLink from "@/common/components/styled-next-link";
import { FaCode } from "react-icons/fa6";
import { SiCodeberg, SiGithub } from "react-icons/si";
import Link from "next/link";

const Footer = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        alignItems: "center",
        textAlign: { xs: "center", sm: "initial" },
        gap: 2,
        p: 1,
      }}
      component="footer"
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography>Contact</Typography>
        <StyledNextLink href="mailto:post@julianvos.nl">
          post@julianvos.nl
        </StyledNextLink>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Tooltip title="Codeberg">
          <IconButton
            component={Link}
            href="https://codeberg.org/Ghoelian"
            sx={{ mx: 1 }}
          >
            <SiCodeberg />
          </IconButton>
        </Tooltip>

        <Tooltip title="Source code">
          <IconButton
            component={Link}
            href="https://codeberg.org/Ghoelian/julianvos.nl"
            sx={{ mx: 1 }}
          >
            <FaCode />
          </IconButton>
        </Tooltip>

        <Tooltip title="GitHub (inactive)">
          <IconButton
            component={Link}
            href="https://github.com/Ghoelian"
            sx={{ mx: 1 }}
          >
            <SiGithub />
          </IconButton>
        </Tooltip>
      </Box>

      <Box
        sx={{
          textAlign: {
            xs: "center",
            sm: "right",
          },
        }}
      >
        <Typography>© {DateTime.now().year}</Typography>
        <Typography>Julian Vos</Typography>
      </Box>
    </Paper>
  );
};

export default Footer;
