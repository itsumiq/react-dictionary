import Link from 'next/link';

export const Footer = () => {
  return (
    <ul className="border-t border-gray-600 py-[1.75rem]">
      <div className="m-[0_auto] flex w-[41.625rem] justify-between">
        <li>
          <Link href="/contacts" className="text-2 transition hover:text-white">
            Contacts
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/itsumiq/react-dictionary"
            className="text-2 transition hover:text-white"
            target="_blank"
          >
            GitHub
          </a>
        </li>
      </div>
    </ul>
  );
};
