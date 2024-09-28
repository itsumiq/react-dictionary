import { Theme } from '@/src/features/theme';
import { InputWithLabel } from '../inputs';
import Link from 'next/link';
import { SiTelegram } from 'react-icons/si';

import { getWord } from '@/src/features/actions';

export const Header = () => {
  return (
    <header className="flex flex-col gap-y-5">
      <div className="flex items-center justify-between">
        <Link href="/">
          <h3 className="text-xl font-normal text-black-700 max-sm:text-[1.4rem] dark:text-white">
            reactdictionary
          </h3>
        </Link>
        {/* <Theme /> */}
        <Link href="https://t.me/itsumiportfolio" target="_blank">
          <SiTelegram className="size-7 max-sm:size-9" />
        </Link>
      </div>
      <form action={getWord}>
        <InputWithLabel />
      </form>
    </header>
  );
};
