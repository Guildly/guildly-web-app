import left_styles from "../../styles/sidemenu/MarketLeft.module.css";
import right_styles from "../../styles/sidemenu/MarketRight.module.css";
import {
  FilterSelectDropdown,
  FilterSliderDropdown,
  FilterTokenSliderDropdown,
} from "../dropdowns";

interface MarketLeftMenuProps {
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

export const MarketLeftMenu = ({
  tab,
  setTab,
  tokenStandardFilter,
  setTokenStandardFilter,
  gameFilter,
  setGameFilter,
  genreFilter,
  setGenreFilter,
  addressFilter,
  setAddressFilter,
}: MarketLeftMenuProps) => {
  const tokenOptions = [
    {
      name: "Ether",
      image: "/eth 2.png",
      symbol: "ETH",
    },
    {
      name: "Lords",
      image: "/Lords.png",
      symbol: "LORDS",
    },
  ];
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
              <p className={left_styles.section_header}>Policies</p>
              <div className={left_styles.section_list}>
                <FilterSelectDropdown
                  title={"Roles"}
                  options={["Merchant", "Journeyman", "Master", "Guild"]}
                  search={false}
                />
                <FilterTokenSliderDropdown
                  title={"Reward"}
                  label={"Reward %"}
                  tokenOptions={tokenOptions}
                  token={null}
                  setToken={() => {}}
                />
                <FilterTokenSliderDropdown
                  title={"Payment"}
                  label={"Payment Amount"}
                  tokenOptions={tokenOptions}
                  token={null}
                  setToken={() => {}}
                />
              </div>
            </div>
            <div className={left_styles.filter_section}>
              <p className={left_styles.section_header}>Task</p>
              <div className={left_styles.section_list}>
                <FilterSelectDropdown
                  title={"Game"}
                  options={["Eternum", "Influence", "Loot Survivor"]}
                  search={true}
                />
                <FilterSelectDropdown
                  title={"Task"}
                  options={["Harvest Food", "Build Army", "Attack"]}
                  search={true}
                />
                <FilterSelectDropdown
                  title={"Genre"}
                  options={["FPS", "MMO", "Strategy", "Racing"]}
                  search={true}
                />
              </div>
            </div>
            <div className={left_styles.filter_section}>
              <p className={left_styles.section_header}>Guilds</p>
              <div className={left_styles.section_list}>
                <FilterSelectDropdown
                  title={"Name"}
                  options={["Core Lords", "Adalia United"]}
                  search={true}
                />
                <FilterSliderDropdown
                  title={"Reputation"}
                  label={"Reputation Score"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MarketRightMenu = () => {
  return (
    <div className={right_styles.box}>
      <div className={right_styles.header} />
      <div className={right_styles.content_title}>
        <p>Notice Board</p>
      </div>
      <div className={right_styles.content_container}></div>
    </div>
  );
};
