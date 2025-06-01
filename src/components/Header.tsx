import { Box, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Header = ({ title }: { title: string }) => {
  return (
    <Box
      sx={{
        px: 4,
        py: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700, color: '#3e2723' }}>
        {title}
      </Typography>

      <Box sx={{ display: 'flex', gap: 3 }}>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            style={({ isActive }) => ({
              color: isActive ? '#3e2723' : '#6d4c41',
              fontWeight: isActive ? 700 : 500,
              textDecoration: 'none',
              borderBottom: isActive ? '2px solid #3e2723' : 'none',
              paddingBottom: '2px',
            })}
          >
            {link.label}
          </NavLink>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
