import styles from "../styles/components/Input.module.css";
import { Controller } from "react-hook-form";
import { TokenSelect } from "./dropdowns";
import { ReactElement } from "react";
import { useState } from "react";

interface TextInputProps {
  className: string;
  content: string;
  setContent: (e: string) => void;
  label: string | undefined;
  icon: ReactElement | null;
}

export function ShortTextInput({
  className,
  content,
  setContent,
  label,
  icon,
}: TextInputProps) {
  return (
    <div className={className}>
      <div className={styles.group}>
        {icon ? <div className={styles.icon}>{icon}</div> : null}
        <input
          className={styles.input}
          type="text"
          required
          value={content}
          placeholder={label}
          onChange={(event) => {
            if (event.target.value.length < 32) setContent(event.target.value);
          }}
        />
      </div>
    </div>
  );
}

export function LongTextInput({
  className,
  content,
  setContent,
  label,
  icon,
}: TextInputProps) {
  return (
    <div className={className}>
      <div className={styles.group}>
        <input
          className={styles.input}
          type="text"
          required
          value={content}
          placeholder={label}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <span className={styles.highlight}></span>
        <span className={styles.bar}></span>
      </div>
    </div>
  );
}

interface ControlledTextInputProps {
  name: string;
  control: any;
  defaultValue: any;
  rules: any;
  className: string;
  placeholder: string | undefined;
  icon: string | null;
}

export function ControlledTextInput({
  name,
  control,
  defaultValue,
  rules,
  className,
  placeholder,
  icon,
}: ControlledTextInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { ref, value, onChange } }) => (
        <div className={className}>
          <div className={styles.group}>
            <input
              className={styles.input}
              type="text"
              required
              value={value}
              placeholder={placeholder}
              onChange={onChange}
            />
            <span className={styles.highlight}></span>
            <span className={styles.bar}></span>
          </div>
        </div>
      )}
    />
  );
}

export function ControlledTokenInput({
  name,
  control,
  defaultValue,
  rules,
  className,
  placeholder,
  options,
  value,
}: any) {
  const [token, setToken] = useState(null);
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { ref, value, onChange } }) => (
        <div className={styles.token_group}>
          <input
            className={styles.token_input}
            type="text"
            required
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
          <TokenSelect options={options} value={token} setValue={setToken} />
        </div>
      )}
    />
  );
}
