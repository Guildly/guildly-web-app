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

  const [brokenVillagePlaying, setBrokenVillagePlaying] =
    useState<boolean>(false);
  const [beautifulVillagePlaying, setBeautifulVillagePlaying] =
    useState<boolean>(false);

  const toggleSound = useCallback(() => {
    const newValue = !musicPlaying;
    setMusicPlaying(newValue);
  }, [musicPlaying]);

  const [
    playBrokenVillage,
    { stop: stopBrokenVillage, duration: durationBrokenVillage },
  ] = useSoundLib("/sounds/broken_village.mp3", {
    soundEnabled: musicPlaying,
    volume: 0.2,
    loop: false,
  });

  const [
    playBeautifulVillage,
    { stop: stopBeautifulVillage, duration: durationBeatifulVillage },
  ] = useSoundLib("/sounds/beautiful_village.mp3", {
    soundEnabled: musicPlaying,
    volume: 0.2,
    loop: false,
  });

  const [
    playElvenForest,
    { stop: stopElvenForest, duration: durationElvenForest },
  ] = useSoundLib("/sounds/elven_forest.mp3", {
    soundEnabled: musicPlaying,
    volume: 0.2,
    loop: false,
  });

  useEffect(() => {
    if (!musicPlaying) {
      stopBrokenVillage();
      stopBeautifulVillage();
      stopElvenForest();
    } else {
      playBrokenVillage();
      // setInterval(
      //   () => {
      //     playBeautifulVillage();
      //     setInterval(
      //       () => {
      //         playElvenForest();
      //       },
      //       durationBeatifulVillage ? durationBeatifulVillage : 0
      //     );
      //   },
      //   durationBrokenVillage ? durationBrokenVillage : 0
      // );
    }
  }, [musicPlaying]);

  console.log(musicPlaying);

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
