'use client';

import { useRef, useState, useEffect } from 'react';

type RefProps = HTMLButtonElement | null;

export const ButtonEmail = () => {
  const [currentButton, setCurrentButton] = useState<RefProps>(null);
  const buttonRef = useRef<RefProps>(null);

  useEffect(() => {
    const isSecure = window.isSecureContext;
    const button = buttonRef.current;

    if (isSecure && button) {
      setCurrentButton(button);

      button.classList.add('active:text-pink');
      button.classList.add('cursor-pointer');
    }
  }, []);

  const handleClick = () => {
    if (currentButton) {
      const text = currentButton.innerHTML.toLowerCase();
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <button
      onClick={handleClick}
      ref={buttonRef}
      className="cursor-default text-[2.5rem] text-gray-500 transition hover:text-white"
    >
      ITSUMIEXEWORK@GMAIL.COM
    </button>
  );
};
