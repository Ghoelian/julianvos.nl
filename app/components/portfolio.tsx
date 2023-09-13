import { Box, Card, CardContent, CardHeader, CardMedia, styled } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useRouter } from 'next/navigation';

const imgHeight: number = 250;

const options = {
    shouldForwardProp: (prop: string) => prop !== 'hoverShadow'
};

const StyledCard = styled(
    Card,
    options
)(({ theme }) => ({
    ':hover': {
        boxShadow: theme.shadows[12],
        cursor: 'pointer'
    },
    width: imgHeight
}));

export default function Portfolio() {
    const router = useRouter();
    const handleNav = (project: string) => {
        switch (project) {
            case 'snake':
                router.push('/projects/p5/snake');
                break;
            case 'pong':
                router.push('/projects/p5/pong');
                break;
            case 'lyrics':
                router.push('/projects/processing/lyrics-repetition-chart');
                break;
        }
    };
    return (
        <>
            <Grid2 container spacing={2}>
                <Grid2 xsOffset={4} mdOffset={0} md={4}>
                    <StyledCard onClick={() => handleNav('snake')}>
                        <CardMedia sx={{ height: imgHeight }} image="/assets/portfolio-imgs/snake.webp" title="a snake game" />
                        <CardHeader title="Snake in P5.js" />
                    </StyledCard>
                </Grid2>
                <Grid2 xsOffset={4} mdOffset={0} md={4}>
                    <StyledCard onClick={() => handleNav('pong')}>
                        <CardMedia sx={{ height: imgHeight }} image="/assets/portfolio-imgs/pong.webp" title="a pong game" />
                        <CardHeader title="Pong in P5.js" />
                    </StyledCard>
                </Grid2>
                <Grid2 xsOffset={4} mdOffset={0} md={4}>
                    <StyledCard onClick={() => handleNav('lyrics')}>
                        <CardMedia
                            sx={{ height: imgHeight }}
                            image="/assets/portfolio-imgs/lyrics.webp"
                            title="a plot showing a pattern with rainbow colours"
                        />
                        <CardHeader title="Lyrics repetition chart" />
                    </StyledCard>
                </Grid2>
            </Grid2>
        </>
    );
}
