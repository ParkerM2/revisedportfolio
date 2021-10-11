import React from 'react';
import {
    Typography,
    Grid,
    Button,
    CardMedia,

} from '@mui/material';
import { Box } from '@mui/system';
import ProfileCard from '../ProfileCard/ProfileCard';
import ProjectCard from '../ProjectCard/ProjectCard';
import boys from '../../images/boys.PNG';
import pic from '../../images/portfolio pic.jpg';

export default function AboutSection() {

    return (
        <Box sx={{
                minHeight: '92vh',
                position: 'relative',
                backgroundColor: 'primary.main',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                objectFit: 'cover',
                paddingBottom: '5vh',
        }}
        >
            <Grid container padding={2} spacing={1}>
                <Grid item xs={8} lg={12}>
                    <Typography color="primary.contrastText" variant="h3">Hi,</Typography>
                </Grid>
                <Grid item xs={8} lg={12}>
                    <Typography color="primary.contrastText" variant="h3">I'm Parker,</Typography>
                </Grid>
                <Grid item xs={8} lg={3}>
                    <Typography color="secondary.main" variant="h3">Web Developer.</Typography>
                </Grid>
                <Grid item lg={12}>
                    <ProfileCard />
                </Grid>
                <Grid item lg={12} xs={12}>
                    <Typography paddingTop={10} paddingBottom={6} align="left" color="secondary.main" variant="h3"> Projects </Typography>
                </Grid>
                <Grid item lg={6} align="center">
                    <ProjectCard
                        title="Social Media Site"
                        subheader="Creator: Parker Manning"
                        alt="Social Media Site Image"
                    />
                </Grid>
                <Grid item lg={6} align="center">
                    <ProjectCard />
                </Grid>
            </Grid>
        </Box>
    )
}