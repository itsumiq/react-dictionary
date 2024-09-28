import { Search } from 'lucide-react';

export const InputWithLabel = () => {
  return (
    <div className="relative z-10">
      <input
        type="text"
        className="h-[2.875rem] w-full rounded bg-black-700 pl-7 pr-11 text-lg caret-white outline-none"
        placeholder="Type text"
        name="searchWord"
      />
      <button type="submit" className="absolute right-[0.875rem] top-3">
        <Search size="1.5rem" className="text-[#E876FF]" />
      </button>
    </div>
  );
};
