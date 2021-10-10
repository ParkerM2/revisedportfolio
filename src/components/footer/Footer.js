import {
    AppBar,
    Toolbar,
    Typography,
    Divider,
} from '@mui/material';

export default function Footer() {
  return (
    <>
      <Divider />
      <AppBar position="static" sx={{backgroundColor: 'primary.main'}}>
        <Toolbar>
          <Typography variant="body1" color="secondary">
            © 2021 Parker Manning
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};