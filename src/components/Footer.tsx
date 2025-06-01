import { Box, Typography, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { SiteSettings } from '../types/SiteSettings';

const Footer = ({ siteSettings }: { siteSettings: SiteSettings }) => (
  <Box
    sx={{
      background: 'linear-gradient(135deg, #5d4037 0%, #3e2723 100%)',
      color: '#fff',
      pt: 6,
      pb: 4,
      mt: 8,
      textAlign: 'center',
      px: { xs: 2, sm: 0 },
    }}
  >
    <Typography variant="subtitle2" sx={{ mb: 1, opacity: 0.8 }}>
      Contact Us
    </Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      📞 {siteSettings.contactPhone}
    </Typography>
    <Typography variant="h6" sx={{ mb: 3 }}>
      {siteSettings.address}
    </Typography>

    {siteSettings.mapEmbed && (
      <Box
        sx={{
          maxWidth: 600,
          mx: 'auto',
          borderRadius: 3,
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          height: { xs: 150, sm: 200 },
          mb: 4,
        }}
      >
        <iframe
          src={siteSettings.mapEmbed}
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: 12 }}
          loading="lazy"
          allowFullScreen
          title="Location Map"
        />
      </Box>
    )}

    <Box sx={{ mb: 3 }}>
      <Link href="https://facebook.com" target="_blank" rel="noopener" color="inherit">
        <IconButton aria-label="Facebook" sx={{ color: '#fff' }}>
          <FacebookIcon />
        </IconButton>
      </Link>
      <Link href="https://instagram.com" target="_blank" rel="noopener" color="inherit">
        <IconButton aria-label="Instagram" sx={{ color: '#fff' }}>
          <InstagramIcon />
        </IconButton>
      </Link>
      <Link href="https://twitter.com" target="_blank" rel="noopener" color="inherit">
        <IconButton aria-label="Twitter" sx={{ color: '#fff' }}>
          <TwitterIcon />
        </IconButton>
      </Link>
    </Box>

    <Typography variant="caption" sx={{ opacity: 0.6 }}>
      © {new Date().getFullYear()} Crockery Store. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
