import { ButtonEmail } from './ButtonEmail';

export const Contacts = () => {
  return (
    <ul className="flex flex-col items-center justify-center gap-2">
      <li>
        <ButtonEmail />
      </li>
      <li>
        <a
          href="https://t.me/itsumi9"
          className="text-[2.5rem] text-gray-500 transition hover:text-white"
        >
          TELEGRAM
        </a>
      </li>
    </ul>
  );
};
