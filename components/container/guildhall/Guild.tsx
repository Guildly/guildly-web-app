import styles from "../../../styles/containers/guildhall/Guild.module.css";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Select } from "../../dropdowns";

export const Guild = () => {
  const router = useRouter();
  const { pid } = router.query;

  const [feeRole, setFeeRole] = useState("Owner");
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.guild_emblem}>
          <Image
            src={"/token_symbol.png"}
            alt="guild-image"
            width={100}
            height={100}
          />
        </div>
        <div className={styles.basic_info}>
          <p className={styles.guild_name}>Core Lords</p>
          <div className={styles.master}>
            <p className={styles.master_title}>Master:</p>
            <p className={styles.master_content}>Starknetdev</p>
          </div>
          <div className={styles.master}>
            <p className={styles.master_title}>Rank:</p>
            <p className={styles.master_content}>20</p>
          </div>
        </div>
        <div className={styles.category}>
          <p className={styles.category_title}>Games</p>
          <div className={styles.category_content}>
            <div className={styles.game}>
              <Image
                src={"/influence_logo.png"}
                alt="game_image"
                width={20}
                height={20}
              />
              <p className={styles.category_content_text}>Influence</p>
            </div>
          </div>
        </div>
        <div className={styles.category}>
          <p className={styles.category_title}>Members</p>
          <div className={styles.category_content}>
            <p className={styles.category_content_text}>alice.stark</p>
            <p className={styles.category_content_text}>bob.stark</p>
          </div>
        </div>
        <div className={styles.category}>
          <p className={styles.category_title}>Treasury</p>
          <p className={styles.treasury_balance}>$800M</p>
        </div>
      </div>
      <div className={styles.bank_row}>
        <div className={styles.bank}>
          <p className={styles.category_title}>Bank</p>
          <div className={styles.bank_tokens}>
            <p>Tokens go here</p>
          </div>
        </div>
        <div className={styles.council}>
          <p className={styles.category_title}>Council</p>
          <div className={styles.proposals_box}></div>
        </div>
      </div>
      <div className={styles.fee_rates}>
        <div className={styles.fee_rates_header}>
          <p className={styles.category_title}>Fee Rates</p>
          <Select
            options={["Owner", "User", "Admin", "Guild"]}
            value={feeRole}
            setValue={setFeeRole}
          />
        </div>
      </div>
    </div>
  );
};
