import { useSound } from "use-sound";

export const sounds = () => {
  const [playDoorSound] = useSound("../sounds/door-open-close.mp3", {
    volume: 0.1,
  });
  const [playCoinsSound] = useSound("../sounds/coins.mp3", {
    volume: 0.1,
  });
  const [playSwordSound] = useSound("../sounds/draw-sword.mp3", {
    volume: 0.1,
  });
  const [playGavelSound] = useSound("../sounds/gavel.mp3", {
    volume: 0.1,
  });
  const [playClickSound] = useSound("../sounds/click.mp3", {
    volume: 0.2,
  });
  const [playSlidingDoorSound] = useSound("../sounds/sliding-door.mp3", {
    volume: 0.2,
  });
  const [playGuildSound] = useSound("../sounds/apps_atlas_public_shield.mp3", {
    volume: 0.2,
  });
  return {
    playDoorSound,
    playCoinsSound,
    playSwordSound,
    playGavelSound,
    playClickSound,
    playSlidingDoorSound,
    playGuildSound,
  };
};
