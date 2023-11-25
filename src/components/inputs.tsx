import styles from "../styles/components/Input.module.css";
import { Controller } from "react-hook-form";
import { TokenSelect } from "./dropdowns";
import { ReactElement, useState, useEffect } from "react";
import { Slider } from "@mui/material";
import { sounds } from "../shared/sounds";
import { displayAddress } from "../utils/address";
import { AlertIcon } from "../shared/icons";

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
      </div>
    </div>
  );
}

interface ControlledShortTextInputProps {
  name: string;
  control: any;
  defaultValue: any;
  rules?: any;
  className?: string;
  placeholder: string | undefined;
  icon?: string | null;
  type?: string;
  disabled?: boolean;
}

export function ControlledShortTextInput({
  name,
  control,
  defaultValue,
  rules,
  className,
  placeholder,
  icon,
  type,
  disabled,
}: ControlledShortTextInputProps) {
  const [isOnFocus, setIsOnFocus] = useState(false);
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { ref, value, onChange }, fieldState: { error } }) => {
        return (
          <div className={className}>
            <div
              className={
                disabled
                  ? [styles.group, styles.disabled].join(" ")
                  : isOnFocus
                  ? [styles.group, styles.focus].join(" ")
                  : value.length >= 1 && !error
                  ? [styles.group, styles.valid].join(" ")
                  : styles.group
              }
            >
              <input
                className={styles.input}
                type={type ? type : "text"}
                required
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                disabled={disabled}
                onFocus={() => setIsOnFocus(true)}
                onBlur={() => setIsOnFocus(false)}
              />
            </div>
            <div
              className={
                error && error.type != "required"
                  ? [styles.error_box, styles.active].join(" ")
                  : styles.error_box
              }
            >
              <div className={styles.error_icon}>
                <AlertIcon />
              </div>
              <p
                className={
                  error && error.type != "required"
                    ? [styles.info_text, styles.active].join(" ")
                    : styles.info_text
                }
              >
                {error?.message}
              </p>
            </div>
          </div>
        );
      }}
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
  const [isOnFocus, setIsOnFocus] = useState(false);
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { ref, value, onChange }, fieldState: { error } }) => (
        <div className={className}>
          <div
            className={
              value.length > 1 && !error
                ? [styles.group, styles.valid].join(" ")
                : isOnFocus
                ? [styles.group, styles.focus].join(" ")
                : styles.group
            }
          >
            <textarea
              className={styles.long_input}
              required
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              onFocus={() => setIsOnFocus(true)}
              onBlur={() => setIsOnFocus(false)}
            />
          </div>
        </div>
      )}
    />
  );
}

interface ControlledSearchInputProps {
  name: string;
  control: any;
  defaultValue: any;
  rules: any;
  className: string;
  placeholder: string | undefined;
  icon: string | null;
  options: any[];
}

export function ControlledSearchInput({
  name,
  control,
  defaultValue,
  rules,
  className,
  placeholder,
  icon,
  options,
}: ControlledSearchInputProps) {
  const { playClickSound } = sounds();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { ref, value, onChange }, fieldState: { error } }) => {
        const searchedOptions = options.filter((option) => {
          if (value === "") {
            return option;
          } else {
            if (option.primary.toLowerCase().includes(value.toLowerCase())) {
              return option;
            }
          }
        });
        const isActive =
          value.toString().length >= 3 && searchedOptions.length > 0;
        return (
          <div className={className}>
            <div
              className={
                value.length > 1 && !error
                  ? [styles.group, styles.valid].join(" ")
                  : styles.group
              }
            >
              <input
                className={styles.input}
                type="text"
                required
                value={value}
                placeholder={placeholder}
                onChange={onChange}
              />
            </div>
            <div
              className={
                error && error.type != "required"
                  ? [styles.error_box, styles.active].join(" ")
                  : styles.error_box
              }
            >
              <div className={styles.error_icon}>
                <AlertIcon />
              </div>
              <p
                className={
                  error && error.type != "required"
                    ? [styles.info_text, styles.active].join(" ")
                    : styles.info_text
                }
              >
                {error?.message}
              </p>
            </div>
            <div
              className={
                isActive
                  ? [styles.search_dropdown, styles.active].join(" ")
                  : styles.search_dropdown
              }
            >
              {searchedOptions.map((option, index) => (
                <div
                  className={styles.search_item}
                  key={index}
                  onClick={() => {
                    playClickSound();
                    onChange(option.secondary);
                  }}
                >
                  <p className={styles.search_item_primary}>{option.primary}</p>
                  <p className={styles.search_item_secondary}>
                    {option.secondary.startsWith("0x")
                      ? displayAddress(option.secondary)
                      : option.secondary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      }}
    />
  );
}

interface Token {
  name: string;
  image: string;
  symbol: string;
}

interface ControlledTokenInputProps {
  name: string;
  control: any;
  defaultValue: any;
  rules: any;
  className: string;
  placeholder: string | undefined;
  options: Token[];
  value: any;
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
}: ControlledTokenInputProps) {
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

interface ControlledSliderInput {
  name: string;
  control: any;
  defaultValue: any;
  rules: any;
  className?: string;
  placeholder: string | undefined;
  options: Token[];
  maxValue: number;
  sliderMarks?: any;
  percent?: boolean;
  disabled?: boolean;
}

export function ControlledSliderInput({
  name,
  control,
  defaultValue,
  rules,
  placeholder,
  options,
  maxValue,
  sliderMarks,
  percent,
  disabled,
}: ControlledSliderInput) {
  const sliderStep = maxValue / 100;
  const inputStep = maxValue / 50;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { ref, value, onChange }, fieldState: { error } }) => {
        const handleSliderChange = (
          event: any,
          newValue: number | number[]
        ) => {
          onChange(newValue);
        };

        const handleInputChange = (
          event: React.ChangeEvent<HTMLInputElement>
        ) => {
          onChange(value.toString());
        };

        const handleBlur = () => {
          if (value < 0) {
            onChange(0);
          } else if (value > maxValue) {
            onChange(maxValue);
          }
        };

        return (
          <>
            <div
              className={
                disabled
                  ? [styles.token_group, styles.disabled].join(" ")
                  : value && !error
                  ? [styles.token_group, styles.valid].join(" ")
                  : styles.token_group
              }
            >
              <div className={styles.slider}>
                <Slider
                  size="small"
                  value={typeof value === "number" ? value : 0}
                  step={sliderStep}
                  onChange={handleSliderChange}
                  max={maxValue}
                  valueLabelDisplay="auto"
                  disabled={disabled}
                />
              </div>
              <input
                className={styles.token_slider_input}
                value={value.toString()}
                onChange={handleInputChange}
                onBlur={handleBlur}
                max={maxValue}
                min={0}
                placeholder={placeholder}
              />
              <p className={styles.percent}>%</p>
            </div>
            <div
              className={
                error && error.type != "required"
                  ? [styles.error_box, styles.active].join(" ")
                  : styles.error_box
              }
            >
              <div className={styles.error_icon}>
                <AlertIcon />
              </div>
              <p
                className={
                  error && error.type != "required"
                    ? [styles.info_text, styles.active].join(" ")
                    : styles.info_text
                }
              >
                {error?.message}
              </p>
            </div>
          </>
        );
      }}
    />
  );
}

interface ControlledTokenSliderInput {
  name: string;
  control: any;
  defaultValue: any;
  rules: any;
  className: string;
  placeholder: string | undefined;
  options: Token[];
  maxValue: number;
}

export function ControlledTokenSliderInput({
  name,
  control,
  defaultValue,
  rules,
  placeholder,
  options,
  maxValue,
}: ControlledTokenSliderInput) {
  const [token, setToken] = useState(null);

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
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field: { ref, value, onChange } }) => {
        const handleSliderChange = (
          event: any,
          newValue: number | number[]
        ) => {
          onChange(newValue);
        };

        const handleInputChange = (
          event: React.ChangeEvent<HTMLInputElement>
        ) => {
          onChange(event.target.value === "" ? "" : Number(event.target.value));
        };

        const handleBlur = () => {
          if (value < 0) {
            onChange(0);
          } else if (value > maxValue) {
            onChange(maxValue);
          }
        };
        return (
          <div className={styles.token_group}>
            <div className={styles.slider}>
              <Slider
                size="small"
                value={typeof value === "number" ? value : 0}
                step={sliderStep}
                onChange={handleSliderChange}
                max={maxValue}
                valueLabelDisplay="auto"
              />
            </div>
            <input
              className={styles.token_slider_input}
              value={value.toString()}
              onChange={handleInputChange}
              onBlur={handleBlur}
              max={maxValue}
              min={0}
              placeholder={placeholder}
            />
            <div className={styles.token_slider_select}>
              <TokenSelect
                options={options}
                value={token}
                setValue={setToken}
              />
            </div>
          </div>
        );
      }}
    />
  );
}
