import React from "react";
import Layout from "../components/Layout";
import { Guildhall } from "../components/container/Guildhall";
import {
  GuildhallLeftMenu,
  GuildhallRightMenu,
} from "../components/sideMenus/guildhallMenu";

export default function HomePage() {
  return (
    <Layout
      leftSideMenu={<GuildhallLeftMenu />}
      leftSideMenuTitle="Welcome"
      rightSideMenu={<GuildhallRightMenu />}
      rightSideMenuTitle="Notices"
      main={<Guildhall />}
    />
  );
}
