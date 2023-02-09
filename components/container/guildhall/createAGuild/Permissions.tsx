import styles from "../../../../styles/containers/guildhall/CreateGuild.module.css";
import { useState } from "react";
import { ControlledTextInput, ControlledTokenInput } from "../../../inputs";
import { Controller } from "react-hook-form";
import { Select } from "../../../dropdowns";

export const Permissions = ({ ...props }: any) => {
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
    <div className={styles.permissions_container}>
      <div className={styles.permissions_forms}>
        <div className={styles.name}>
          <p className={styles.title}>Contract Address</p>
          <div className={styles.contract_input}>
            <ControlledTextInput
              className={styles.short_input}
              control={props.control}
              rules={null}
              defaultValue=""
              placeholder="Search game or paste address"
              icon={null}
              name={`permissions.${props.index}.contractAddress`}
            />
            <div className={styles.verified}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className={styles.verified_icon}
              >
                <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
              <p>Verified</p>
            </div>
          </div>
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
                    <p>{selector}</p>
                  </button>
                )}
              />
            ))}
          </div>
        </div>
        <div className={styles.fee_policy}>
          <p className={styles.title}>Fee Policy</p>
          <div className={styles.fee_policy_content}>
            <div className={styles.select_selector}>
              <Select
                options={selectors}
                value={dropdownValue}
                setValue={setDropdownValue}
              />
            </div>
            <div className={styles.policies}>
              <div className={styles.policy_row}>
                <p className={styles.subtitle}>Distribution</p>
                <div className={styles.token_inputs}>
                  <div className={styles.token_input}>
                    <div className={styles.role}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        fill="currentColor"
                        className={styles.role_icon}
                      >
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c10 0 18.8-4.9 24.2-12.5l-99.2-99.2c-14.9-14.9-23.3-35.1-23.3-56.1v-33c-15.9-4.7-32.8-7.2-50.3-7.2H178.3zM384 224c-17.7 0-32 14.3-32 32v82.7c0 17 6.7 33.3 18.7 45.3L478.1 491.3c18.7 18.7 49.1 18.7 67.9 0l73.4-73.4c18.7-18.7 18.7-49.1 0-67.9L512 242.7c-12-12-28.3-18.7-45.3-18.7H384zm24 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                      </svg>
                      <p>Merchant</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className={styles.role_icon}
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                      </svg>
                    </div>
                    <ControlledTokenInput
                      control={props.control}
                      rules={null}
                      defaultValue=""
                      placeholder="0"
                      icon={null}
                      name={`permissions.${props.index}.selectors.${selectors}`}
                      options={options}
                    />
                  </div>
                  <div className={styles.token_input}>
                    <div className={styles.role}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        fill="currentColor"
                        className={styles.role_icon}
                      >
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                      </svg>
                      <p>Journeyman</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className={styles.role_icon}
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                      </svg>
                    </div>
                    <ControlledTokenInput
                      control={props.control}
                      rules={null}
                      defaultValue=""
                      placeholder="0"
                      icon={null}
                      name={`permissions.${props.index}.selectors.${selectors}`}
                      options={options}
                    />
                  </div>
                  <div className={styles.token_input}>
                    <div className={styles.role}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        fill="currentColor"
                        className={styles.role_icon}
                      >
                        <path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z" />
                      </svg>
                      <p>Master</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className={styles.role_icon}
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                      </svg>
                    </div>
                    <ControlledTokenInput
                      control={props.control}
                      rules={null}
                      defaultValue=""
                      placeholder="0"
                      icon={null}
                      name={`permissions.${props.index}.selectors.${selectors}`}
                      options={options}
                    />
                  </div>
                  <div className={styles.token_input}>
                    <div className={styles.role}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className={styles.role_icon}
                      >
                        <path d="M240 0c4.6 0 9.2 1 13.4 2.9L441.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C41.3 420.7 .5 239.2 0 140c-.1-26.2 16.3-47.9 38.3-57.2L226.7 2.9C230.8 1 235.4 0 240 0z" />
                      </svg>
                      <p>Guild</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className={styles.role_icon}
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                      </svg>
                    </div>
                    <ControlledTokenInput
                      control={props.control}
                      rules={null}
                      defaultValue=""
                      placeholder="0"
                      icon={null}
                      name={`permissions.${props.index}.selectors.${selectors}`}
                      options={options}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.policy_row}>
                <p className={styles.subtitle}>Payments</p>
                <div className={styles.token_inputs}>
                  <div className={styles.token_input}>
                    <div className={styles.role}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                        fill="currentColor"
                        className={styles.role_icon}
                      >
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c10 0 18.8-4.9 24.2-12.5l-99.2-99.2c-14.9-14.9-23.3-35.1-23.3-56.1v-33c-15.9-4.7-32.8-7.2-50.3-7.2H178.3zM384 224c-17.7 0-32 14.3-32 32v82.7c0 17 6.7 33.3 18.7 45.3L478.1 491.3c18.7 18.7 49.1 18.7 67.9 0l73.4-73.4c18.7-18.7 18.7-49.1 0-67.9L512 242.7c-12-12-28.3-18.7-45.3-18.7H384zm24 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                      </svg>
                      <p>Merchant</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className={styles.role_icon}
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                      </svg>
                    </div>
                    <ControlledTokenInput
                      control={props.control}
                      rules={null}
                      defaultValue=""
                      placeholder="0"
                      icon={null}
                      name={`permissions.${props.index}.selectors.${selectors}`}
                      options={options}
                    />
                  </div>
                  <div className={styles.token_input}>
                    <div className={styles.role}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        fill="currentColor"
                        className={styles.role_icon}
                      >
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                      </svg>
                      <p>Journeyman</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className={styles.role_icon}
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                      </svg>
                    </div>
                    <ControlledTokenInput
                      control={props.control}
                      rules={null}
                      defaultValue=""
                      placeholder="0"
                      icon={null}
                      name={`permissions.${props.index}.selectors.${selectors}`}
                      options={options}
                    />
                  </div>
                  <div className={styles.token_input}>
                    <div className={styles.role}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        fill="currentColor"
                        className={styles.role_icon}
                      >
                        <path d="M219.3 .5c3.1-.6 6.3-.6 9.4 0l200 40C439.9 42.7 448 52.6 448 64s-8.1 21.3-19.3 23.5L352 102.9V160c0 70.7-57.3 128-128 128s-128-57.3-128-128V102.9L48 93.3v65.1l15.7 78.4c.9 4.7-.3 9.6-3.3 13.3s-7.6 5.9-12.4 5.9H16c-4.8 0-9.3-2.1-12.4-5.9s-4.3-8.6-3.3-13.3L16 158.4V86.6C6.5 83.3 0 74.3 0 64C0 52.6 8.1 42.7 19.3 40.5l200-40zM111.9 327.7c10.5-3.4 21.8 .4 29.4 8.5l71 75.5c6.3 6.7 17 6.7 23.3 0l71-75.5c7.6-8.1 18.9-11.9 29.4-8.5C401 348.6 448 409.4 448 481.3c0 17-13.8 30.7-30.7 30.7H30.7C13.8 512 0 498.2 0 481.3c0-71.9 47-132.7 111.9-153.6z" />
                      </svg>
                      <p>Master</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className={styles.role_icon}
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                      </svg>
                    </div>
                    <ControlledTokenInput
                      control={props.control}
                      rules={null}
                      defaultValue=""
                      placeholder="0"
                      icon={null}
                      name={`permissions.${props.index}.selectors.${selectors}`}
                      options={options}
                    />
                  </div>
                  <div className={styles.token_input}>
                    <div className={styles.role}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className={styles.role_icon}
                      >
                        <path d="M240 0c4.6 0 9.2 1 13.4 2.9L441.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C41.3 420.7 .5 239.2 0 140c-.1-26.2 16.3-47.9 38.3-57.2L226.7 2.9C230.8 1 235.4 0 240 0z" />
                      </svg>
                      <p>Guild</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className={styles.role_icon}
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                      </svg>
                    </div>
                    <ControlledTokenInput
                      control={props.control}
                      rules={null}
                      defaultValue=""
                      placeholder="0"
                      icon={null}
                      name={`permissions.${props.index}.selectors.${selectors}`}
                      options={options}
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
