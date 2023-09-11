import { Code, Copyright, GitHub, Source } from '@mui/icons-material';
import { DateTime } from 'luxon';
import { Box, IconButton, Tooltip } from '@mui/material';
import Link from 'next/link';
import styles from '@/app/styles.module.css';
import Grid2 from '@mui/material/Unstable_Grid2';

export default function Footer() {
    return (
        <Grid2 container spacing={2} sx={{ mt: 10 }}>
            <Grid2 xs={4} />
            <Grid2 xs={4}>
                <Box sx={{ textAlign: 'center' }}>
                    <Copyright fontSize="small" sx={{ verticalAlign: 'middle' }} /> Copyright {DateTime.now().year} Julian Vos
                    <br />
                    <Link className={styles.link} href="/privacy-policy">
                        Privacy policy
                    </Link>{' '}
                    |{' '}
                    <Link className={styles.link} href="/terms-of-service">
                        Terms of service
                    </Link>
                </Box>
            </Grid2>
            <Grid2 xs={4}>
                <Box sx={{ textAlign: 'end' }}>
                    <Tooltip title="My GitHub">
                        <IconButton href="https://github.com/Ghoelian" target="_BLANK" rel="noopener noreferrer">
                            <GitHub />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="This website's source">
                        <IconButton href="https://github.com/Ghoelian/julianvos.nl-next" target="_BLANK" rel="noopener noreferrer">
                            <Code />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Grid2>
        </Grid2>
    );
}
