// src/components/Footer.tsx

import { Box, Typography, Link, Container, Stack } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { SiteSettings } from '../types/SiteSettings';

type Props = {
  siteSettings: SiteSettings;
};

const Footer = ({ siteSettings }: Props) => {
  return (
    <Box sx={{ backgroundColor: '#f1f3f6', mt: 8, pt: 4, pb: 4 }}>
      <Container maxWidth="md">
        <Stack spacing={2}>
          {siteSettings.contactPhone && (
            <Stack direction="row" alignItems="center" spacing={1}>
              <PhoneIcon color="primary" />
              <Typography variant="body1">{siteSettings.contactPhone}</Typography>
            </Stack>
          )}

          {siteSettings.whatsappLink && (
            <Stack direction="row" alignItems="center" spacing={1}>
              <WhatsAppIcon color="success" />
              <Link href={siteSettings.whatsappLink} target="_blank" underline="hover">
                <Typography variant="body1">Chat on WhatsApp</Typography>
              </Link>
            </Stack>
          )}

          {siteSettings.address && (
            <Stack direction="row" alignItems="center" spacing={1}>
              <LocationOnIcon color="error" />
              <Typography variant="body1">{siteSettings.address}</Typography>
            </Stack>
          )}

          {siteSettings.mapEmbed && (
            <Box sx={{ mt: 2 }}>
              <iframe
                src={siteSettings.mapEmbed}
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: 8 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
