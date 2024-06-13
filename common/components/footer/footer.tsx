import { Box, Paper, Typography } from "@mui/material";
import { DateTime } from "luxon";
import StyledNextLink from "@/common/components/styled-next-link";

const Footer = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 1,
      }}
      component="footer"
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography>© {DateTime.now().year} Julian Vos</Typography>
      </Box>

      <Box>
        <Typography>Contact</Typography>
        <StyledNextLink href="mailto:post@julianvos.nl">
          post@julianvos.nl
        </StyledNextLink>
      </Box>
    </Paper>
  );
};

export default Footer;
