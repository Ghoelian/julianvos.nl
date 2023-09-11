import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import siteLogo from '@/public/assets/icons/site-logo.webp';
import React from 'react';

export default function FullSiteLogo() {
    return (
        <>
            <Box
                sx={{
                    display: {
                        xs: 'none',
                        md: 'flex'
                    }
                }}
            >
                <Image src={siteLogo} width={44} height={44} alt="juilanvos.nl logo" />
            </Box>
            <Typography
                variant="h6"
                noWrap
                sx={{
                    mr: 3,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none'
                }}
            >
                JULIANVOS.NL
            </Typography>
        </>
    );
}
