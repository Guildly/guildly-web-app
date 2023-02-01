import styles from "../styles/components/Dropdown.module.css";
import { useRef, useState, useEffect } from "react";
import { sounds } from "../shared/sounds";
import Image from "next/image";
import { ShortTextInput } from "./inputs";
import { Controller } from "react-hook-form";

interface SelectProps {
  options: string[];
  value: string;
  setValue: (e: any) => void;
}

export function Select({ options, value, setValue }: SelectProps) {
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={styles.select_icon}
          fill="currentColor"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </button>
      {isSelected ? (
        <div className={styles.select_dropdown_area}>
          <div className={styles.select_dropdown}>
            {options.map((option, index) => (
              <button
                className={styles.select_dropdown_button}
                key={index}
                onClick={() => {
                  setValue(option);
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className={styles.select_icon}
              fill="currentColor"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
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

interface Token {
  name: string;
  image: string;
  symbol: string;
}

interface TokenSelectProps {
  options: Token[];
  value: Token;
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
        <p>{value.symbol}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className={styles.select_icon}
          fill="currentColor"
        >
          <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
        </svg>
      </button>
      {isSelected ? (
        <div className={styles.dialog_background}>
          <div className={styles.token_dialog} ref={selectRef}>
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
                <button className={styles.token_button} key={index}>
                  <Image
                    src={option.image}
                    alt="token-image"
                    width={30}
                    height={30}
                  />
                  <p>ETH</p>
                </button>
              ))}
            </div>
            <div className={styles.dividor} />
            <div className={styles.tokens_list}>
              {options.map((option, index) => (
                <button
                  className={styles.token_option}
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
      ) : null}
    </div>
  );
}
