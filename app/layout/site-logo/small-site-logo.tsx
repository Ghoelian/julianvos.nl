import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import siteLogo from '@/public/assets/icons/site-logo.webp';

export default function SmallSiteLogo() {
    return (
        <>
            <Box
                sx={{
                    display: {
                        xs: 'flex',
                        md: 'none'
                    },
                    mr: 1
                }}
            >
                <Image src={siteLogo} width={44} height={44} alt="juilanvos.nl logo" />
            </Box>
            <Typography
                variant="h5"
                noWrap
                sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
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
