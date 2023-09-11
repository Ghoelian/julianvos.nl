import { Box, Typography } from '@mui/material';
import AboutMe from '@/app/components/about-me';
import Portfolio from '@/app/components/portfolio';
import Experience from '@/app/components/experience';
import Contact from '@/app/components/contact';
import Footer from '@/app/components/footer';

export default function Home() {
    return (
        <>
            <Box sx={{ m: 4 }}>
                <Typography variant="h2" sx={{ textAlign: 'center' }}>
                    About me
                </Typography>
                <AboutMe />
            </Box>
            <Box sx={{ m: 4 }}>
                <Typography variant="h2" sx={{ textAlign: 'center' }}>
                    Portfolio
                </Typography>
                <Portfolio />
            </Box>
            <Box sx={{ m: 4 }}>
                <Typography variant="h2" sx={{ textAlign: 'center' }}>
                    Experience
                </Typography>
                <Experience />
            </Box>
            <Box sx={{ m: 4 }}>
                <Typography variant="h2" sx={{ textAlign: 'center' }}>
                    Contact
                </Typography>
                <Contact />
            </Box>
        </>
    );
}
