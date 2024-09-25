'use client';

import { useState } from 'react';

import { Moon } from 'lucide-react';
import { ChangeTheme } from './ChangeTheme';

export const Theme = () => {
  const [changeTheme, setChangeTheme] = useState(false);

  return (
    <div className="group relative z-50">
      <button
        className="flex size-9 items-center justify-center rounded transition duration-300 ease-in dark:bg-black-700 hover:dark:bg-gray-700"
        onClick={() => setChangeTheme(!changeTheme)}
      >
        <Moon />
      </button>

      <div
        className={`absolute right-0 top-11 z-50 grid h-[5.625rem] ${changeTheme ? 'block' : 'hidden opacity-0'} w-[7.5rem] rounded border opacity-100 transition-all duration-300 dark:border-gray-700 dark:bg-black-700`}
      >
        <ChangeTheme themeStatus="light" closeChangeTheme={() => setChangeTheme(!changeTheme)} />
        <ChangeTheme themeStatus="dark" closeChangeTheme={() => setChangeTheme(!changeTheme)} />
        <ChangeTheme themeStatus="system" closeChangeTheme={() => setChangeTheme(!changeTheme)} />
      </div>
    </div>
  );
};
