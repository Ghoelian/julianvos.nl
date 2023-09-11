'use client';

import { Box, Button, IconButton } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function FullNavMenu({ pages }: { pages: IPage[] }) {
    const router = useRouter();

    const handleNavClick = (path: string) => {
        router.replace(path);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        key={page.name}
                        onClick={() => handleNavClick(page.path)}
                        sx={{
                            my: 2,
                            mx: 0.5,
                            color: 'white'
                        }}
                        startIcon={page.icon}
                    >
                        {page.name}
                    </Button>
                ))}
            </Box>
        </>
    );
}
