'use client';

import { Box, IconButton, ListItemIcon, Menu, MenuItem, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import React from 'react';
import useSections from '@/app/hooks/useSections';
import { Sections } from '@/app/types/sections';

export default function SmallNavMenu({ pages }: { pages: IPage[] }) {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const { aboutMeRef, portfolioRef, experienceRef, contactRef } = useSections() as Sections;

    const handleNavOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleNavClose = () => {
        setAnchorElNav(null);
    };

    const handleNavClick = (section: string) => {
        switch (section.toLowerCase()) {
            case 'about':
                scroll(aboutMeRef);
                break;
            case 'portfolio':
                scroll(portfolioRef);
                break;
            case 'experience':
                scroll(experienceRef);
                break;
            case 'contact':
                scroll(contactRef);
                break;
        }

        handleNavClose();
    };

    const scroll = (ref: React.MutableRefObject<HTMLElement | undefined>) => {
        const offset = 70;
        const elementPos = ref.current?.getBoundingClientRect().top;

        if (elementPos === undefined) return;

        const offsetPos = elementPos + window.scrollY - offset;

        window.scrollTo({
            top: offsetPos,
            behavior: 'smooth'
        });
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
                        <MenuItem key={page.name} onClick={() => handleNavClick(page.name)}>
                            <ListItemIcon>{page.icon}</ListItemIcon>
                            <Typography textAlign="center">{page.name}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </>
    );
}
