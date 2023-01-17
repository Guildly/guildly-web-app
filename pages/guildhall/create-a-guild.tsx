import React from "react";
import Layout from "../../components/Layout";
import { CreateGuild } from "../../components/container/guildhall/CreateGuild";
import {
  GuildhallLeftMenu,
  GuildhallRightMenu,
} from "../../components/sideMenus/guildhallMenu";

export default function CreateAGuildPage() {
  return (
    <div>
      <Layout
        leftSideMenu={<GuildhallLeftMenu />}
        rightSideMenu={<GuildhallRightMenu />}
      />
    </div>
  );
}
