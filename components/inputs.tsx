import styles from "../styles/components/Input.module.css";
import { Controller } from "react-hook-form";
import { TokenSelect } from "./dropdowns";
import { ReactElement } from "react";
import { useState } from "react";
import { Slider } from "@mui/material";

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

interface ControlledShortTextInputProps {
  name: string;
  control: any;
  defaultValue: any;
  rules: any;
  className: string;
  placeholder: string | undefined;
  icon: string | null;
}

export function ControlledShortTextInput({
  name,
  control,
  defaultValue,
  rules,
  className,
  placeholder,
  icon,
}: ControlledShortTextInputProps) {
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

interface ControlledLongTextInputProps {
  name: string;
  control: any;
  defaultValue: any;
  rules: any;
  className: string;
  placeholder: string | undefined;
  icon: string | null;
}

export function ControlledLongTextInput({
  name,
  control,
  defaultValue,
  rules,
  className,
  placeholder,
  icon,
}: ControlledLongTextInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { ref, value, onChange } }) => (
        <div className={className}>
          <div className={styles.group}>
            <textarea
              className={styles.long_input}
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

interface SliderInputProps {
  label?: string;
  maxValue: number;
  value: number | string | (string | number)[];
  onChange: (newValue: number | string | Array<number | string>) => void;
}

export const SliderInput = ({
  label = "",
  maxValue,
  value,
  onChange,
}: SliderInputProps) => {
  const handleSliderChange = (event: any, newValue: number | number[]) => {
    onChange(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      onChange(0);
    } else if (value > maxValue) {
      onChange(maxValue);
    }
  };

  const sliderStep = maxValue / 100;
  const inputStep = maxValue / 50;

  const sliderMarks = [
    {
      value: 0,
      label: "0%",
    },
    {
      value: maxValue,
      label: "100%",
    },
  ];
  return (
    <div className={styles.slider_area}>
      {label && <p className={styles.slider_label}>{label}</p>}
      <div className={styles.slider_inputs}>
        <div className={styles.slider}>
          <Slider
            value={typeof value === "number" ? value : 0}
            step={sliderStep}
            onChange={handleSliderChange}
            max={maxValue}
            marks={sliderMarks}
          />
        </div>
        <input
          className={styles.slider_input}
          value={value.toString()}
          onChange={handleInputChange}
          onBlur={handleBlur}
          max={maxValue}
          min={0}
        />
      </div>
    </div>
  );
};

interface TokenSliderInputProps {
  label?: string;
  maxValue: number;
  value: number | string | (string | number)[];
  onChange: (newValue: number | string | Array<number | string>) => void;
  tokenOptions: any[];
  token: any;
  setToken: (e: any) => void;
}

export const TokenSliderInput = ({
  label = "",
  maxValue,
  value,
  onChange,
  tokenOptions,
  token,
  setToken,
}: TokenSliderInputProps) => {
  const handleSliderChange = (event: any, newValue: number | number[]) => {
    onChange(newValue);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      onChange(0);
    } else if (value > maxValue) {
      onChange(maxValue);
    }
  };

  const sliderStep = maxValue / 100;
  const inputStep = maxValue / 50;

  const sliderMarks = [
    {
      value: 0,
      label: "0%",
    },
    {
      value: maxValue,
      label: "100%",
    },
  ];
  return (
    <div className={styles.slider_area}>
      {label && <p className={styles.slider_label}>{label}</p>}
      <div className={styles.slider_inputs}>
        <div className={styles.slider_token}>
          <TokenSelect
            options={tokenOptions}
            value={token}
            setValue={setToken}
          />
        </div>
        <div className={styles.slider}>
          <Slider
            value={typeof value === "number" ? value : 0}
            step={sliderStep}
            onChange={handleSliderChange}
            max={maxValue}
            marks={sliderMarks}
          />
        </div>
        <input
          className={styles.slider_input}
          value={value.toString()}
          onChange={handleInputChange}
          onBlur={handleBlur}
          max={maxValue}
          min={0}
        />
      </div>
    </div>
  );
};
