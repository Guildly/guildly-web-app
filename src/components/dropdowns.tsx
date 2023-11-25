import styles from "../styles/components/Dropdown.module.css";
import { useRef, useState, useEffect } from "react";
import { sounds } from "../shared/sounds";
import Image from "next/image";
import { ShortTextInput } from "./inputs";
import { Controller } from "react-hook-form";
import Link from "next/link";
import { SelectOption } from "../types";
import { DownChevronIcon, SearchIcon } from "../shared/icons";
import { SliderInput, TokenSliderInput } from "./inputs";
import { AlertIcon } from "../shared/icons";
import { keyValueExists } from "../utils/format";
import { FilterOption } from "./dropdowns/FilterOption";

interface SelectProps {
  options: string[];
  value: string;
  setValue: (e: any) => void;
  index?: number;
  setIndex?: (e: number) => void;
}

export function Select({
  options,
  value,
  setValue,
  index,
  setIndex,
}: SelectProps) {
  const [isSelected, setIsSelected] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const checkIfClickedOutside = (event: any) => {
    if (
      isSelected &&
      selectRef.current &&
      !selectRef.current.contains(event.target)
    ) {
      setIsSelected(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", checkIfClickedOutside, true);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside, true);
    };
  }, [isSelected]);

  return (
    <div ref={selectRef}>
      <button
        className={styles.select_button}
        onClick={() => setIsSelected(!isSelected)}
      >
        <p>{value}</p>
        <div className={styles.select_icon}>
          <DownChevronIcon />
        </div>
      </button>
      <div className={styles.select_dropdown_area}>
        <div
          className={
            isSelected
              ? [styles.select_dropdown, styles.active].join(" ")
              : styles.select_dropdown
          }
        >
          {options.map((option, index) => (
            <button
              className={styles.select_dropdown_button}
              key={index}
              onClick={() => {
                setValue(option);
                setIsSelected(!isSelected);
                setIndex ? setIndex(index) : null;
              }}
            >
              <p>{option}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ControlledSelectProps {
  name: string;
  control: any;
  defaultValue: any;
  rules: any;
  className: string;
  icon: string | null;
  options: string[];
}

export function ControlledSelect({
  name,
  control,
  defaultValue,
  rules,
  className,
  icon,
  options,
}: ControlledSelectProps) {
  const [isSelected, setIsSelected] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const checkIfClickedOutside = (event: any) => {
    if (
      isSelected &&
      selectRef.current &&
      !selectRef.current.contains(event.target)
    ) {
      setIsSelected(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", checkIfClickedOutside, true);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside, true);
    };
  }, [isSelected]);
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { ref, value, onChange } }) => (
        <div ref={selectRef}>
          <button
            className={styles.select_button}
            onClick={() => setIsSelected(!isSelected)}
          >
            <p>{value}</p>
            <div className={styles.select_icon}>
              <DownChevronIcon />
            </div>
          </button>
          {isSelected ? (
            <div className={styles.select_dropdown_area}>
              <div className={styles.select_dropdown}>
                {options.map((option, index) => (
                  <button
                    className={styles.select_dropdown_button}
                    key={index}
                    onClick={() => {
                      onChange(option);
                      setIsSelected(!isSelected);
                    }}
                  >
                    <p>{option}</p>
                  </button>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      )}
    />
  );
}

interface ControlledSelectIconsProps {
  name: string;
  control: any;
  defaultValue: any;
  rules: any;
  className: string;
  options: SelectOption[];
}

export function ControlledSelectIcons({
  name,
  control,
  defaultValue,
  rules,
  className,
  options,
}: ControlledSelectIconsProps) {
  const [isSelected, setIsSelected] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const checkIfClickedOutside = (event: any) => {
    if (
      isSelected &&
      selectRef.current &&
      !selectRef.current.contains(event.target)
    ) {
      setIsSelected(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", checkIfClickedOutside, true);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside, true);
    };
  }, [isSelected]);
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { ref, value, onChange } }) => (
        <div ref={selectRef}>
          <button
            className={styles.select_button}
            onClick={() => setIsSelected(!isSelected)}
          >
            {value.icon}
            <p>{value.text}</p>
            <div className={styles.select_icon}>
              <DownChevronIcon />
            </div>
          </button>
          <div className={styles.select_dropdown_area}>
            <div
              className={
                isSelected
                  ? [styles.select_dropdown, styles.active].join(" ")
                  : styles.select_dropdown
              }
            >
              {options.map((option, index) => (
                <button
                  className={styles.select_dropdown_button}
                  key={index}
                  onClick={() => {
                    onChange(option);
                    setIsSelected(!isSelected);
                  }}
                >
                  {option.icon}
                  <p>{option.text}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    />
  );
}

interface Token {
  name: string;
  image: string;
  symbol: string;
}

interface TokenSelectProps {
  options: Token[];
  value: Token | null;
  setValue: (e: any) => void;
}

export function TokenSelect({ options, value, setValue }: TokenSelectProps) {
  const [isSelected, setIsSelected] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const checkIfClickedOutside = (event: any) => {
    if (
      isSelected &&
      selectRef.current &&
      !selectRef.current.contains(event.target)
    ) {
      setIsSelected(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", checkIfClickedOutside, true);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside, true);
    };
  }, [isSelected]);

  const { playClickSound } = sounds();

  const [searchTokenValue, setSearchTokenValue] = useState("");

  const searchIcon = (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  );

  return (
    <div className={styles.select_group} ref={selectRef}>
      <button
        className={styles.token_select_button}
        onClick={() => {
          setIsSelected(!isSelected);
          playClickSound();
        }}
      >
        {value ? (
          <>
            <img src={value?.image} className={styles.token_image} />
            <p className={styles.token_content}>{value?.symbol}</p>
          </>
        ) : null}
        <div className={styles.select_icon}>
          <DownChevronIcon />
        </div>
      </button>
      <div
        className={
          isSelected
            ? [styles.dialog_background, styles.active].join(" ")
            : styles.dialog_background
        }
      >
        <div
          className={
            isSelected
              ? [styles.token_dialog, styles.active].join(" ")
              : styles.token_dialog
          }
          ref={selectRef}
        >
          <div className={styles.token_dialog_header}>
            <p className={styles.token_dialog_title}>Select Token</p>
            <button
              className={styles.close_button}
              onClick={() => {
                setIsSelected(false);
                playClickSound();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                fill="currentColor"
                className={styles.icon}
              >
                <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
              </svg>
            </button>
          </div>
          <div className={styles.token_search}>
            <ShortTextInput
              className={styles.search_input}
              content={searchTokenValue}
              setContent={setSearchTokenValue}
              label={"Search name or paste address"}
              icon={searchIcon}
            />
          </div>
          <div className={styles.token_buttons}>
            {options.map((option, index) => (
              <button
                className={
                  value?.symbol == option.symbol
                    ? [styles.token_button, styles.selected].join(" ")
                    : styles.token_button
                }
                key={index}
              >
                <Image
                  src={option.image}
                  alt="token-image"
                  width={30}
                  height={30}
                />
                <p>{option.symbol}</p>
              </button>
            ))}
          </div>
          <div className={styles.dividor} />
          <div className={styles.tokens_list}>
            {options.map((option, index) => (
              <button
                className={
                  value?.symbol == option.symbol
                    ? // ? styles.token_option_selected
                      [styles.token_option, styles.selected].join(" ")
                    : styles.token_option
                }
                key={index}
                onClick={() => {
                  setValue(option);
                  setIsSelected(!isSelected);
                }}
              >
                <Image
                  src={option.image}
                  alt="token-image"
                  width={30}
                  height={30}
                />
                <div className={styles.token_info}>
                  <p className={styles.token_name}>{option.name}</p>
                  <p className={styles.token_symbol}>{option.symbol}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface ControlledTokenSelectProps {
  name: string;
  control: any;
  defaultValue: any;
  options: Token[];
  selectedTokens: any[];
}

export function ControlledTokenSelect({
  name,
  control,
  defaultValue,
  options,
  selectedTokens,
}: ControlledTokenSelectProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { ref, value, onChange } }) => {
        const alreadySelected =
          value != "" ? keyValueExists(selectedTokens, "token", value) : false;
        return (
          <>
            <TokenSelect options={options} value={value} setValue={onChange} />
            <div
              className={
                alreadySelected
                  ? [styles.error_box, styles.active].join(" ")
                  : styles.error_box
              }
            >
              <div className={styles.error_icon}>
                <AlertIcon />
              </div>
              <p
                className={
                  alreadySelected
                    ? [styles.info_text, styles.active].join(" ")
                    : styles.info_text
                }
              >
                Token has already been selected.
              </p>
            </div>
          </>
        );
      }}
    />
  );
}

interface SearchDropdownProps {
  searchItems: any[];
}

export const SearchDropdown = ({ searchItems }: SearchDropdownProps) => {
  const { playClickSound } = sounds();
  return (
    <div className={styles.search_dropdown}>
      <div className={styles.search_section}>
        <div className={styles.section_header}>
          <p>Guilds</p>
        </div>
        <div className={styles.search_list}>
          {searchItems.map((_: any, index: number) => (
            <Link key={index} href="/guildhall/guilds/0x0" passHref>
              <div
                className={styles.search_item}
                onClick={() => playClickSound()}
              >
                <Image
                  src={"/emblem-example.png"}
                  alt="guild-icon"
                  width={30}
                  height={30}
                  className={styles.search_icon}
                />
                <div className={styles.search_content}>
                  <p>Core Lords</p>
                  <div className={styles.item_attributes}>
                    <div className={styles.attribute}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className={styles.attribute_icon}
                        fill="currentColor"
                      >
                        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                      </svg>
                      <p>90</p>
                      <p>Members</p>
                    </div>
                    <div className={styles.attribute}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className={styles.attribute_icon}
                        fill="currentColor"
                      >
                        <path d="M64 0C28.7 0 0 28.7 0 64V416c0 35.3 28.7 64 64 64H80l16 32h64l16-32H400l16 32h64l16-32h16c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM224 320c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80zm0 80c-88.4 0-160-71.6-160-160s71.6-160 160-160s160 71.6 160 160s-71.6 160-160 160zM480 221.3V336c0 8.8-7.2 16-16 16s-16-7.2-16-16V221.3c-18.6-6.6-32-24.4-32-45.3c0-26.5 21.5-48 48-48s48 21.5 48 48c0 20.9-13.4 38.7-32 45.3z" />
                      </svg>
                      <p>90</p>
                      <p>Items</p>
                    </div>
                    <div className={styles.attribute}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        className={styles.attribute_icon}
                        fill="currentColor"
                      >
                        <path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 248c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40zm-24 56c0 22.1-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z" />
                      </svg>
                      <p>90</p>
                      <p>Games</p>
                    </div>
                    <div className={styles.attribute}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className={styles.attribute_icon}
                        fill="currentColor"
                      >
                        <path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z" />
                      </svg>
                      <p>95th</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.search_section}>
        <div className={styles.section_header}>
          <p>Accounts</p>
        </div>
        {searchItems.map((_: any, index: number) => (
          <Link key={index} href="/guildhall/accounts/0x0" passHref>
            <div
              className={styles.search_item}
              onClick={() => playClickSound()}
            >
              <Image src={""} alt="guild-icon" width={30} height={30} />
              <div className={styles.search_content}>
                <p>Core Lords</p>
                <div className={styles.item_attributes}></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.search_section}>
        <div className={styles.section_header}>
          <p>Items</p>
        </div>
        {searchItems.map((_: any, index: number) => (
          <Link key={index} href="/bank/items/0x0" passHref>
            <div
              className={styles.search_item}
              key={index}
              onClick={() => playClickSound()}
            >
              <Image src={""} alt="guild-icon" width={30} height={30} />
              <div className={styles.search_content}>
                <p>Core Lords</p>
                <div className={styles.item_attributes}></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

interface FilterSelectDropdownProps {
  title: string;
  options: any[];
  search: boolean;
}

export const FilterSelectDropdown = ({
  title,
  options,
  search,
}: FilterSelectDropdownProps) => {
  const { playClickSound } = sounds();
  const [dropdownActive, setDropdownActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const searchedOptions = options.filter((option) => {
    if (searchValue === "") {
      return option;
    } else {
      if (option.toLowerCase().includes(searchValue.toLowerCase())) {
        return option;
      }
    }
  });

  return (
    <div className={styles.filter_area}>
      <div
        className={
          dropdownActive
            ? [styles.filter_row, styles.active].join(" ")
            : styles.filter_row
        }
        onClick={() => {
          setDropdownActive(!dropdownActive);
          playClickSound();
        }}
      >
        <p className={styles.filter_title}>{title}</p>
        <div
          className={
            dropdownActive
              ? [styles.filter_icon, styles.active].join(" ")
              : styles.filter_icon
          }
        >
          <DownChevronIcon />
        </div>
      </div>
      <div
        className={
          dropdownActive
            ? [styles.filter_content, styles.active].join(" ")
            : styles.filter_content
        }
      >
        {search ? (
          <div className={styles.filter_search_box}>
            <div className={styles.filter_search_icon}>
              <SearchIcon />
            </div>
            <input
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.currentTarget.value)}
              className={styles.filter_search_input}
            />
          </div>
        ) : null}
        {searchedOptions.map((option, index) => (
          <FilterOption option={option} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

interface FilterSliderDropdownProps {
  title: string;
  label: string;
}

export const FilterSliderDropdown = ({
  title,
  label,
}: FilterSliderDropdownProps) => {
  const { playClickSound } = sounds();
  const [dropdownActive, setDropdownActive] = useState(false);
  const [value, setValue] = useState<number | string | Array<number | string>>(
    0
  );

  return (
    <div className={styles.filter_area}>
      <div
        className={
          dropdownActive
            ? [styles.filter_row, styles.active].join(" ")
            : styles.filter_row
        }
        onClick={() => {
          setDropdownActive(!dropdownActive);
          playClickSound();
        }}
      >
        <p className={styles.filter_title}>{title}</p>
        <div
          className={
            dropdownActive
              ? [styles.filter_icon, styles.active].join(" ")
              : styles.filter_icon
          }
        >
          <DownChevronIcon />
        </div>
      </div>
      <div
        className={
          dropdownActive
            ? [styles.filter_content, styles.active].join(" ")
            : styles.filter_content
        }
      >
        <SliderInput
          label={label}
          maxValue={100}
          value={value}
          onChange={setValue}
        />
        <button className={styles.apply_button}>
          <p>Apply</p>
        </button>
      </div>
    </div>
  );
};

interface FilterTokenSliderDropdownProps {
  title: string;
  label: string;
  tokenOptions: any[];
  token: any;
  setToken: (e: any) => void;
}

export const FilterTokenSliderDropdown = ({
  title,
  label,
  tokenOptions,
  token,
  setToken,
}: FilterTokenSliderDropdownProps) => {
  const { playClickSound } = sounds();
  const [dropdownActive, setDropdownActive] = useState(false);
  const [value, setValue] = useState<number | string | Array<number | string>>(
    0
  );

  return (
    <div className={styles.filter_area}>
      <div
        className={
          dropdownActive
            ? [styles.filter_row, styles.active].join(" ")
            : styles.filter_row
        }
        onClick={() => {
          setDropdownActive(!dropdownActive);
          playClickSound();
        }}
      >
        <p className={styles.filter_title}>{title}</p>
        <div
          className={
            dropdownActive
              ? [styles.filter_icon, styles.active].join(" ")
              : styles.filter_icon
          }
        >
          <DownChevronIcon />
        </div>
      </div>
      <div
        className={
          dropdownActive
            ? [styles.filter_content, styles.active].join(" ")
            : styles.filter_content
        }
      >
        <TokenSliderInput
          label={label}
          maxValue={100}
          value={value}
          onChange={setValue}
          tokenOptions={tokenOptions}
          token={token}
          setToken={setToken}
        />
        <button className={styles.apply_button}>
          <p>Apply</p>
        </button>
      </div>
    </div>
  );
};
