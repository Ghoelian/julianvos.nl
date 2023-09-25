import { Call, Email, LocationOn } from '@mui/icons-material';
import { Box } from '@mui/material';
import Link from 'next/link';
import styles from '@/app/styles.module.css';
import { useEffect, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
    const [contactInfo, setContactInfo] = useState<{
        phone: string;
        location: string;
        email: string;
    }>();
    const [recaptchaValidated, setRecaptchaValidated] = useState(false);

    const onChange = (val: string | null) => {
        fetch(`/api/contactInfo?recaptcha-token=${val}`).then(async (result) => {
            if (result.ok) {
                setContactInfo(await result.json());
                setRecaptchaValidated(true);
            }
        });
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            {recaptchaValidated ? (
                <>
                    {contactInfo && (
                        <>
                            <p>
                                <LocationOn sx={{ verticalAlign: 'middle' }} /> {contactInfo.location}
                            </p>
                            <p>
                                <Call sx={{ verticalAlign: 'middle' }} />{' '}
                                <Link className={styles.link} href="tel:+31-6-48744406">
                                    {contactInfo.phone}
                                </Link>
                            </p>
                            <p>
                                <Email sx={{ verticalAlign: 'middle' }} />{' '}
                                <Link className={styles.link} href="mailto:post@julianvos.nl">
                                    {contactInfo.email}
                                </Link>
                            </p>
                        </>
                    )}
                </>
            ) : (
                <ReCAPTCHA
                    theme="dark"
                    style={{
                        alignSelf: 'center'
                    }}
                    sitekey="6LeowlIoAAAAAFf6-YZ-Ldi-Tc528e448LnwxgFU"
                    onChange={onChange}
                />
            )}
        </Box>
    );
}
