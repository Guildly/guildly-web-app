import React, { useState } from "react";
import Layout from "../../components/Layout";
import { CreateGuild } from "../../components/container/guildhall/CreateGuild";
import {
  GuildhallLeftMenu,
  GuildhallRightMenu,
} from "../../components/sideMenus/guildhallMenu";
import * as yup from "yup";
import { OptionalObjectSchema } from "yup/lib/object";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFieldArray } from "react-hook-form";
import { addressSchema } from "../../features/schemas/addresses";

export default function CreateAGuildPage() {
  const [permissionIndex, setPermissionIndex] = useState(0);

  const createSchema: any = yup.object().shape({
    name: yup.string().required(),
    emblem: yup.string().optional(),
    anthem: yup.string().optional(),
    permissions: yup.array().of(
      yup.object().shape({
        contractAddress: addressSchema,
        selectors: yup.array().of(
          yup.object().shape({
            selector: yup.string().required(),
            distributions: yup.array().of(
              yup.object().shape({
                token: yup.string().optional(),
                owner_percent: yup.string().optional(),
                user_percent: yup.string().optional(),
                admin_percent: yup.string().optional(),
                guild_percent: yup.string().optional(),
              })
            ),
            payments: yup.array().of(
              yup.object().shape({
                token: yup.string().optional(),
                owner_amount: yup.string().optional(),
                user_amount: yup.string().optional(),
                admin_amount: yup.string().optional(),
                guild_amount: yup.string().optional(),
              })
            ),
          })
        ),
      })
    ),
    whitelisted: yup.array().of(
      yup.object().shape({
        address: yup.string().required(),
        role: yup.string().required(),
      })
    ),
  });

  const {
    handleSubmit,
    formState: { errors, isDirty, isSubmitting, submitCount },
    control,
    reset,
  } = useForm<any>({
    resolver: yupResolver(createSchema),
    defaultValues: {
      name: "",
      emblem: "",
      anthem: "",
      permissions: [
        {
          contractAddress: "",
          selectors: [{ selector: "" }],
        },
      ],
      whitelisted: [
        {
          address: "",
          role: "",
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
    control,
    handleSubmit,
    permissionIndex,
    setPermissionIndex,
    permissionFields,
    permissionsAppend,
    permissionsRemove,
    whitelistedFields,
    whitelistedAppend,
    whitelistedRemove,
  };
  return (
    <div>
      <Layout
        leftSideMenu={<GuildhallLeftMenu />}
        rightSideMenu={<GuildhallRightMenu />}
        main={<CreateGuild {...props} />}
      />
    </div>
  );
}
