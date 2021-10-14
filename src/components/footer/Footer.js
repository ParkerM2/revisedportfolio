import {
    AppBar,
    Toolbar,
    Typography,
    Divider,
} from '@mui/material';

export default function Footer() {
  return (
    <>
      <AppBar position="static" sx={{backgroundColor: 'primary.light'}}>
        <Toolbar>
          <Typography color="primary.main" variant="body1">
            © 2021 Parker Manning
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};