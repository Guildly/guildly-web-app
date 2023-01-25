import React from "react";
import Layout from "../components/Layout";
import {
  CouncilLeftMenu,
  CouncilRightMenu,
} from "../components/sideMenus/councilMenu";
import { Council } from "../components/container/Council";

export default function CouncilPage() {
  return (
    <div>
      <Layout
        leftSideMenu={<CouncilLeftMenu />}
        rightSideMenu={<CouncilRightMenu />}
        main={<Council />}
      />
    </div>
  );
}
