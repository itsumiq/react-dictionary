import { Theme } from '@/src/features/theme';
import { InputWithLabel } from '../inputs';
import Link from 'next/link';

import { getWord } from '@/src/features/actions';

export const Header = () => {
  return (
    <header className="flex flex-col gap-y-5">
      <div className="flex justify-between">
        <Link href="/">
          <h3 className="text-xl font-normal text-black-700 dark:text-white">reactdictionary</h3>
        </Link>
        <Theme />
      </div>
      <form action={getWord}>
        <InputWithLabel />
      </form>
    </header>
  );
};
