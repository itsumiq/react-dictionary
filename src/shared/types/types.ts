export interface MeaningsProps {
  partOfSpeech: string;
  definitions: Array<{ definition: string }>; // need to fill
  synonyms: string[];
}

interface PhoneticsProps {
  text: string;
  audio: string;
}

export interface ResponseProps {
  word: string;
  phonetic: string;
  phonetics: PhoneticsProps[];
  meanings: MeaningsProps[];
}
