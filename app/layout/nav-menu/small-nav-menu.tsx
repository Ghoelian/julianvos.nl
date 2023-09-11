'use client';

import { Box, IconButton, ListItemIcon, Menu, MenuItem, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function SmallNavMenu({ pages }: { pages: IPage[] }) {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const router = useRouter();

    const handleNavOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleNavClose = () => {
        setAnchorElNav(null);
    };

    const handleNavClick = (path: string) => {
        router.replace(path);

        handleNavClose();
    };

    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="Open nav menu"
                    aria-controls="appbar-menu"
                    aria-haspopup="true"
                    onClick={handleNavOpen}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="appbar-menu"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left'
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left'
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleNavClose}
                    sx={{
                        display: { xs: 'block', md: 'none' }
                    }}
                >
                    {pages.map((page) => (
                        <MenuItem key={page.name} onClick={() => handleNavClick(page.path)}>
                            <ListItemIcon>{page.icon}</ListItemIcon>
                            <Typography textAlign="center">{page.name}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </>
    );
}
