import styles from "../../styles/components/icons/GuildEmblem.module.css";
import Image from "next/image";

interface GuildEmblemProps {
  address: string;
}

export const GuildEmblem = ({ address }: GuildEmblemProps) => {
  // const emblem =
  //   findEmblemByGuildAddress(guildAddress)?.trait?.replace(" ", "") || "";
  const emblem = "";
  return (
    <div className={styles.guild_emblem}>
      <Image
        src={emblem}
        fill={true}
        style={{ objectFit: "contain" }}
        alt="guild-emblem"
      />
    </div>
  );
};
