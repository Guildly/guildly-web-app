import styles from "../../../../styles/containers/guildhall/createAGuild/Permissions.module.css";
import { useState } from "react";
import {
  ControlledShortTextInput,
  ControlledTokenInput,
  ControlledSliderInput,
  ControlledSearchInput,
} from "../../../inputs";
import { Controller } from "react-hook-form";
import { Select, TokenSelect } from "../../../dropdowns";
import { AttributeButton, ControlledAttributeButton } from "../../../buttons";
import { useFieldArray } from "react-hook-form";
import { PolicyRow } from "../../../policyRow";
import {
  UserIcon,
  MerchantIcon,
  MasterIcon,
  ShieldIcon,
  PlusIcon,
  InfoIcon,
  BinIcon,
  TickIcon,
} from "../../../../shared/icons";
import Image from "next/image";

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
  const [dropdownIndex, setDropdownIndex] = useState(0);

  const games = [
    {
      primary: "Eternum",
      secondary:
        "0x07642A1c8D575B0c0f9a7AD7cCEb5517c02f36E5F3B36B25429Cc7C99383ed0a",
    },
    {
      primary: "Eternum",
      secondary:
        "0x07642A1c8D575B0c0f9a7AD7cCEb5517c02f36E5F3B36B25429Cc7C99383ed0a",
    },
  ];

  const formPermissions = props.watch().permissions;
  const formSelectors =
    props.watch().permissions[props.permissionIndex].selectors;

  const fromSelectorsValues = formSelectors.map(
    (dict: any) => dict["selector"]
  );

  const gameValue = props.watch(
    `permissions.${props.permissionIndex}.contractAddress`
  );

  const {
    fields: selectorFields,
    append: selectorsAppend,
    remove: selectorsRemove,
  } = useFieldArray({
    control: props.control,
    name: `permissions.${props.permissionIndex}.selectors`,
  });

  const isVerified =
    gameValue ==
    "0x07642A1c8D575B0c0f9a7AD7cCEb5517c02f36E5F3B36B25429Cc7C99383ed0a";

  console.log(dropdownIndex);

  return (
    <div className={styles.permissions_container}>
      <div className={styles.permissions_form}>
        <div className={styles.contract_row}>
          <div className={styles.contract}>
            <p className={styles.title}>Game</p>
            <div className={styles.contract_input}>
              <div className={styles.contract_input}>
                <ControlledSearchInput
                  className={styles.short_input}
                  control={props.control}
                  rules={null}
                  defaultValue=""
                  placeholder="Search game or paste address"
                  icon={null}
                  name={`permissions.${props.permissionIndex}.contractAddress`}
                  options={games}
                />
                <div
                  className={
                    isVerified
                      ? [styles.verified, styles.active].join(" ")
                      : styles.verified
                  }
                >
                  <div className={styles.verified_icon}>
                    <TickIcon />
                  </div>
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
                <th>Rewards</th>
              </tr>
              <tr className={styles.permissions_content}>
                <td>
                  <div className={styles.eternum_row}>
                    Eternum
                    <div className={styles.garbage_button}>
                      <div className={styles.garbage_icon}>
                        <BinIcon />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.selector_row}>
                    Harvest Food
                    <div className={styles.garbage_button}>
                      <div className={styles.garbage_icon}>
                        <BinIcon />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.rewards}>
                    <div className={styles.reward_row}>
                      <div>
                        <Image
                          alt="token_image"
                          src={"/eth 2.png"}
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className={styles.role_tags}>
                        <div className={styles.role_tag}>
                          <div className={styles.role_icon}>
                            <MerchantIcon />
                          </div>
                          <div>
                            <p>95%</p>
                          </div>
                        </div>
                        <div className={styles.role_tag}>
                          <div className={styles.role_icon}>
                            <MerchantIcon />
                          </div>
                          <div>
                            <p>95%</p>
                          </div>
                        </div>
                        <div className={styles.role_tag}>
                          <div className={styles.role_icon}>
                            <MerchantIcon />
                          </div>
                          <div>
                            <p>95%</p>
                          </div>
                        </div>
                        <div className={styles.role_tag}>
                          <div className={styles.role_icon}>
                            <MerchantIcon />
                          </div>
                          <div>
                            <p>95%</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.garbage_button}>
                        <div className={styles.garbage_icon}>
                          <BinIcon />
                        </div>
                      </div>
                    </div>
                    <div className={styles.reward_row}>
                      <div>
                        <Image
                          alt="token_image"
                          src={"/eth 2.png"}
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className={styles.role_tags}>
                        <div className={styles.role_tag}>
                          <div className={styles.role_icon}>
                            <MerchantIcon />
                          </div>
                          <div>
                            <p>95%</p>
                          </div>
                        </div>
                        <div className={styles.role_tag}>
                          <div className={styles.role_icon}>
                            <MerchantIcon />
                          </div>
                          <div>
                            <p>95%</p>
                          </div>
                        </div>
                        <div className={styles.role_tag}>
                          <div className={styles.role_icon}>
                            <MerchantIcon />
                          </div>
                          <div>
                            <p>95%</p>
                          </div>
                        </div>
                        <div className={styles.role_tag}>
                          <div className={styles.role_icon}>
                            <MerchantIcon />
                          </div>
                          <div>
                            <p>95%</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles.garbage_button}>
                        <div className={styles.garbage_icon}>
                          <BinIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className={styles.permissions_content}>
                <td>Influence</td>
                <td>Build Plot</td>
              </tr>
            </table>
          </div>
        </div>
        {gameValue != "" ? (
          <>
            <div className={styles.selectors_row}>
              <div className={styles.selectors}>
                <p className={styles.title}>Selectors</p>
                <div className={styles.attributes}>
                  {selectors.map((selector, sub_index) => (
                    <ControlledAttributeButton
                      key={sub_index}
                      name={`permissions.${props.permissionIndex}.selectors.${props.selectorIndex}.selector`}
                      control={props.control}
                      defaultValue={""}
                      inputValue={selector}
                      attributes={
                        formPermissions[props.permissionIndex].selectors
                      }
                      attributeIndex={props.selectorIndex}
                      setIndex={props.setSelectorIndex}
                      append={selectorsAppend}
                      remove={selectorsRemove}
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
            {formSelectors[0] && formSelectors[0].selector != "" ? (
              <div className={styles.fee_policy}>
                <p className={styles.title}>Fee Policy</p>
                <div className={styles.fee_policy_content}>
                  <div className={styles.select_selector}>
                    <Select
                      options={fromSelectorsValues}
                      value={dropdownValue}
                      setValue={setDropdownValue}
                      setIndex={setDropdownIndex}
                    />
                  </div>
                  <div className={styles.policies}>
                    {/* <p className={styles.subtitle}>Distribution</p> */}
                    <PolicyRow
                      type="distributions"
                      selectedIndex={dropdownIndex}
                      {...props}
                    />
                    {/* <p className={styles.subtitle}>Payments</p> */}
                    <PolicyRow
                      type="payments"
                      selectedIndex={dropdownIndex}
                      {...props}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.info_prompt}>
                <p>Choose a Task!</p>
              </div>
            )}
          </>
        ) : (
          <div className={styles.info_prompt}>
            <p>Enter a game!</p>
          </div>
        )}
      </div>
    </div>
  );
};
