import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { motion, useIsPresent } from "framer-motion";
import { Guildhall } from "./container/Guildhall";
import { Bank } from "./container/Bank";
import { CreateGuild } from "./container/guildhall/CreateGuild";

export default function Main() {
  const { pathname } = useRouter();
  const path = pathname.slice(1).split("/");
  const isPage = useCallback(
    (name: string) => name === pathname.slice(1).split("/")[0],
    [pathname]
  );
  const isSecondPage = useCallback(
    (name: string) => name === pathname.slice(1).split("/")[1],
    [pathname]
  );
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 0.5,
          ease: [1, 1, 0.5, 1],
        },
      }}
    >
      {path.length == 1 ? (
        isPage("guildhall") ? (
          <Guildhall />
        ) : isPage("bank") ? (
          <Bank />
        ) : null
      ) : null}
    </motion.div>
  );
}
