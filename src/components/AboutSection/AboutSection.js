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
    Container,
    Divider,
} from '@mui/material';
import { Box } from '@mui/system';
import ProfileCard from '../ProfileCard/ProfileCard';
import ProjectCard from '../ProjectCard/ProjectCard';
import boys from '../../images/boys.PNG';
import pic from '../../images/portfolio pic.jpg';
import signLandingScreen from '../../images/landingScreen.PNG';
import thingLandingScreen from '../../images/secondcontent.PNG';
import TechList from '../TechList/TechList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

const aboutThings = "Things is a practice social media site that I made from scratch. This was built to work on my ability to create a profile page that can receive unique information and have it react correctly to different profiles as well as an incorrect profile id. This site also proved to be good practice with firebase auth/storage/firestore backend."
const aboutManningSigns = "I built this website from scratch for my parents company. Very basic single page site that allows the owner to sign in and change the about section for employees and their picture. It also has the ability to add more images to the gallery section. The backend and authentication of users was made with Firebase."
const aboutCryptoSite = "This React single page application consumes two APIs, a Crypto API, and the Bing News Api. This is accomplished with React Redux Toolkit to create a hook for querying the apis. The Bing News Api is queried with the list of Cryptos returned from the Crypto Api."
const aboutVueCovid = "Covid Tracker is a site used to practice and learn Vue and Tailwind CSS. I enjoyed building this web site and seeing how Vue compares to React. I really enjoyed working with TailWind and it seems very user friendly."
const techUsedCrypto = "React, Node, Ant-Design, APIs, Redux";
const techUsedThings = "React, Javascript, Node, MUI, Google Firebase";
const techUsedVueCovid = "Vue, Javascript, Node, TailWind CSS, API";
const aboutFirebase = "I decided on Firebase for the backend as it lends itself to being very user-friendly and easy to get off the ground. I used the provided Auth to control registering accounts and logging in and out, this made it extremely easy to call on the Auth context and grab the currentUser data when needed. I used this in conjunction with firebase as the main database. When a new user is registered I also create a userID in the Users DB, this user object holds all the unique data for this user including photos, profile picture, last logged in date, userName, full name, and any info pertaining to that user. I used the firebase storage option and a very handy hook used for storage that I had to adjust to fit firebase's new documentation. This hook takes in your file, and returns back a progress percentage as well as the url when the upload is finished, this URL is then added to current state, and when submitted is pushed into the firestore DB under the current users ID. Firebase in all has been one of my more enjoyable experiences with a backend, and proved to be a challenge considering I could not find any tutorials using the new documentation."
const aboutFirebaseManningSigns = "The firebase backend is very simple. I used firebase storage with a hook to store the image while returning a percentage and url on finish, then on submit the url is sent to the corresponding database based on the given parameter. The website offers basic other options such as changing text fields and changing user information. This was my first attempt at using a firebase backend."
const TLDRFirebase = "No tutorials for new documentation ; Auth for registration/log-in/out ; FireStore for holding User Information ; Storage for hosting images ;"
const githubLinkThings = "https://github.com/ParkerM2/social-media-site";
const githubLinkManningSigns = "https://github.com/ParkerM2/ManningSignsV2";
const siteLinkThings = "https://social-media-site-52678.web.app/";
const siteLinkManningSigns = "https://manningsigns.org/";
const githubLinkCryptoSite = "https://github.com/ParkerM2/Crypto-Site";
const siteLinkCryptoSite = "https://youthful-northcutt-2db2a4.netlify.app/";
const githubLinkVueCovid = "https://github.com/ParkerM2/vue-covid-app";
const siteLinkVueCovid = "https://relaxed-hodgkin-d0c9b1.netlify.app/";
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
            <Grid container paddingLeft={3} paddingRight={3} paddingTop={6} spacing={3} justifyContent="space-around">
                <Grid item xs={12} md={5} lg={5}>
                    <Typography color="#b3e5fc" variant="h1" fontFamily="Shadows Into Light">Parker Manning</Typography>
                    <Typography color="#b3e5fc" variant="h3">software engineer</Typography>
                    <br></br>
                    <Typography color="#b3e5fc" variant="h5">greenville, ms</Typography>
                    <br></br>
                    <Typography color="#b3e5fc" variant="h6">A long time software and tech enthusiast with a background in Signs, T-Shirts, Dog Rescue work, Outpatient Therapy work, and a BS in Kinesiology. While training patients I began doing the JavaScript crash course on scrimba and was hooked. This led me to a University of Texas at Austin MERN stack Boot-Camp. I came away from this with experience working with remote team mates on projects as well as the basis of React knowledge needed to propel me into a great career. As of now I'm currently helping run my parents business while learning new technologies and applying to open roles.</Typography>
                </Grid>
                <Grid item xs={12} md={5} lg={5}>
                    <ProfileCard />
                </Grid>
                <Grid item lg={12} xs={12} md={12}>
                    <Divider color="black"/>
                    <Typography paddingTop={6} paddingBottom={6} align="center" color="#b3e5fc" variant="h3"> Projects </Typography>                   
                </Grid>
                <Grid container align="center" paddingLeft={3} justifyContent="center" spacing={4}>
                    <Grid item lg={3} xs={12} md={5} sm={8} >
                        <ProjectCard
                            title="Social Media Site"
                            subheader="React, Node, Firebase, JavaScript, MUI"
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
                    <Grid item lg={3} xs={12} md={5} sm={8} >
                        <ProjectCard
                            title="Manning Signs"
                            subheader="React, Node, Firebase, JavaScript, MUI"
                            alt="Social Media Site Image"
                            mainPic={signLandingScreen}
                            about={aboutManningSigns}
                            techStack={techUsedThings}
                            firebase={aboutFirebaseManningSigns}
                            TLDRFirebase={TLDRFirebase}
                            githubLink={githubLinkManningSigns}
                            siteLink={siteLinkManningSigns}
                            padding={.6}
                        />
                    </Grid>
                    <Grid item lg={3} xs={12} md={5} sm={8} >
                        <ProjectCard
                            title="OFA Crypto"
                            subheader={techUsedCrypto}
                            alt="Crypto-Site Image"
                            mainPic='https://github.com/ParkerM2/Crypto-Site/blob/main/src/images/home-screen.PNG?raw=true'
                            about={aboutCryptoSite}
                            techStack={techUsedCrypto}
                            githubLink={githubLinkCryptoSite}
                            siteLink={siteLinkCryptoSite}
                            padding={6.5}
                        />
                    </Grid>
                    <Grid item lg={3} xs={12} md={5} sm={8} >
                        <ProjectCard
                            title="Covid Tracker"
                            subheader={techUsedVueCovid}
                            alt="Covid Tracker Image"
                            mainPic='https://github.com/ParkerM2/vue-covid-app/blob/main/src/assets/homeScreen.PNG?raw=true'
                            about={aboutVueCovid}
                            techStack={techUsedVueCovid}
                            githubLink={githubLinkVueCovid}
                            siteLink={siteLinkVueCovid}
                            padding={6.2}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};