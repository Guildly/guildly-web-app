import styles from "../../../../styles/containers/guildhall/createAGuild/Permissions.module.css";
import { useState } from "react";
import {
  ControlledShortTextInput,
  ControlledTokenInput,
} from "../../../inputs";
import { Controller } from "react-hook-form";
import { Select } from "../../../dropdowns";
import {
  UserIcon,
  MerchantIcon,
  MasterIcon,
  ShieldIcon,
  PlusIcon,
  InfoIcon,
} from "../../../../shared/icons";

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
      <div className={styles.permissions_form}>
        <div className={styles.contract_row}>
          <div className={styles.contract}>
            <p className={styles.title}>Contract Address</p>
            <div className={styles.contract_input}>
              <div className={styles.contract_input}>
                <ControlledShortTextInput
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
          </div>
          <div className={styles.saved_permissions}>
            <p className={styles.saved_title}>Saved Permissions</p>
            <table>
              <tr className={styles.permissions_header}>
                <th>Contract</th>
                <th>Selectors</th>
                <th></th>
              </tr>
              <tr className={styles.permissions_content}>
                <td>Eternum</td>
                <td>Harvest Food</td>
              </tr>
              <tr className={styles.permissions_content}>
                <td>Influence</td>
                <td>Build Plot</td>
              </tr>
            </table>
          </div>
        </div>
        <div className={styles.selectors_row}>
          <div className={styles.selectors}>
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
          <div className={styles.templates}>
            <p className={styles.title}>Templates</p>
            <div className={styles.attributes}>
              <button className={styles.attribute}>
                <p>Harvesting</p>
              </button>
              <button className={styles.attribute}>
                <p>Defending</p>
              </button>
            </div>
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
                      <div className={styles.role_icon}>
                        <MerchantIcon />
                      </div>
                      <p>Merchant</p>
                      <div className={styles.info_icon}>
                        <InfoIcon />
                        <div className={styles.info_box}>
                          <p className={styles.info_text}>
                            Merchants are the item owners, they provide the
                            items for tasks.
                          </p>
                        </div>
                      </div>
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
                    <div className={styles.add}>
                      <div className={styles.add_icon}>
                        <PlusIcon />
                      </div>
                    </div>
                  </div>
                  <div className={styles.token_input}>
                    <div className={styles.role}>
                      <div className={styles.role_icon}>
                        <UserIcon />
                      </div>
                      <p>Journeyman</p>
                      <div className={styles.info_icon}>
                        <InfoIcon />
                        <div className={styles.info_box}>
                          <p className={styles.info_text}>
                            Journeymen perform the tasks. They use the assets
                            deposited from merchants.
                          </p>
                        </div>
                      </div>
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
                    <div className={styles.add}>
                      <div className={styles.add_icon}>
                        <PlusIcon />
                      </div>
                    </div>
                  </div>
                  <div className={styles.token_input}>
                    <div className={styles.role}>
                      <div className={styles.role_icon}>
                        <MasterIcon />
                      </div>
                      <p>Master</p>
                      <div className={styles.info_icon}>
                        <InfoIcon />
                        <div className={styles.info_box}>
                          <p className={styles.info_text}>
                            Masters are guild administrators.
                          </p>
                        </div>
                      </div>
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
                    <div className={styles.add}>
                      <div className={styles.add_icon}>
                        <PlusIcon />
                      </div>
                    </div>
                  </div>
                  <div className={styles.token_input}>
                    <div className={styles.role}>
                      <div className={styles.role_icon}>
                        <ShieldIcon />
                      </div>
                      <p>Guild</p>
                      <div className={styles.info_icon}>
                        <InfoIcon />
                        <div className={styles.info_box}>
                          <p className={styles.info_text}>
                            A guild pot is shared between all of its members,
                            governance dictates its use.
                          </p>
                        </div>
                      </div>
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
                    <div className={styles.add}>
                      <div className={styles.add_icon}>
                        <PlusIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.policy_row}>
                <p className={styles.subtitle}>Payments</p>
                <div className={styles.token_inputs}>
                  <div className={styles.token_input}>
                    <div className={styles.role}>
                      <div className={styles.role_icon}>
                        <MerchantIcon />
                      </div>
                      <p>Merchant</p>
                      <div className={styles.info_icon}>
                        <InfoIcon />
                        <div className={styles.info_box}>
                          <p className={styles.info_text}>
                            Merchants are the item owners, they provide the
                            items for tasks.
                          </p>
                        </div>
                      </div>
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
                    <div className={styles.add}>
                      <div className={styles.add_icon}>
                        <PlusIcon />
                      </div>
                    </div>
                  </div>
                  <div className={styles.token_input}>
                    <div className={styles.role}>
                      <div className={styles.role_icon}>
                        <UserIcon />
                      </div>
                      <p>Journeyman</p>
                      <div className={styles.info_icon}>
                        <InfoIcon />
                        <div className={styles.info_box}>
                          <p className={styles.info_text}>
                            Journeymen perform the tasks. They use the assets
                            deposited from merchants.
                          </p>
                        </div>
                      </div>
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
                    <div className={styles.add}>
                      <div className={styles.add_icon}>
                        <PlusIcon />
                      </div>
                    </div>
                  </div>
                  <div className={styles.token_input}>
                    <div className={styles.role}>
                      <div className={styles.role_icon}>
                        <MasterIcon />
                      </div>
                      <p>Master</p>
                      <div className={styles.info_icon}>
                        <InfoIcon />
                        <div className={styles.info_box}>
                          <p className={styles.info_text}>
                            Masters are guild administrators.
                          </p>
                        </div>
                      </div>
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
                    <div className={styles.add}>
                      <div className={styles.add_icon}>
                        <PlusIcon />
                      </div>
                    </div>
                  </div>
                  <div className={styles.token_input}>
                    <div className={styles.role}>
                      <div className={styles.role_icon}>
                        <ShieldIcon />
                      </div>
                      <p>Guild</p>
                      <div className={styles.info_icon}>
                        <InfoIcon />
                        <div className={styles.info_box}>
                          <p className={styles.info_text}>
                            A guild pot is shared between all of its members,
                            governance dictates its use.
                          </p>
                        </div>
                      </div>
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
                    <div className={styles.add}>
                      <div className={styles.add_icon}>
                        <PlusIcon />
                      </div>
                    </div>
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
