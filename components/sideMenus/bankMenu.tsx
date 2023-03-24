import left_styles from "../../styles/sidemenu/BankLeft.module.css";
import right_styles from "../../styles/sidemenu/BankRight.module.css";
import { useState } from "react";
import { FilterSelectDropdown } from "../dropdowns";

interface BankLeftMenuProps {
  tab: string;
  setTab: (tab: string) => void;
  tokenStandardFilter: string;
  setTokenStandardFilter: (tab: string) => void;
  gameFilter: string;
  setGameFilter: (game: string) => void;
  genreFilter: string;
  setGenreFilter: (genre: string) => void;
  addressFilter: string;
  setAddressFilter: (address: string) => void;
}

export const BankLeftMenu = ({ tab, setTab }: BankLeftMenuProps) => {
  return (
    <div className={left_styles.box}>
      <div className={left_styles.content_container}>
        <div className={left_styles.content_title}>
          <p>Filters</p>
        </div>
        <div className={left_styles.filters_container}>
          <div className={left_styles.tabs}>
            <p
              className={
                tab == "Account" ? left_styles.tab_active : left_styles.tab
              }
              onClick={() => setTab("Account")}
            >
              Account
            </p>
            <p
              className={
                tab == "Guild" ? left_styles.tab_active : left_styles.tab
              }
              onClick={() => setTab("Guild")}
            >
              Guild
            </p>
          </div>
          <div className={left_styles.filters_list}>
            <div className={left_styles.filter_section}>
              <p className={left_styles.section_header}>Item</p>
              <div className={left_styles.section_list}>
                <FilterSelectDropdown
                  title={"Standard"}
                  options={["ERC20", "ERC721", "ERC1155"]}
                  search={false}
                />
                <FilterSelectDropdown
                  title={"Game"}
                  options={["Eternum", "Influence", "Loot Survivor"]}
                  search={true}
                />
                <FilterSelectDropdown
                  title={"Name"}
                  options={["Zhusa-Letepo", "Adalia Prime", "Long Sword"]}
                  search={true}
                />
              </div>
            </div>
            <div className={left_styles.filter_section}>
              <p className={left_styles.section_header}>Game</p>
              <div className={left_styles.section_list}>
                <FilterSelectDropdown
                  title={"Standard"}
                  options={["ERC20", "ERC721", "ERC1155"]}
                  search={false}
                />
                <FilterSelectDropdown
                  title={"Game"}
                  options={["Eternum", "Influence", "Loot Survivor"]}
                  search={true}
                />
                <FilterSelectDropdown
                  title={"Name"}
                  options={["Zhusa-Letepo", "Adalia Prime", "Long Sword"]}
                  search={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BankRightMenu = () => {
  return (
    <div className={right_styles.box}>
      <div className={right_styles.header} />
      <div className={right_styles.content_container}>
        <div className={right_styles.content_title}>
          <p>Storage</p>
        </div>
        <div className={right_styles.content_title}>
          <p>8</p>
        </div>
        <div className={right_styles.storage_container}>
          <div className={right_styles.info_section}>
            <p className={right_styles.section_header}>Current Value</p>
            <div className={right_styles.section_divider} />
          </div>
          <div className={right_styles.info_section}>
            <p className={right_styles.section_header}>Storage Keys</p>
          </div>
        </div>
      </div>
    </div>
  );
};
