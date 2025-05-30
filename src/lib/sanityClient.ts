import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'bf8vht28', // replace this
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});
