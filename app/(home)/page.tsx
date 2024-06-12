import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Link,
  Typography,
} from "@mui/material";
import { DateTime } from "luxon";
import styles from "@/app/styles.module.css";

// lmao this is so dumb
const age = DateTime.local(2000, 12, 25).diffNow("years");

export default function Home() {
  return (
    <>
      <Typography>
        I&apos;m rebuilding my website in a more up-to-date framework than plain
        React, and decided to redesign it as well.
      </Typography>
      <br />
      <Typography>
        I&apos;m not quite done yet, but for now, here&apos;s the unfinished
        version.
      </Typography>

      <br />

      <Box
        sx={{
          display: "grid",
          gap: 2,
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="body1">
              I&apos;m Julian, a {Math.floor(Math.abs(age.years))} year old
              software developer from Drenthe, the Netherlands.
            </Typography>
            <br />
            <Typography variant="body1">
              I&apos;m currently working at{" "}
              <Link className={styles.link} href="https://paytree.nl">
                Paytree Payment Solutions
              </Link>
              .<br />
              Here, I&apos;m building a full-stack payment platform.
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Tech stack" />
          <CardContent>
            <Typography variant="body1">
              The Paytree dashboard is built using{" "}
              <Link className={styles.link} href="https://nextjs.org">
                Next.js
              </Link>{" "}
              and{" "}
              <Link className={styles.link} href="https://mui.com">
                Material UI
              </Link>
              .
            </Typography>
            <br />
            <Typography variant="body1">
              The mobile POS app is built with{" "}
              <Link className={styles.link} href="https://flutter.dev">
                Flutter.
              </Link>
            </Typography>
            <br />
            <Typography variant="body1">
              And the API that powers both of these is built using{" "}
              <Link className={styles.link} href="https://ktor.io">
                Ktor
              </Link>
              ,{" "}
              <Link className={styles.link} href="https://insert-koin.io">
                Koin
              </Link>
              ,{" "}
              <Link
                className={styles.link}
                href="https://github.com/JetBrains/Exposed"
              >
                Exposed
              </Link>
              , and backed by a{" "}
              <Link className={styles.link} href="https://www.postgresql.org/">
                PostgreSQL
              </Link>{" "}
              database.
            </Typography>
            <br />
            <Typography variant="body1">
              All of this is deployed to and built using Google Cloud.
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="A little bit more about me" />
          <CardContent>
            <Typography variant="body1">
              In 2013, I discovered my passion for programming, which was
              sparked by watching{" "}
              <Link
                className={styles.link}
                href="https://www.youtube.com/user/shiffman"
              >
                The Coding Train
              </Link>
              . I began my formal programming education in 2017, following the
              fundamentals I had learned in{" "}
              <Link className={styles.link} href="https://processing.org">
                Processing
              </Link>
              .
            </Typography>
            <br />
            <Typography variant="body1">
              From October 2018 to March 2019, I had the privilege of
              participating in an international internship in the United
              Kingdom. During this time, I specialized in Node.js for back-end
              development. One of the most valuable skills I acquired was the
              use of Async.js, which led to my proficiency in callbacks, as an
              alternative to the conventional async/await approach.
            </Typography>
            <br />
            <Typography variant="body1">
              As a hobby, I enjoy playing the drums, which I started fairly
              recently. My expertise with the drums has been primarily
              self-taught, and I make it a point to practice daily, constantly
              seeking to master new songs.
            </Typography>
            <br />
            <Typography variant="body1">
              Video games have been a significant part of my life for as long as
              I can recall. My all-time favorite game is The Legend of Zelda:
              Ocarina of Time, followed closely by{" "}
              <Link className={styles.link} href="https://clonehero.net">
                Clone Hero
              </Link>{" "}
              and Breath of the Wild.
            </Typography>
            <br />
            <Typography variant="body1">My skill set includes:</Typography>

            <ul>
              <li>React.js</li>
              <li>Kotlin</li>
              <li>Flutter/Dart</li>
              <li>Google Cloud</li>
            </ul>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
