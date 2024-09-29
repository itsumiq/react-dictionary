import { Contacts } from '@/src/views/Contacts/ui';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacts | Dictionary',
};

const Connection = () => {
  return <Contacts />;
};

export default Connection;
