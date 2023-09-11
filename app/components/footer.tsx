import { Copyright } from '@mui/icons-material';
import { DateTime } from 'luxon';
import { Box } from '@mui/material';
import Link from 'next/link';
import styles from '@/app/styles.module.css';

export default function Footer() {
    return (
        <Box sx={{ textAlign: 'center', mt: 10 }}>
            <Copyright fontSize="small" sx={{ verticalAlign: 'middle' }} /> Copyright {DateTime.now().year} Julian Vos
            <br />
            <Link className={styles.link} href="/privacy-policy">Privacy policy</Link> | <Link className={styles.link} href="/terms-of-service">Terms of service</Link>
        </Box>
    );
}
