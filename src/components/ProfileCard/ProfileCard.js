import * as React from 'react';
import {
    Grid,
    Paper,
    Divider,
    Avatar,
    Typography,
    CardMedia,
    IconButton,
    CardContent,
    Menu,
    MenuItem,
    Chip,
    Stack,
    Button,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import pic from '../../images/portfolio pic.jpg';
import doggo from '../../images/doggo.JPG';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
const githubLink = "https://github.com/ParkerM2";
const linkedInLink = "https://www.linkedin.com/in/parkerm2/";

export default function MainCard(props) {
    const {username, userPhoto, displayedImage, description, photoLocation, uid} = props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    
      setAnchorEl(null);
    };
    
  return (
    <>
      <Grid justifyContent="center" container spacing={1}>
        <Grid item>
          <Paper
            sx={{
              backgroundColor: '#757575',
              height: 600,
              maxWidth: 350,
              minWidth: 350
            }}
            elevation={6}
          >
            <Grid container sx={{ padding: '2px' }} justifyContent="space-between" >
              <Grid item sx={{ padding: '2px' }}>
                <IconButton href={linkedInLink} target="__blank">
                  <LinkedIn fontSize="large" color="primary"/>
                </IconButton>
              </Grid>
              <Grid item textAlign="center">
                <Typography variant="h6" color="secondary.main">
                  Parker Manning
                </Typography>
                <Typography variant="subtitle" color="primary.dark">
                  26, He/Him
                </Typography>
              </Grid>
               <Grid item>
                  <IconButton target="__blank" href={githubLink}>
                    <GitHubIcon fontSize="large" color="primary" />
                  </IconButton>
                  <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                      <MenuItem onClick={handleClose} href="#contact">Hire Me </MenuItem>
                      <MenuItem onClick={handleClose} href="#projects">Projects </MenuItem>
                  </Menu>

              </Grid>
            </Grid>
            <Divider color="black" variant="middle" />                   
            <Grid sx={{ paddingTop: '4px', paddingBottom: '4px' }} container justifyContent="center">
              <Grid item>
                <CardMedia
                  sx={{
                    width: 300,
                    height: 380,
                  }}
                  component="img"
                  image={pic}
                  title="Parker Manning"
                />
              </Grid>
            </Grid>
            <Divider variant="middle" color="black" />
            <CardContent sx={{ paddingTop: .5, overflowY: 'hidden', height: '100px' }}>
              <Stack direction="row" spacing={.5} padding={1}>
                <Typography variant="p" color="secondary.main"> Skills : </Typography>
                <Chip label="React" color="primary" />
                <Chip label="Express" color="secondary" variant="outlined"/>
                <Chip label="Node" color="primary" />
                <Chip label="Firebase" color="secondary" variant="outlined"/>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Chip label="HTML" color="primary" />
                <Chip label="JavaScript" color="secondary" variant="outlined" />
                <Chip label="CSS" color="primary" />
                <Chip label="Git" color="secondary" variant="outlined" />
                <Chip label="API" color="primary" />
              </Stack>
              <Stack direction="row" spacing={1} paddingTop={1}>
                <Chip label="Material-UI" color="secondary"  variant="outlined"/>
                <Chip label="MySql" color="primary" />
                <Chip label="Mongodb" color="secondary"  variant="outlined"/>
                <Chip label="REST" color="primary" />
              </Stack>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};