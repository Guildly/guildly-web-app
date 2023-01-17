import React from "react";
import Layout from "../components/Layout";
import { Bank } from "../components/container/Bank";
import {
  MarketLeftMenu,
  MarketRightMenu,
} from "../components/sideMenus/marketMenu";

export default function BankPage() {
  return (
    <div>
      <Layout
        leftSideMenu={<MarketLeftMenu />}
        rightSideMenu={<MarketRightMenu />}
      />
    </div>
  );
}
