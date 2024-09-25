'use server';

import { revalidatePath } from 'next/cache';

export const findWord = async (formData: FormData) => {
  const { searchWord } = Object.fromEntries(formData);

  const request = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord.toString()}`,
    {
      method: 'GET',
    }
  );
  const response = await request.json();

  revalidatePath('/');
};
