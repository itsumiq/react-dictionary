'use client';

import { useRef } from 'react';

export const Email = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = () => {
    const buttonCur = buttonRef.current;

    if (buttonCur) {
      const text = buttonCur.innerHTML.toLowerCase();
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <button
      onClick={handleClick}
      ref={buttonRef}
      className="text-[3rem] text-gray-500 transition hover:text-white active:text-pink"
    >
      ITSUMIEXEWORK@GMAIL.COM
    </button>
  );
};
