import { useTheme } from 'next-themes';

interface ChangeThemeProps {
  themeStatus: 'light' | 'dark' | 'system';
  closeChangeTheme: () => void;
}

export const ChangeTheme = ({ themeStatus, closeChangeTheme }: ChangeThemeProps) => {
  const { setTheme } = useTheme();

  return (
    <button
      className="rounded-sm text-xs text-black transition duration-300 ease-in first-letter:uppercase dark:text-white hover:dark:bg-gray-700"
      onClick={() => {
        setTheme(themeStatus);
        closeChangeTheme();
      }}
    >
      {themeStatus}
    </button>
  );
};
