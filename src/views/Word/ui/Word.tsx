import { ResponseProps } from '@/src/shared/types';
import { Meaning } from '@/src/entities';

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
  const phonetic = wordInformation.phonetic;
  const phonetics = wordInformation.phonetics;
  const meanings = wordInformation.meanings;

  return (
    <div>
      <div>
        <div>
          <h1>{word}</h1>
          <p className="text-2">{phonetic}</p>
        </div>
      </div>
      {meanings.map(({ partOfSpeech, definitions, synonyms }) => (
        <Meaning
          partOfSpeech={partOfSpeech}
          definitions={definitions}
          synonyms={synonyms}
          key={partOfSpeech}
        />
      ))}
    </div>
  );
};
