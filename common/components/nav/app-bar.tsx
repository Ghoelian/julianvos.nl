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
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "inherit",
            }}
          >
            🦊
          </Typography>
          {/*Small display menu*/}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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

          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
            }}
          >
            🦊
          </Typography>

          {/*Menu items*/}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
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
