import styles from "../../../styles/containers/guildhall/Accounts.module.css";
import Image from "next/image";
import Link from "next/link";
import { sounds } from "../../../shared/sounds";
import {
  UserIcon,
  MerchantIcon,
  MasterIcon,
  ShieldIcon,
  UserCircleIcon,
} from "../../../shared/icons";
import { displayAddress } from "../../../utils/address";

export const Accounts = () => {
  const { playClickSound } = sounds();
  const accounts = [
    {
      address: {
        starknet_id: "bob.stark",
        address:
          "0x07642A1c8D575B0c0f9a7AD7cCEb5517c02f36E5F3B36B25429Cc7C99383ed0a",
      },
      guilds: [
        {
          name: "Core Lords",
          emblem: "/emblem-example.png",
        },
        {
          name: "Core Lords",
          emblem: "/emblem-example.png",
        },
      ],
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
      address: {
        starknet_id: "bob.stark",
        address:
          "0x07642A1c8D575B0c0f9a7AD7cCEb5517c02f36E5F3B36B25429Cc7C99383ed0a",
      },
      guilds: [
        {
          name: "Core Lords",
          emblem: "/emblem-example.png",
        },
        {
          name: "Core Lords",
          emblem: "/emblem-example.png",
        },
      ],
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
          <th>Account</th>
          <th>Guilds</th>
          <th>Games</th>
          <th>Items</th>
          <th>Activity</th>
        </tr>
        {/* <div className={styles.dividor} /> */}
        {accounts.map((account, index) => (
          <Link
            href={"/guildhall/accounts/" + account.address?.address}
            passHref
            onClick={() => playClickSound()}
            key={index}
            className={styles.link}
          >
            <tr className={styles.guild_row} key={index}>
              <td>
                <div className={styles.guild_name}>
                  <div className={styles.user_icon}>
                    <UserCircleIcon />
                  </div>
                  <div className={styles.addresses}>
                    <p className={styles.account_id}>
                      {account.address?.starknet_id}
                    </p>
                    <p className={styles.account_address}>
                      {displayAddress(account.address?.address)}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <div className={styles.guilds}>
                  <p className={styles.guilds_number}>2</p>
                  <div className={styles.guilds_list}>
                    {account.guilds?.map((guild, index) => (
                      <div className={styles.guild} key={index}>
                        <div className={styles.guild_icon}>
                          <Image
                            alt="guild_icon"
                            src={guild.emblem}
                            fill={true}
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                        <p>{guild.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </td>
              <td>
                <div className={styles.game_area}>
                  <p>{account.games.length}</p>
                  <div className={styles.games}>
                    {account.games.map((game, index) => (
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
                  <p className={styles.member_master}>{account.items}</p>
                  <p className={styles.items_value}>~{account.items_value}</p>
                </div>
              </td>
              <td className={styles.activity}>
                <p>+50%</p>
                <img
                  src={"/chart-example.png"}
                  className={styles.activity_image}
                />
              </td>
            </tr>
          </Link>
        ))}
      </table>
    </div>
  );
};
