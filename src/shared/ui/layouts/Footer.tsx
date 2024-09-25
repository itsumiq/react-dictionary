import Link from 'next/link';

export const Footer = () => {
  return (
    <ul className="border-t border-gray-600 py-5">
      <div className="m-[0_auto] flex w-[41.625rem] justify-between">
        <li>
          <Link href="/" className="text-2">
            Contacts
          </Link>
        </li>
        <li>
          <a href="" className="text-2">
            Github
          </a>
        </li>
      </div>
    </ul>
  );
};
