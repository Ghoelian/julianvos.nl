import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Link,
  Typography,
} from "@mui/material";
import { DateTime } from "luxon";
import StyledNextLink from "@/common/components/styled-next-link";

// lmao this is so dumb
const age = DateTime.local(2000, 12, 25).diffNow("years");

export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gap: 2,
        }}
      >
        <Card>
          <CardHeader title="About me" />

          <CardContent>
            <Typography variant="body1">
              I&apos;m Julian, a {Math.floor(Math.abs(age.years))}-year-old
              software developer from Drenthe, the Netherlands.
            </Typography>
            <br />
            <Typography variant="body1">
              I&apos;m currently working at{" "}
              <StyledNextLink
                href="https://paytree.nl"
                target="_blank"
                rel="noreferrer noopener"
              >
                Paytree Payment Solutions
              </StyledNextLink>
              .<br />
              Here, I&apos;m building a full-stack payment platform.
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Tech stack" />

          <CardContent>
            <Typography variant="body1">
              This website is built using{" "}
              <StyledNextLink
                href="https://nextjs.org"
                target="_blank"
                rel="noreferrer noopener"
              >
                Next.js
              </StyledNextLink>{" "}
              and{" "}
              <StyledNextLink
                href="https://mui.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                Material UI
              </StyledNextLink>{" "}
              for styling.
            </Typography>

            <br />
            <br />

            <Typography variant="body1">
              At Paytree, I develop a payment platform mostly used on events
              like festivals. This platform includes:
            </Typography>

            <br />

            <Typography variant="body1">
              - A dashboard for product and cash register management, and
              statistics;
            </Typography>

            <Typography variant="body1">
              - A mobile POS Android app used by the cashiers, where they can
              select products and pay using various payment methods, including
              NFC balance cards and contactless card payments;
            </Typography>

            <Typography variant="body1">
              - A customer-facing balance card website, where users can see
              their balance and past orders, and top-up their balance cards
              using iDeal;
            </Typography>

            <Typography variant="body1">
              - And an API that powers all of this.
            </Typography>

            <br />
            <br />

            <Typography variant="body1">
              The Paytree dashboard is built with Material UI for styling as
              well, but on top of plain React.js for now. I plan to move this to
              Next.js as well in the future.
            </Typography>

            <br />

            <Typography variant="body1">
              The mobile POS app is built with{" "}
              <StyledNextLink
                href="https://flutter.dev"
                target="_blank"
                rel="noreferrer noopener"
              >
                Flutter.
              </StyledNextLink>
            </Typography>

            <br />

            <Typography variant="body1">
              The API that powers both of these is built using{" "}
              <StyledNextLink
                href="https://ktor.io"
                target="_blank"
                rel="noreferrer noopener"
              >
                Ktor
              </StyledNextLink>
              ,{" "}
              <StyledNextLink
                href="https://insert-koin.io"
                target="_blank"
                rel="noreferrer noopener"
              >
                Koin
              </StyledNextLink>
              ,{" "}
              <StyledNextLink
                href="https://github.com/JetBrains/Exposed"
                target="_blank"
                rel="noreferrer noopener"
              >
                Exposed
              </StyledNextLink>
              , and backed by a{" "}
              <StyledNextLink
                href="https://www.postgresql.org/"
                target="_blank"
                rel="noreferrer noopener"
              >
                PostgreSQL
              </StyledNextLink>{" "}
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
              <StyledNextLink
                href="https://www.youtube.com/user/shiffman"
                target="_blank"
                rel="noreferrer noopener"
              >
                Daniel Shiffman
              </StyledNextLink>{" "}
              completing challenges set by his audience. I began my formal
              programming education in 2017, following the fundamentals I had
              learned in{" "}
              <StyledNextLink
                href="https://processing.org"
                target="_blank"
                rel="noreferrer noopener"
              >
                Processing
              </StyledNextLink>
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
              <StyledNextLink
                href="https://clonehero.net"
                target="_blank"
                rel="noreferrer noopener"
              >
                Clone Hero
              </StyledNextLink>{" "}
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
