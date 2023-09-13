'use client';

import { Box, Button } from '@mui/material';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function FullNavMenu({ pages }: { pages: IPage[] }) {
    const router = useRouter();
    const pathname = usePathname();

    const handleNavClick = (section: string) => {
        if (pathname === '/') {
            router.replace(`/?s=${section.toLowerCase()}`, {
                scroll: false
            });
        } else {
            router.push(`/?s=${section.toLowerCase()}`);
        }
    };

    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button
                        key={page.name}
                        onClick={() => handleNavClick(page.name)}
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
