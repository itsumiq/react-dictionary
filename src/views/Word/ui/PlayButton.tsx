'use client';

import { useRef, useState } from 'react';

import { Play } from 'lucide-react';

interface PlayButtonProps {
  src: string;
}

export const PlayButton = ({ src }: PlayButtonProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playback, setPlayBack] = useState(true);

  const handleClick = () => {
    const audioCurrent = audioRef.current;
    setPlayBack(!playback);

    if (audioCurrent) {
      if (playback) {
        audioCurrent.play();
      } else {
        audioCurrent.pause();
      }
    }
  };

  return (
    <>
      <audio src={src} ref={audioRef} onEnded={() => setPlayBack(!playback)}></audio>
      <button
        className="flex size-[4.125rem] items-center justify-center rounded-full border border-pink"
        onClick={handleClick}
      >
        <Play size="1.875rem" className="text-pink" />
      </button>
    </>
  );
};
