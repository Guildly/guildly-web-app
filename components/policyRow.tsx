import styles from "../styles/components/PolicyRow.module.css";
import { useState } from "react";
import { ControlledTokenSelect } from "./dropdowns";
import {
  UserIcon,
  MerchantIcon,
  MasterIcon,
  ShieldIcon,
  PlusIcon,
  InfoIcon,
} from "../shared/icons";
import { ControlledSliderInput, ControlledShortTextInput } from "./inputs";
import { useFieldArray } from "react-hook-form";

export const PolicyRow = ({ type, selectedIndex, ...props }: any) => {
  const [distributionIndex, setDistributionIndex] = useState(0);
  const [paymentIndex, setPaymentIndex] = useState(0);

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

  const distributions = props.watch(
    `permissions.${props.permissionIndex}.selectors.${selectedIndex}.distributions`
  );

  const payments = props.watch(
    `permissions.${props.permissionIndex}.selectors.${selectedIndex}.payments`
  );

  const distributionValues = props.watch(
    `permissions.${props.permissionIndex}.selectors.${selectedIndex}.distributions.${distributionIndex}`
  );

  const paymentValues = props.watch(
    `permissions.${props.permissionIndex}.selectors.${selectedIndex}.payments.${paymentIndex}`
  );

  const maxValue =
    100 -
    parseInt(distributionValues.merchant) -
    parseInt(distributionValues.journeyman) -
    parseInt(distributionValues.master) -
    parseInt(distributionValues.guild);
  console.log(maxValue);
  console.log(selectedIndex);
  console.log(type);

  const distributionInputsDisabled =
    distributionValues.token && distributionValues.token.name != ""
      ? false
      : true;

  const paymentInputsDisabled =
    paymentValues.token && paymentValues.token.name != "" ? false : true;

  const {
    fields: distributionFields,
    append: distributionsAppend,
    remove: distributionsRemove,
  } = useFieldArray({
    control: props.control,
    name: `permissions.${props.permissionIndex}.selectors.${selectedIndex}.distributions`,
  });

  const {
    fields: paymentFields,
    append: paymentsAppend,
    remove: paymentsRemove,
  } = useFieldArray({
    control: props.control,
    name: `permissions.${props.permissionIndex}.selectors.${selectedIndex}.payments`,
  });

  return (
    <div className={styles.policy_row}>
      <div className={styles.token_select}>
        <ControlledTokenSelect
          control={props.control}
          name={
            type == "distributions"
              ? `permissions.${props.permissionIndex}.selectors.${selectedIndex}.distributions.${distributionIndex}.token`
              : `permissions.${props.permissionIndex}.selectors.${selectedIndex}.payments.${paymentIndex}.token`
          }
          defaultValue=""
          options={options}
          selectedTokens={type == "distributions" ? distributions : payments}
        />
      </div>
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
                  Merchants are the item owners, they provide the items for
                  tasks.
                </p>
              </div>
            </div>
          </div>
          {type == "distributions" ? (
            <ControlledSliderInput
              control={props.control}
              rules={null}
              defaultValue="0"
              placeholder="0"
              name={`permissions.${props.permissionIndex}.selectors.${selectedIndex}.distributions.${distributionIndex}.merchant`}
              options={options}
              maxValue={maxValue >= 0 ? maxValue : 0}
              disabled={distributionInputsDisabled}
            />
          ) : (
            <ControlledShortTextInput
              name={`permissions.${props.permissionIndex}.selectors.${selectedIndex}.payments.${paymentIndex}.merchant`}
              control={props.control}
              defaultValue={0}
              placeholder="0"
              className={styles.short_input}
              type="number"
              disabled={paymentInputsDisabled}
            />
          )}
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
                  Journeymen perform the tasks. They use the assets deposited
                  from merchants.
                </p>
              </div>
            </div>
          </div>
          {type == "distributions" ? (
            <ControlledSliderInput
              control={props.control}
              rules={null}
              defaultValue="0"
              placeholder="0"
              name={`permissions.${props.permissionIndex}.selectors.${selectedIndex}.distributions.${distributionIndex}.journeyman`}
              options={options}
              maxValue={maxValue >= 0 ? maxValue : 0}
              disabled={distributionInputsDisabled}
            />
          ) : (
            <ControlledShortTextInput
              name={`permissions.${props.permissionIndex}.selectors.${selectedIndex}.payments.${paymentIndex}.journeyman`}
              control={props.control}
              defaultValue={0}
              placeholder="0"
              className={styles.short_input}
              type="number"
              disabled={paymentInputsDisabled}
            />
          )}
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
          {type == "distributions" ? (
            <ControlledSliderInput
              control={props.control}
              rules={null}
              defaultValue="0"
              placeholder="0"
              name={`permissions.${props.permissionIndex}.selectors.${selectedIndex}.distributions.${distributionIndex}.master`}
              options={options}
              maxValue={maxValue >= 0 ? maxValue : 0}
              disabled={distributionInputsDisabled}
            />
          ) : (
            <ControlledShortTextInput
              name={`permissions.${props.permissionIndex}.selectors.${selectedIndex}.payments.${paymentIndex}.master`}
              control={props.control}
              defaultValue={0}
              placeholder="0"
              className={styles.short_input}
              type="number"
              disabled={paymentInputsDisabled}
            />
          )}
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
                  A guild pot is shared between all of its members, governance
                  dictates its use.
                </p>
              </div>
            </div>
          </div>
          {type == "distributions" ? (
            <ControlledSliderInput
              control={props.control}
              rules={null}
              defaultValue="0"
              placeholder="0"
              name={`permissions.${props.permissionIndex}.selectors.${selectedIndex}.distributions.${distributionIndex}.guild`}
              options={options}
              maxValue={maxValue >= 0 ? maxValue : 0}
              disabled={distributionInputsDisabled}
            />
          ) : (
            <ControlledShortTextInput
              name={`permissions.${props.permissionIndex}.selectors.${selectedIndex}.payments.${paymentIndex}.guild`}
              control={props.control}
              defaultValue="0"
              placeholder="0"
              className={styles.short_input}
              type="number"
              disabled={paymentInputsDisabled}
            />
          )}
        </div>
      </div>
      <div
        className={styles.add}
        onClick={() => {
          if (type == "distributions") {
            distributionsAppend({
              token: "",
              merchant: 0,
              journeyman: 0,
              master: 0,
              guild: 0,
            });
            setDistributionIndex(distributionIndex + 1);
          } else {
            paymentsAppend({
              token: "",
              merchant: 0,
              journeyman: 0,
              master: 0,
              guild: 0,
            });
            setPaymentIndex(paymentIndex + 1);
          }
        }}
      >
        <div className={styles.add_icon}>
          <PlusIcon />
        </div>
      </div>
    </div>
  );
};
