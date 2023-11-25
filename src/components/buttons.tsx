import styles from "../styles/components/Buttons.module.css";
import { ReactElement } from "react";
import { Controller } from "react-hook-form";
import {
  hasDictionary,
  removeDictionary,
  keyValueExists,
} from "../utils/format";

interface ControlledButtonProps {
  name: string;
  control: any;
  defaultValue: any;
  className?: string;
  displayText: string;
  icon?: ReactElement;
  inputValue: string;
  selected: any[];
  selectedIndex: number;
  setIndex: (e: any) => void;
  append: any;
  remove: any;
}

export const ControlledButton = ({
  name,
  control,
  defaultValue,
  className,
  displayText,
  icon,
  inputValue,
  selected,
  selectedIndex,
  setIndex,
  append,
  remove,
}: ControlledButtonProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { ref, value, onChange } }) => {
        return (
          <button
            className={className}
            onClick={() => {
              onChange(value);
              append({ role: inputValue });
            }}
          >
            {icon ? icon : null}
            <p>{displayText}</p>
          </button>
        );
      }}
    />
  );
};

interface AttributeButtonProps {
  type: string;
  value: string;
  dict: { [key: string]: any };
  add: (e: any, d: any) => void;
}

export const AttributeButton = ({
  type,
  value,
  dict,
  add,
}: AttributeButtonProps) => {
  return (
    <button
      className={
        value == dict[type]
          ? [styles.attribute, styles.selected].join(" ")
          : styles.attribute
      }
      onClick={() => {
        add(type, value);
      }}
    >
      <p>{value}</p>
    </button>
  );
};

interface ControlledAttributeButtonProps {
  name: string;
  control: any;
  defaultValue: any;
  className?: string;
  inputValue: string;
  attributes: any[];
  attributeIndex: number;
  setIndex: (e: any) => void;
  append: any;
  remove: any;
}

export const ControlledAttributeButton = ({
  name,
  control,
  defaultValue,
  className,
  inputValue,
  attributes,
  attributeIndex,
  setIndex,
  append,
  remove,
}: ControlledAttributeButtonProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { ref, value, onChange } }) => {
        return (
          <button
            className={
              keyValueExists(attributes, "selector", inputValue)
                ? [styles.attribute, styles.selected].join(" ")
                : styles.attribute
            }
            onClick={() => {
              if (!keyValueExists(attributes, "selector", inputValue)) {
                if (keyValueExists(attributes, "selector", "")) {
                  onChange(inputValue);
                } else {
                  append({
                    selector: inputValue,
                    distributions: [
                      {
                        token: "",
                        merchant: "",
                        journeyman: "",
                        master: "",
                        guild: "",
                      },
                    ],
                    payments: [
                      {
                        token: "",
                        merchant: "",
                        journeyman: "",
                        master: "",
                        guild: "",
                      },
                    ],
                  });
                }
              } else {
                // get index of where the attribute exists
                const removeIndex = attributes.findIndex(
                  (element) => element.selector === inputValue
                );
                remove(removeIndex);
              }
            }}
          >
            <p>{inputValue}</p>
          </button>
        );
      }}
      //   render={({ field: { ref, value, onChange } }) => (
      //     <button
      //       className={
      //         value.includes(inputValue)
      //           ? [styles.attribute, styles.selected].join(" ")
      //           : styles.attribute
      //       }
      //       onClick={() => {
      //         onChange(inputValue);
      //       }}
      //     >
      //       <p>{inputValue}</p>
      //     </button>
      //   )}
    />
  );
};
