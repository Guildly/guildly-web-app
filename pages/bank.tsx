import React from "react";
import Layout from "../components/Layout";
import { Bank } from "../components/container/Bank";
import { BankLeftMenu, BankRightMenu } from "../components/sideMenus/bankMenu";

export default function BankPage() {
  return (
    <div>
      <Layout
        leftSideMenu={<BankLeftMenu />}
        rightSideMenu={<BankRightMenu />}
      />
    </div>
  );
}
