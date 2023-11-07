import type { Metadata } from 'next';
import React from 'react';
import ThemeRegistry from '@/app/ThemeRegistry';
import MenuBar from '@/app/layout/menu-bar';
import { Box, Toolbar } from '@mui/material';
import Footer from '@/app/components/footer';
import { SectionProvider } from '@/app/hooks/useSections';

export const metadata: Metadata = {
    title: 'julianvos.nl',
    description: 'julianvos.nl'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            style={{
                position: 'relative',
                minHeight: '100%'
            }}
            lang="en"
        >
            <head>
                <meta charSet="utf-8" />

                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png?v=1694452827" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png?v=1694452827" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png?v=1694452827" />
                <link rel="manifest" href="/favicon/site.webmanifest?v=1694452827" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg?v=1694452827" color="#da532c" />
                <link rel="shortcut icon" href="/favicon/favicon.ico?v=1694452827" />
                <meta name="apple-mobile-web-app-title" content="julianvos.nl" />
                <meta name="application-name" content="julianvos.nl" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="msapplication-config" content="/favicon/browserconfig.xml?v=1694452827" />
                <meta name="theme-color" content="#da532c" />
                <script type="text/javascript" src="/__ENV.js" />

                <title>julianvos.nl</title>
            </head>
            <body
                style={{
                    margin: '0 0 155px',
                    padding: '25px'
                }}
            >
                <ThemeRegistry options={{ key: 'mui' }}>
                    <Box sx={{ display: 'flex', height: '100%' }}>
                        <SectionProvider>
                            <MenuBar />

                            <Box component="main" sx={{ flexGrow: 1, p: 2 }}>
                                <Toolbar />
                                <main
                                    style={{
                                        maxWidth: 900,
                                        alignItems: 'center',
                                        margin: '0 auto'
                                    }}
                                >
                                    {children}
                                    <Footer />
                                </main>
                            </Box>
                        </SectionProvider>
                    </Box>
                </ThemeRegistry>
            </body>
        </html>
    );
}
