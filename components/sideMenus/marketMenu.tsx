import left_styles from "../../styles/sidemenu/MarketLeft.module.css";
import right_styles from "../../styles/sidemenu/MarketRight.module.css";
import { ShortTextInput, LongTextInput } from "../inputs";

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
  return (
    <div className={left_styles.menu}>
      <div className={left_styles.box}>
        <div className={left_styles.header} />
        <div className={left_styles.content_container}>
          <div className={left_styles.content_title}>
            <p>Filters</p>
          </div>
          <div className={left_styles.filters_container}>
            <div className={left_styles.sort}>
              <p>Value Low to High</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={left_styles.sort_icon}
                fill="currentColor"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>
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
                <div className={left_styles.filter_box}>
                  <div className={left_styles.filter_row}>
                    <p className={left_styles.filter_title}>Standard:</p>
                    <div className={left_styles.attributes}>
                      <div
                        className={
                          tokenStandardFilter == "ERC20"
                            ? left_styles.attribute_selected
                            : left_styles.attribute
                        }
                        onClick={() => setTokenStandardFilter("ERC20")}
                      >
                        <p>ERC20</p>
                      </div>
                      <div
                        className={
                          tokenStandardFilter == "ERC721"
                            ? left_styles.attribute_selected
                            : left_styles.attribute
                        }
                        onClick={() => setTokenStandardFilter("ERC721")}
                      >
                        <p>ERC721</p>
                      </div>
                      <div
                        className={
                          tokenStandardFilter == "ERC1155"
                            ? left_styles.attribute_selected
                            : left_styles.attribute
                        }
                        onClick={() => setTokenStandardFilter("ERC1155")}
                      >
                        <p>ERC1155</p>
                      </div>
                    </div>
                  </div>
                  <div className={left_styles.filter_row}>
                    <p className={left_styles.filter_title}>Game:</p>
                    <ShortTextInput
                      className={left_styles.short_input}
                      content={gameFilter}
                      setContent={setGameFilter}
                      label=""
                      icon={null}
                    />
                  </div>
                </div>
              </div>
              <div className={left_styles.filter_section}>
                <p className={left_styles.section_header}>Game</p>
                <div className={left_styles.filter_box}>
                  <div className={left_styles.filter_row}>
                    <p className={left_styles.filter_title}>Genre:</p>
                    <ShortTextInput
                      className={left_styles.short_input}
                      content={genreFilter}
                      setContent={setGenreFilter}
                      label=""
                      icon={null}
                    />
                  </div>
                </div>
              </div>
              <div className={left_styles.filter_section}>
                <p className={left_styles.section_header}>Account</p>
                <div className={left_styles.filter_box}>
                  <div className={left_styles.filter_row}>
                    <p className={left_styles.filter_title}>Address:</p>
                    <ShortTextInput
                      className={left_styles.short_input}
                      content={addressFilter}
                      setContent={setAddressFilter}
                      label=""
                      icon={null}
                    />
                  </div>
                </div>
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
    <>
      <div className={right_styles.menu}>
        <div className={right_styles.box}>
          <div className={right_styles.header} />
          <div className={right_styles.content_container}>
            <div className={right_styles.content_title}>
              <p>Notice Board</p>
            </div>
            <div className={right_styles.notices_container}></div>
          </div>
        </div>
      </div>
    </>
  );
};
