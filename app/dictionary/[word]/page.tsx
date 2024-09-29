'use server';

import { Word } from '@/src/views/Word';

import type { Metadata } from 'next';

interface DictionaryProps {
  params: { word: string };
}

export const generateMetadata = async ({ params }: DictionaryProps): Promise<Metadata> => {
  return {
    title: `${params.word} | Dictionary`,
  };
};

const Dictionary = async ({ params }: DictionaryProps) => {
  const searchWord = params.word;

  return <Word searchWord={searchWord} />;
};

export default Dictionary;
