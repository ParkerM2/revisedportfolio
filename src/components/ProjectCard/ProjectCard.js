import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import HttpIcon from '@mui/icons-material/Http';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const linkedIn = "https://www.linkedin.com/in/parkerm2/";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProjectCard({title, subheader, alt, mainPic, about, techStack, firebase, TLDRFirebase, githubLink, siteLink, padding}) {
    const [expanded, setExpanded] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ bgcolor: 'primary.light', color: 'primary.dark' }} elevation={12}>
      <CardHeader
        title={title}
        subheader={subheader}
      />
      <CardMedia
        component="img"
        image={mainPic}
        height="100%"
        alt={alt}
      />
      <CardContent>
        <Typography paragraph paddingBottom={padding} color="primary.dark">
          {about}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton target="__blank" href={githubLink} variant="contained">
          <GitHubIcon fontSize="large" color="primary" />
        </IconButton>
        <IconButton target="__blank" href={linkedIn} variant="contained">
          <LinkedInIcon fontSize="large" color="primary" />
        </IconButton>
        <IconButton target="__blank" href={siteLink} variant="contained">
          <HttpIcon fontSize="large" color="primary" />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon fontSize="large" color="primary"/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent autoFocus>
          <Typography padding={2} align="left" variant="h5"><b>Technologies used :</b> {techStack}</Typography>
          <Divider color="primary.light" />
          <Typography paddingTop={4} align="left" paragraph>
            <b>Firebase : </b> {firebase}
          </Typography>
          <Typography color="secondary.dark" variant="h7">
            TLDR: {TLDRFirebase}
          </Typography>
          <CardActions>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              sx={{bgcolor: 'secondary.main'}}
            >
              <ExpandMoreIcon fontSize="large" color="primary"/>
            </ExpandMore>
          </CardActions>
        </CardContent>
      </Collapse>
    </Card>
  );
}