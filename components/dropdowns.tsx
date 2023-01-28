import styles from "../styles/components/Dropdown.module.css";
import { useRef, useState, useEffect } from "react";

interface SortProps {
  options: string[];
  value: string;
  setValue: (e: any) => void;
}

export function Select({ options, value, setValue }: SortProps) {
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
    <div className={styles.select_group} ref={selectRef}>
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
      ) : null}
    </div>
  );
}

export function TokenSelect({ options, value, setValue }: SortProps) {
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
    <div className={styles.select_group} ref={selectRef}>
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
        <div className={styles.token_dialog}>
          <div className={styles.token_dialog_header}>
            <p className={styles.token_dialog_title}>Select Token</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              fill="currentColor"
              className={styles.icon}
            >
              <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
            </svg>
          </div>
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
      ) : null}
    </div>
  );
}
