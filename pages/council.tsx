import React from "react";
import Layout from "../components/Layout";
import { Bank } from "../components/container/Bank";
import {
  CouncilLeftMenu,
  CouncilRightMenu,
} from "../components/sideMenus/councilMenu";

export default function CouncilPage() {
  return (
    <div>
      <Layout
        leftSideMenu={<CouncilLeftMenu />}
        rightSideMenu={<CouncilRightMenu />}
      />
    </div>
  );
}
