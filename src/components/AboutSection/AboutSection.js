import React, { useState } from 'react';
import {
    Typography,
    Grid,
    Button,
    CardMedia,
    FormControl,
    TextField,
    Snackbar,
    Alert,
    Paper,
    Stack,
    FormControlLabel,

} from '@mui/material';
import { Box } from '@mui/system';
import ProfileCard from '../ProfileCard/ProfileCard';
import ProjectCard from '../ProjectCard/ProjectCard';
import boys from '../../images/boys.PNG';
import pic from '../../images/portfolio pic.jpg';
import signLandingScreen from '../../images/landingScreen.PNG';
import thingLandingScreen from '../../images/secondcontent.PNG';


const aboutThings = "Things is a practice social media site that I made from scratch. This was built to work on my ability to create a profile page that can receive unique information and have it react correctly to different profiles as well as an incorrect profile id. This site also proved to be good practice with firebase auth/storage/firestore backend."
const aboutManningSigns = "I built this website from scratch for my parents company. Very basic single page site that allows the owner to sign in and change the about section for employees and their picture. It also has the ability to add more images to the gallery section. The backend and authentication of users was made with Firebase."
const techUsedThings = "React, Javascript, Node, MUI, Firebase";
const aboutFirebase = "I decided on Firebase for the backend as it lends itself to being very user-friendly and easy to get off the ground. I used the provided Auth to control registering accounts and logging in and out, this made it extremely easy to call on the Auth context and grab the currentUser data when needed. I used this in conjunction with firebase as the main database. When a new user is registered I also create a userID in the Users DB, this user object holds all the unique data for this user including photos, profile picture, last logged in date, userName, full name, and any info pertaining to that user. I used the firebase storage option and a very handy hook used for storage that I had to adjust to fit firebase's new documentation. This hook takes in your file, and returns back a progress percentage as well as the url when the upload is finished, this URL is then added to current state, and when submitted is pushed into the firestore DB under the current users ID. Firebase in all has been one of my more enjoyable experiences with a backend, and proved to be a challenge considering I could not find any tutorials using the new documentation."
const aboutFirebaseManningSigns = "The firebase backend is very simple. I used firebase storage with a hook to store the image while returning a percentage and url on finish, then on submit the url is sent to the corresponding database based on the given parameter. The website offers basic other options such as changing text fields and changing user information. This was my first attempt at using a firebase backend."
const TLDRFirebase = "No tutorials for new documentation ; Auth for registration/log-in/out ; FireStore for holding User Information ; Storage for hosting images ;"
const githubLinkThings = "https://github.com/ParkerM2/social-media-site";
const githubLinkManningSigns = "https://github.com/ParkerM2/ManningSignsV2";
const siteLinkThings = "https://social-media-site-52678.web.app/";
const siteLinkManningSigns = "https://manningsigns.org/";
const manningPadding = 1.2;
const thingPadding = 0;

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
                <Grid item lg={12} md={12} xs={12}>
                    <ProfileCard />
                </Grid>
                <Grid item lg={12} xs={12} md={12}>
                    <Typography paddingTop={10} paddingBottom={6} align="center" color="secondary.main" variant="h3"> Projects </Typography>
                </Grid>
                <Grid container justifyContent="center" spacing={2}>
                    <Grid item lg={5} xs={12} align="center">
                        <ProjectCard
                            title="Social Media Site"
                            subheader="Creator: Parker Manning"
                            alt="Social Media Site Image"
                            mainPic={thingLandingScreen}
                            about={aboutThings}
                            techStack={techUsedThings}
                            firebase={aboutFirebase}
                            TLDRFirebase={TLDRFirebase}
                            githubLink={githubLinkThings}
                            siteLink={siteLinkThings}
                            padding={thingPadding}
                        />
                    </Grid>
                    <Grid item lg={5} xs={12} align="center">
                        <ProjectCard
                            title="Manning Signs & Shirts Inc."
                            subheader="Creator: Parker Manning - freelance job"
                            alt="Social Media Site Image"
                            mainPic={signLandingScreen}
                            about={aboutManningSigns}
                            techStack={techUsedThings}
                            firebase={aboutFirebaseManningSigns}
                            TLDRFirebase={TLDRFirebase}
                            githubLink={githubLinkManningSigns}
                            siteLink={siteLinkManningSigns}
                            padding={manningPadding}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};