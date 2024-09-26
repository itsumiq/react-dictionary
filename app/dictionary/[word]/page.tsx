'use server';

import { Word } from '@/src/views/Word';

interface DictionaryProps {
  params: { word: string };
}

const Dictionary = async ({ params }: DictionaryProps) => {
  const searchWord = params.word;

  return <Word searchWord={searchWord} />;
};

export default Dictionary;
