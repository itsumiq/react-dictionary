import { ResponseProps } from '@/src/shared/types';
import { Meaning } from '@/src/entities';
import { PlayButton } from './PlayButton';

interface WordProps {
  searchWord: string;
}

export const Word = async ({ searchWord }: WordProps) => {
  const request = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord.toString()}`,
    {
      method: 'GET',
    }
  );
  const response: ResponseProps[] = await request.json();
  const [wordInformation] = response;

  const word = wordInformation.word;
  const meanings = wordInformation.meanings;

  const phonetics = wordInformation.phonetics.find(({ audio }) => audio.length > 0);
  const { text: phoneticText, audio: phoneticAudio } = phonetics
    ? phonetics
    : { text: '', audio: '' };

  return (
    <div className="py-[3.75rem]">
      <div className="mb-[2.3rem] flex items-center justify-between">
        <div>
          <h1>{word}</h1>
          <p className="text-2">{phoneticText}</p>
        </div>
        <PlayButton src={phoneticAudio} />
      </div>

      <div className="flex flex-col gap-y-[1.6rem]">
        {meanings.map(({ partOfSpeech, definitions, synonyms }) => (
          <Meaning
            partOfSpeech={partOfSpeech}
            definitions={definitions}
            synonyms={synonyms}
            key={partOfSpeech}
          />
        ))}
      </div>
    </div>
  );
};
