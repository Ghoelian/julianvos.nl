import { Call, Email, LocationOn } from '@mui/icons-material';
import { Box } from '@mui/material';
import Link from "next/link";
import styles from '@/app/styles.module.css';

export default function Contact() {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <p>
                <LocationOn sx={{ verticalAlign: 'middle' }} /> Emmen, Drenthe, NL
            </p>
            <p>
                <Call sx={{ verticalAlign: 'middle' }} /> <Link className={styles.link} href="tel:+31-6-48744406">+31 6 48744406</Link>
            </p>
            <p>
                <Email sx={{ verticalAlign: 'middle' }} /> <Link className={styles.link} href="mailto:post@julianvos.nl">post@julianvos.nl</Link>
            </p>
        </Box>
    );
}
