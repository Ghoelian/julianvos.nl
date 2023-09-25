'use client';

import { DateTime } from 'luxon';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Card, CardContent, IconButton, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

type ITimelineItem = {
    description: string;
    timestamp: DateTime;
};

const mapRange = (number: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

export default function Experience() {
    const experienceRef = useRef<HTMLDivElement>(null);

    const [bounds, setBounds] = useState<number[]>();

    const items = useMemo<ITimelineItem[]>(
        () => [
            {
                description: 'Started software developer education',
                timestamp: DateTime.local(2017, 8, 25)
            },
            {
                description: 'Started internship at Ndevr Ltd.',
                timestamp: DateTime.local(2018, 10, 1)
            },
            {
                description: 'Finished internship at Ndevr Ltd.',
                timestamp: DateTime.local(2019, 3, 31)
            },
            {
                description: 'Started internship at Atos',
                timestamp: DateTime.local(2020, 2, 1)
            },
            {
                description: 'Finished internship at Atos',
                timestamp: DateTime.local(2020, 6, 30)
            },
            {
                description: 'Finished software developer education',
                timestamp: DateTime.local(2020, 8, 31)
            },
            {
                description: 'Started working at ASUS Holland',
                timestamp: DateTime.local(2020, 9, 30)
            },
            {
                description: 'Started working at Paytree',
                timestamp: DateTime.local(2022, 3, 15)
            },
            {
                description: 'Still working at Paytree',
                timestamp: DateTime.now()
            }
        ],
        []
    );

    useEffect(() => {
        setBounds([items[0].timestamp.toSeconds(), items[items.length - 1].timestamp.toSeconds()]);
    }, [items]);

    useEffect(() => {
        if (experienceRef === null || experienceRef.current === null || bounds === undefined) return;

        experienceRef.current.scrollLeft = mapRange(
            items[items.length - 1].timestamp.toSeconds(),
            bounds[0],
            bounds[1],
            0,
            items.length * 500
        );
    }, [experienceRef, items, bounds]);

    const smoothScroll = (pos: number, time: number) => {
        if (experienceRef.current === null) return;

        const currentPos = experienceRef.current.scrollLeft;
        let start: number | null = null;

        if (time === null) time = 500;

        pos = +pos;
        time = +time;

        window.requestAnimationFrame(function step(currentTime) {
            if (experienceRef.current === null) return;

            start = !start ? currentTime : start;

            const progress = currentTime - start;

            if (currentPos < pos) {
                experienceRef.current.scrollTo({ left: ((pos - currentPos) * progress) / time + currentPos });
            } else {
                experienceRef.current.scrollTo({ left: currentPos - ((currentPos - pos) * progress) / time });
            }

            if (progress < time) {
                window.requestAnimationFrame(step);
            } else {
                experienceRef.current.scrollTo({ left: pos });
            }
        });
    };

    const handleClick = (dir: number) => {
        if (experienceRef.current === null) return;

        // Left
        if (dir === 0) {
            smoothScroll(experienceRef.current.scrollLeft - (window.innerWidth - 200), 250);
        } // Right
        else {
            smoothScroll(experienceRef.current.scrollLeft + (window.innerWidth - 200), 250);
        }
    };

    return (
        <>
            <Typography sx={{ textAlign: 'center' }}>This thing scrolls to the left btw, haven&apos;t quite finished it yet :)</Typography>
            <div
                style={{
                    position: 'absolute',
                    left: 200,
                    zIndex: 100,
                    marginTop: 150
                }}
            >
                <IconButton onClick={() => handleClick(0)} sx={{ backgroundColor: 'grey', color: 'black' }}>
                    <ArrowBack />
                </IconButton>
            </div>
            <div
                style={{
                    position: 'absolute',
                    right: 200,
                    zIndex: 100,
                    marginTop: 150
                }}
            >
                <IconButton onClick={() => handleClick(1)} sx={{ backgroundColor: 'grey', color: 'black' }}>
                    <ArrowForward />
                </IconButton>
            </div>
            <div
                style={{
                    overflow: 'scroll',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    height: 400,
                    textAlign: 'center',
                    marginTop: '1rem'
                }}
                ref={experienceRef}
            >
                {bounds?.length === 2 && (
                    <>
                        {items.map((item, index) => {
                            return (
                                <div
                                    key={item.timestamp.toSeconds()}
                                    style={{
                                        position: 'absolute',
                                        minWidth: 200,
                                        maxWidth: 300,
                                        width: 'fit-content',
                                        marginLeft: mapRange(item.timestamp.toSeconds(), bounds[0], bounds[1], 0, items.length * 500),
                                        marginTop: index % 2 === 0 ? 0 : 200
                                    }}
                                >
                                    {index % 2 !== 0 && <>|</>}
                                    <Card>
                                        <CardContent>
                                            {item.timestamp.toLocaleString(DateTime.DATE_FULL)}
                                            <br />
                                            {item.description}
                                        </CardContent>
                                    </Card>
                                    {index % 2 === 0 && <>|</>}
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
        </>
    );
}
