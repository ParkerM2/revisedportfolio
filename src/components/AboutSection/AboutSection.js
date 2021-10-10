import React from 'react';
import {
    Typography,
    Grid,
    Button,
    CardMedia,

} from '@mui/material';
import { Box } from '@mui/system';
import boys from '../../images/boys.PNG';

export default function AboutSection() {

    return (
        <Box sx={{
                height: '92vh',
                position: 'relative',
                backgroundColor: 'primary.main',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                objectFit: 'cover',
                paddingBottom: '5vh',
            }}>
            <Grid container flexDirection="column" padding={4} spacing={3} textAlign="left">
                <Grid item xs={12}>
                    <Typography color="primary.contrastText" variant="h3">Hi,</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography color="primary.contrastText" variant="h3">I'm Parker,</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography color="secondary.main" variant="h3">Web Developer.</Typography>
                </Grid>
                <Grid item xs={12} lg={3} md={4}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={boys}
                        alt="profile pic"
                    />
                </Grid>
            </Grid>
        </Box>
    )
}