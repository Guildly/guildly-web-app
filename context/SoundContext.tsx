import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import useSoundLib from "use-sound";

export interface SoundState {
  /** The connected guild object. */
  musicPlaying?: boolean;
  /** The emblem image string. */
  toggleSound: () => void;
}

const MUSIC_INITIAL_STATE: SoundState = {
  musicPlaying: false,
  toggleSound: () => undefined,
};

const SoundContext = createContext<SoundState>(MUSIC_INITIAL_STATE);

export function useSound(): SoundState {
  return useContext(SoundContext);
}

export const useSoundContext = () => {
  const [musicPlaying, setMusicPlaying] = useState<boolean>(false);

  const toggleSound = useCallback(() => {
    const newValue = !musicPlaying;
    setMusicPlaying(newValue);
  }, [musicPlaying]);

  const [playBackground, { stop }] = useSoundLib("/sounds/broken_village.mp3", {
    soundEnabled: musicPlaying,
    volume: 0.2,
    loop: true,
  });

  // const [playNextBackground] = useSoundLib("/sounds/beatiful_village.mp3", {
  //   soundEnabled: musicPlaying,
  //   volume: 0.2,
  //   loop: true,
  // });

  useEffect(() => {
    if (!musicPlaying) {
      stop();
    } else {
      playBackground();
      // playNextBackground();
    }
  }, [musicPlaying, playBackground, stop]);

  return {
    musicPlaying,
    toggleSound,
  };
};

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const state = useSoundContext();
  return (
    <SoundContext.Provider value={state}>{children}</SoundContext.Provider>
  );
}
