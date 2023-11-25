import styles from "../../../styles/containers/guildhall/Accounts.module.css";
import { useEffect, useState } from "react";
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
import { displayAddress, padAddress } from "../../../utils/address";
import {
  fetchAspectNfts,
  getNftPicture,
} from "../../../features/accountNfts/fetchNfts";
import { AspectNftAsset } from "../../../features/accountNfts/model";
import { useAccount } from "@starknet-react/core";

export const Items = () => {
  const { playClickSound } = sounds();
  const [accountTokens, setAccountTokens] = useState<AspectNftAsset[] | null>(
    null
  );
  const [fetchNftsError, setFetchNftsError] = useState(false);
  const { address: accountAddress } = useAccount();

  useEffect(() => {
    fetchAspectNfts(accountAddress ? padAddress(accountAddress) : "0x0").then(
      (data) => {
        setAccountTokens(data.assets);
      },
      (err) => {
        setFetchNftsError(true);
      }
    );
  }, [accountTokens]);
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
        {accountTokens && accountAddress
          ? accountTokens.map((token, index) => (
              <Link
                href={"/bank/items/" + token.contract.contract_address}
                passHref
                onClick={() => playClickSound()}
                key={index}
                className={styles.link}
              >
                <tr className={styles.guild_row} key={index}>
                  <td>
                    <div className={styles.guild_name}>
                      <div className={styles.token_icon}>
                        <Image
                          src={getNftPicture(token)}
                          alt="guild-image"
                          fill={true}
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <div className={styles.addresses}>
                        <p className={styles.account_id}>{token.name}</p>
                        <p className={styles.account_address}>
                          {displayAddress(token.contract.contract_address)}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={styles.guilds}>
                      <p className={styles.guilds_number}>2</p>
                      <div className={styles.guilds_list}>
                        {/* {account.guilds?.map((guild, index) => (
                          <div className={styles.guild}>
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
                        ))} */}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className={styles.game_area}>
                      {/* <p>{account.games.length}</p> */}
                      <div className={styles.games}></div>
                    </div>
                    <div className={styles.games_box}></div>
                  </td>
                  <td>
                    <div className={styles.items}>
                      {/* <p className={styles.member_master}>{account.items}</p> */}
                      <p className={styles.items_value}>
                        {/* ~{account.items_value} */}
                      </p>
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
            ))
          : null}
      </table>
    </div>
  );
};
