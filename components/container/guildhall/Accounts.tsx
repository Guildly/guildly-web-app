import styles from "../../../styles/containers/guildhall/Guilds.module.css";
import Image from "next/image";
import Link from "next/link";
import { sounds } from "../../../shared/sounds";

export const Accounts = () => {
  const { playClickSound } = sounds();
  const guilds = [
    {
      rank: 1,
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      address: "0x0",
      games: [
        {
          name: "Influence",
          image: "/influence_logo.png",
        },
        { name: "Eternum", image: "/eternum_logo.svg" },
        { name: "Age of Eykar", image: "/ageofeykar_logo.svg" },
        { name: "NoGame", image: "/nogame_logo.svg" },
      ],
      master: "master.stark",
      members: ["bob.stark", "alice.stark"],
      items: 1000,
      items_value: "$20,000",
      fees: {
        owner: "90%",
        user: "7%",
        admin: "2%",
        guild: "1%",
      },
      governance: "Item based",
      treasury: "$800M",
      activity: "test",
    },
    {
      rank: 2,
      guild: "Core Lords",
      guild_image: "/token_symbol.svg",
      games: [
        {
          name: "Influence",
          image: "/influence_logo.png",
        },
        { name: "Eternum", image: "/eternum_logo.svg" },
        { name: "Age of Eykar", image: "/ageofeykar_logo.svg" },
        { name: "NoGame", image: "/nogame_logo.svg" },
      ],
      master: "master.stark",
      members: ["bob.stark", "alice.stark"],
      items: 1000,
      items_value: "$20,000",
      fees: {
        owner: "90%",
        user: "7%",
        admin: "2%",
        guild: "1%",
      },
      governance: "Item based",
      treasury: "$800M",
      activity: "test",
    },
  ];
  return (
    <div className={styles.container}>
      <table>
        <tr className={styles.header}>
          <th>Rank</th>
          <th>Guild</th>
          <th>Games</th>
          <th>Items</th>
          <th>Members</th>
          <th>Average Split</th>
          <th>Treasury</th>
          <th>Activity</th>
        </tr>
        {/* <div className={styles.dividor} /> */}
        {guilds.map((guild, index) => (
          <Link
            href={"/guildhall/guilds/" + guild.address}
            passHref
            onClick={() => playClickSound()}
            key={index}
            className={styles.link}
          >
            <tr className={styles.guild_row} key={index}>
              <td className={styles.rank}>{guild.rank}</td>
              <td>
                <div className={styles.guild_name}>
                  <Image
                    src={guild.guild_image}
                    alt="guild-image"
                    width={40}
                    height={40}
                  />
                  {guild.guild}
                </div>
              </td>
              <td>
                <div className={styles.master}>
                  <p>{guild.games.length}</p>
                  <div className={styles.games}>
                    {guild.games.map((game, index) => (
                      <div className={styles.game} key={index}>
                        <Image
                          className={styles.game_image}
                          color={"white"}
                          src={game.image}
                          alt="game-image"
                          width={20}
                          height={20}
                        />
                        {/* <p>{game.name}</p> */}
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.games_box}></div>
              </td>
              <td>
                <div className={styles.items}>
                  <p className={styles.member_master}>{guild.items}</p>
                  <p className={styles.items_value}>~ {guild.items_value}</p>
                </div>
              </td>
              <td className={styles.members}>
                <div className={styles.master}>
                  <p className={styles.member_master}>Master:</p>
                  <p className={styles.address}>{guild.master}</p>
                </div>
                <div className={styles.master}>
                  <p className={styles.member_master}>{guild.members.length}</p>
                  <p className={styles.address}>
                    {guild.members[0]}, {guild.members[1]}
                  </p>
                </div>
              </td>
              <td className={styles.fees}>
                <div className={styles.fee_row}>
                  <p className={styles.role}>Owner:</p>{" "}
                  <p className={styles.split}>{guild.fees.owner}</p>
                </div>
                <div className={styles.fee_row}>
                  <p className={styles.role}>User:</p>{" "}
                  <p className={styles.split}>{guild.fees.user}</p>
                </div>
                <div className={styles.fee_row}>
                  <p className={styles.role}>Admin:</p>{" "}
                  <p className={styles.split}>{guild.fees.admin}</p>
                </div>
                <div className={styles.fee_row}>
                  <p className={styles.role}>Guild:</p>{" "}
                  <p className={styles.split}>{guild.fees.guild}</p>
                </div>
              </td>
              <td>{guild.treasury}</td>
              <td>{guild.activity}</td>
            </tr>
          </Link>
        ))}
      </table>
    </div>
  );
};
