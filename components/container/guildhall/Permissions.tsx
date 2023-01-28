import styles from "../../../styles/containers/guildhall/CreateGuild.module.css";
import { useState } from "react";
import { ControlledTextInput, ControlledTokenInput } from "../../inputs";
import { Controller } from "react-hook-form";
import { Select } from "../../dropdowns";

export const Permissions = ({ ...props }: any) => {
  const [guildName, setGuildName] = useState("");
  const [ownerToken, setOwnerToken] = useState("");

  const selectors = [
    "Harvest Food",
    "Harvest Resources",
    "Build Army",
    "Build Building",
    "Attack Realm",
    "Travel",
  ];

  const [dropdownValue, setDropdownValue] = useState(selectors[0]);

  const options = [
    {
      token: "Ether",
      image: "/eth 2.png",
      symbol: "ETH",
    },
    {
      token: "Lords",
      image: "/Lords.png",
      symbol: "LORDS",
    },
  ];

  return (
    <div className={styles.permissions_container}>
      <p className={styles.permissions_title}>Permissions</p>
      <div className={styles.permissions_forms}>
        <div className={styles.name}>
          <p className={styles.title}>Contract Address</p>
          <ControlledTextInput
            className={styles.short_input}
            control={props.control}
            rules={null}
            defaultValue=""
            placeholder="Choose your emblem"
            icon={null}
            name={`permissions.${props.index}.contractAddress`}
          />
        </div>
        <div className={styles.name}>
          <p className={styles.title}>Selectors</p>
          <div className={styles.attributes}>
            {selectors.map((selector, sub_index) => (
              <Controller
                name={`permissions.${props.index}.contractAddress.${sub_index}.selector`}
                control={props.control}
                defaultValue={""}
                key={sub_index}
                render={({ field: { ref, value, onChange } }) => (
                  <button
                    className={
                      value.includes(selector)
                        ? styles.attribute_selected
                        : styles.attribute
                    }
                    onClick={() => onChange}
                  >
                    <p>Human</p>
                  </button>
                )}
              />
            ))}
          </div>
        </div>
        <div className={styles.name}>
          <p className={styles.title}>Fee Policy</p>
          <div className={styles.select_selector}>
            <Select
              options={selectors}
              value={dropdownValue}
              setValue={setDropdownValue}
            />
          </div>
          <div className={styles.policy_row}>
            <p className={styles.subtitle}>Distribution</p>
            <div className={styles.token_inputs}>
              <ControlledTokenInput
                className={styles.token_input}
                control={props.control}
                rules={null}
                defaultValue=""
                placeholder="Choose your emblem"
                icon={null}
                name={`permissions.${props.index}.selectors.${selectors}`}
                options={options}
              />
            </div>
          </div>
          <div className={styles.policy_row}>
            <p className={styles.subtitle}>Distribution</p>
            <div className={styles.token_inputs}>
              <ControlledTokenInput
                className={styles.token_input}
                control={props.control}
                rules={null}
                defaultValue=""
                placeholder="Choose your emblem"
                icon={null}
                name={`permissions.${props.index}.selectors.${selectors}`}
                options={options}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
