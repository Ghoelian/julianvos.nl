import { AppBar, Container, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import FullSiteLogo from '@/app/layout/site-logo/full-site-logo';
import SmallNavMenu from '@/app/layout/nav-menu/small-nav-menu';
import SmallSiteLogo from '@/app/layout/site-logo/small-site-logo';
import FullNavMenu from '@/app/layout/nav-menu/full-nav-menu';
import { Apps, Email, Home, LinearScale, Person } from '@mui/icons-material';

const pages: IPage[] = [
    {
        name: 'Home',
        icon: <Home />,
        path: '/#home'
    },
    {
        name: 'About',
        icon: <Person />,
        path: '/#about'
    },
    {
        name: 'Portfolio',
        icon: <Apps />,
        path: '/#portfolio'
    },
    {
        name: 'Experience',
        icon: <LinearScale />,
        path: '/#experience'
    },
    {
        name: 'Contact',
        icon: <Email />,
        path: '/#contact'
    }
];

export default function MenuBar() {
    return (
        <AppBar position="fixed" color="primary">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <FullSiteLogo />
                    <SmallNavMenu pages={pages} />
                    <SmallSiteLogo />
                    <FullNavMenu pages={pages} />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
