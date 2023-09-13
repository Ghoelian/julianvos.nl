'use client';

import { Box, Button } from '@mui/material';
import React from 'react';
import useSections from '@/app/hooks/useSections';
import { Sections } from '@/app/types/sections';

export default function FullNavMenu({ pages }: { pages: IPage[] }) {
    const { aboutMeRef, portfolioRef, experienceRef, contactRef } = useSections() as Sections;

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
