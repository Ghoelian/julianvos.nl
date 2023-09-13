'use client';

import { Box, Typography } from '@mui/material';
import AboutMe from '@/app/components/about-me';
import Portfolio from '@/app/components/portfolio';
import Experience from '@/app/components/experience';
import Contact from '@/app/components/contact';
import useSections from '@/app/hooks/useSections';
import { Sections } from "@/app/types/sections";

export default function Home() {
    const sectionMargin = 8;

    const { aboutMeRef, portfolioRef, experienceRef, contactRef } = useSections() as Sections;

    return (
        <>
            <Box ref={aboutMeRef} id="about-me-section" sx={{ mb: sectionMargin }}>
                <Typography variant="h2" sx={{ textAlign: 'center' }}>
                    About me
                </Typography>
                <AboutMe />
            </Box>
            <Box ref={portfolioRef} id="portfolio-section" sx={{ my: sectionMargin }}>
                <Typography variant="h2" sx={{ textAlign: 'center' }}>
                    Portfolio
                </Typography>
                <Portfolio />
            </Box>
            <Box ref={experienceRef} id="experience-section" sx={{ my: sectionMargin }}>
                <Typography variant="h2" sx={{ textAlign: 'center' }}>
                    Experience
                </Typography>
                <Experience />
            </Box>
            <Box ref={contactRef} id="contact-section" sx={{ my: sectionMargin }}>
                <Typography variant="h2" sx={{ textAlign: 'center' }}>
                    Contact
                </Typography>
                <Contact />
            </Box>
        </>
    );
}
