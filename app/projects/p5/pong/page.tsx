import { Box, Typography } from '@mui/material';

export default function Pong() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <iframe
                style={{
                    width: '800px',
                    minHeight: '500px'
                }}
                src="https://editor.p5js.org/Ghoelian/full/z797FL6nb"
            ></iframe>
            &nbsp;
            <br />
            <Typography variant="body1">
                This sketch seems to have issues loading sometimes, so you might have to refresh the page a few times until it works.
            </Typography>
        </Box>
    );
}
