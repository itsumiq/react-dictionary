'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const getWord = async (formData: FormData) => {
  const { searchWord } = Object.fromEntries(formData);

  revalidatePath('/');
  redirect(`/dictionary/${searchWord}`);
};
