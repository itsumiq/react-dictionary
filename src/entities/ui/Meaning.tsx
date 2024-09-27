import { MeaningsProps } from '@/src/shared/types';

export const Meaning = ({ partOfSpeech, definitions, synonyms }: MeaningsProps) => {
  const synonym = synonyms.length === 0 ? 'no informations' : synonyms[0];

  return (
    <div className="flex flex-col gap-y-[2rem]">
      <div className="flex items-center gap-6">
        <span className="text-3">{partOfSpeech}</span>
        <div className="h-px w-full bg-gray-600"></div>
      </div>

      <div className="flex flex-col gap-y-[1.625rem]">
        <div className="flex flex-col gap-3">
          <p className="text-2">Meaning</p>
          {definitions.map(({ definition }) => (
            <div key={definition} className="flex gap-4">
              <div className="mt-[0.438rem] max-h-2 min-h-full min-w-2 rounded-full bg-pink"></div>
              <span className="text-1">{definition}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <p className="text-2">Synonyms</p>
          <span className="text-lg text-pink">{synonym}</span>
        </div>
      </div>
    </div>
  );
};
