import Link from 'next/link';
import { DateTime } from 'luxon';
import styles from '@/app/styles.module.css';

const age = DateTime.local(2000, 12, 25).diffNow('years');

export default function AboutMe() {
    return (
        <>
            <p>I&apos;m Julian, a {Math.floor(Math.abs(age.years))} year old software developer from Drenthe, the Netherlands.</p>
            <p>
                I&apos;m currently working at{' '}
                <Link className={styles.link} href="https://paytree.nl">
                    Paytree Payment Solutions
                </Link>
                .<br />
                Here, I&apos;m building a full-stack payment platform, including:
            </p>
            <p>
                A customer dashboard, built using{' '}
                <Link className={styles.link} href="https://nextjs.org">
                    Next.js
                </Link>{' '}
                and{' '}
                <Link className={styles.link} href="https://mui.com">
                    Material UI
                </Link>
                .
                <br />A RESTful API, built using{' '}
                <Link className={styles.link} href="https://ktor.io">
                    Ktor
                </Link>
                ,{' '}
                <Link className={styles.link} href="https://insert-koin.io">
                    Koin
                </Link>
                ,{' '}
                <Link className={styles.link} href="https://github.com/JetBrains/Exposed">
                    Exposed
                </Link>
                , and backed by a{' '}
                <Link className={styles.link} href="https://www.postgresql.org/">
                    PostgreSQL
                </Link>{' '}
                database.
                <br />
                And a mobile POS app, built using{' '}
                <Link className={styles.link} href="https://flutter.dev">
                    Flutter
                </Link>
                .<br />
            </p>
            <p>All of this is deployed to and built using Google Cloud.</p>
            <p>
                I picked up a love for programming in 2013, from watching{' '}
                <Link className={styles.link} href="https://www.youtube.com/user/shiffman">
                    The Coding Train
                </Link>
                . I learned the basics of{' '}
                <Link className={styles.link} href="https://processing.org">
                    Processing
                </Link>
                , and started following an official programming education in 2017.
            </p>
            <p>
                From October 2018 until March 2019, I was participating in an international internship in the UK, where I have been working
                with Node.js on the back-end. One of the most difficult and useful skills I&apos;ve had to learn was using Async.js, and
                subsequently learning to use callbacks, instead of the default async/await.
            </p>
            <p>
                One of my favourite pastimes is playing the guitar. I started taking lessons at the age of 14, but my skills with the
                electric guitar are mostly self-taught. I try to practice at least once a day, and am always looking for the next riff to
                master.
            </p>
            <p>
                For as long as I can remember, video games have been a part of my life. My all-time favourite game is The Legend of Zelda:
                Ocarina of Time, closely followed by{' '}
                <Link className={styles.link} href="https://clonehero.net">
                    Clone Hero
                </Link>{' '}
                and Breath of the Wild.
            </p>
            <p>I&apos;m familiar with:</p>
            <ul>
                <li>React.js</li>
                <li>Kotlin</li>
                <li>Flutter/Dart</li>
                <li>Google Cloud</li>
            </ul>
        </>
    );
}
