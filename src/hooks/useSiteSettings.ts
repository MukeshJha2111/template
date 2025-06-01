// hooks/useSiteSettings.ts
import { useState, useEffect } from 'react';
import { sanityClient } from '../lib/sanityClient';
import { siteSettingsQuery } from '../lib/queries';
import { SiteSettings } from '../types/SiteSettings';

export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityClient.fetch(siteSettingsQuery)
      .then(setSettings)
      .finally(() => setLoading(false));
  }, []);

  return { settings, loading };
}
