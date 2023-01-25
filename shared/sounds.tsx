import { useSound } from "use-sound";

export const sounds = () => {
  const [playDoorSound] = useSound("../sounds/door-open-close.mp3");
  const [playCoinsSound] = useSound("../sounds/coins.mp3");
  const [playSwordSound] = useSound("../sounds/draw-sword.mp3");
  const [playGavelSound] = useSound("../sounds/gavel.mp3");
  const [playClickSound] = useSound("../sounds/click.mp3");
  const [playSlidingDoorSound] = useSound("../sounds/sliding-door.mp3");
  const [playGuildSound] = useSound("../sounds/apps_atlas_public_shield.mp3");
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
