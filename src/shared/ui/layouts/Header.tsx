import { Theme } from '@/src/features/theme';
import { InputWithLabel } from '../inputs';

import { findWord } from '@/src/features/actions';

export const Header = () => {
  return (
    <header className="flex flex-col gap-y-5">
      <div className="flex justify-between">
        <h3 className="text-xl font-normal text-black-700 dark:text-white">reactdictionary</h3>
        <Theme />
      </div>
      <form action={findWord}>
        <InputWithLabel />
      </form>
    </header>
  );
};
