"use client";

import {
  AppBar as MuiAppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState, MouseEvent } from "react";
import { MdMenu } from "react-icons/md";
import { navPages } from "@/common/pages";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Page } from "@/common/types/page";

const AppBar = () => {
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNav = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNav = () => {
    setAnchorElNav(null);
  };

  return (
    <MuiAppBar>
      <Container maxWidth="xl" sx={{ p: 0 }}>
        <Toolbar disableGutters sx={{ width: "100vw" }}>
          {/*Large display logo*/}
          <Typography
            variant="h6"
            noWrap
            sx={{
              display: { xs: "none", md: "flex" },
              color: "inherit",
            }}
          >
            🦊
          </Typography>
          {/*Small display menu*/}
          <Box sx={{ flexGrow: 2, display: { xs: "flex", md: "none" }, ml: 1 }}>
            <IconButton
              size="large"
              aria-label="Open menu"
              aria-controls="appbar-menu"
              aria-haspopup="true"
              onClick={handleOpenNav}
              color="inherit"
            >
              <MdMenu />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNav}
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              {navPages.map((page: Page, idx: number) => (
                <MenuItem
                  key={`nav-menu-${idx}`}
                  onClick={() => setAnchorElNav(null)}
                  href={page.path}
                  component={Link}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/*Small display logo*/}
          <Typography
            variant="h5"
            noWrap
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 3,
              fontWeight: 700,
              color: "inherit",
            }}
          >
            🦊
          </Typography>

          {/*Large display items*/}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 4 }}>
            {navPages.map((page: Page, idx: number) => (
              <Button
                key={`nav-appbar-${idx}`}
                sx={{ m: 2, display: "block", textTransform: "lowercase" }}
                href={page.path}
                component={Link}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
};

export default AppBar;
