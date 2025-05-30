import { AppBar, Toolbar, Typography, Box } from '@mui/material';

type Props = {
  siteTitle: string;
  logoUrl?: string;
  primaryColor?: string;
};

const Navbar = ({ siteTitle, logoUrl, primaryColor }: Props) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: primaryColor || '#1976d2' }}>
      <Toolbar>
        {logoUrl && (
          <Box component="img" src={logoUrl} alt="Logo" sx={{ height: 40, mr: 2 }} />
        )}
        <Typography variant="h6" component="div">
          {siteTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
