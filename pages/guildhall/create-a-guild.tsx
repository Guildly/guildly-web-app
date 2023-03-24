import React, { useState } from "react";
import Layout from "../../components/Layout";
import { CreateGuild } from "../../components/container/guildhall/CreateGuild";
import {
  CreateGuildLeftMenu,
  CreateGuildRightMenu,
} from "../../components/sideMenus/guildhall/createGuildMenu";
import * as yup from "yup";
import { OptionalObjectSchema } from "yup/lib/object";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFieldArray } from "react-hook-form";
import { addressSchema } from "../../features/schemas/addresses";

export default function CreateAGuildPage() {
  const [permissionIndex, setPermissionIndex] = useState(0);
  const [selectorIndex, setSelectorIndex] = useState(0);

  const [chainPage, setChainPage] = useState(1);

  const createSchema: any = yup.object().shape({
    name: yup.string().max(31).required(),
    description: yup.string().required(),
    emblem: yup.string().optional(),
    permissions: yup.array().of(
      yup.object().shape({
        contractAddress: addressSchema,
        selectors: yup.array().of(
          yup.object().shape({
            selector: yup.string().required(),
            distributions: yup.array().of(
              yup.object().shape({
                token: yup.string().required(),
                merchant: yup.number().required().min(0).max(100),
                journeyman: yup.number().required().min(0).max(100),
                master: yup.number().required().min(0).max(100),
                guild: yup.number().required().min(0).max(100),
              })
            ),
            payments: yup.array().of(
              yup.object().shape({
                token: yup.string().required(),
                merchant: yup.number().required().min(0),
                journeyman: yup.number().required().min(0),
                master: yup.number().required().min(0),
                guild: yup.number().required().min(0),
              })
            ),
          })
        ),
      })
    ),
    whitelisted: yup.array().of(
      yup.object().shape({
        address: yup.string().required(),
        roles: yup.array().of(
          yup.object().shape({
            role: yup.string().required(),
          })
        ),
      })
    ),
  });

  const {
    handleSubmit,
    formState: { errors, isDirty, isSubmitting, submitCount },
    control,
    reset,
    getValues,
    setValue: setFormValue,
    watch,
  } = useForm<any>({
    mode: "onChange",
    resolver: yupResolver(createSchema),
    defaultValues: {
      name: "",
      description: "",
      emblem: "",
      permissions: [
        {
          contractAddress: "",
          selectors: [
            {
              selector: "",
              distributions: [
                {
                  token: "",
                  merchant: 0,
                  journeyman: 0,
                  master: 0,
                  guild: 0,
                },
              ],
              payments: [
                {
                  token: "",
                  merchant: 0,
                  journeyman: 0,
                  master: 0,
                  guild: 0,
                },
              ],
            },
          ],
        },
      ],
      whitelisted: [
        {
          address: "",
          roles: [{ role: "" }],
        },
      ],
    },
  });

  const {
    fields: permissionFields,
    append: permissionsAppend,
    remove: permissionsRemove,
  } = useFieldArray({
    control,
    name: "permissions",
  });

  const {
    fields: whitelistedFields,
    append: whitelistedAppend,
    remove: whitelistedRemove,
  } = useFieldArray({
    control,
    name: "whitelisted",
  });

  const props = {
    chainPage,
    setChainPage,
    control,
    handleSubmit,
    setFormValue,
    watch,
    getValues,
    errors,
    permissionIndex,
    setPermissionIndex,
    permissionFields,
    permissionsAppend,
    permissionsRemove,
    selectorIndex,
    setSelectorIndex,
    whitelistedFields,
    whitelistedAppend,
    whitelistedRemove,
  };

  console.log(getValues());
  return (
    <Layout
      leftSideMenu={<CreateGuildLeftMenu chainPage={chainPage} />}
      leftSideMenuTitle="Guide"
      rightSideMenu={<CreateGuildRightMenu {...props} />}
      rightSideMenuTitle="Progress"
      main={<CreateGuild {...props} />}
    />
  );
}
