import Layout from "../../../components/Layout";
import {
  MyGuildLeftMenu,
  MyGuildRightMenu,
} from "../../../components/sideMenus/guildhall/myGuildMenu";
import { MyGuild } from "../../../components/container/guildhall/myGuilds/myGuild";

export default function GuildPage() {
  return (
    <Layout
      leftSideMenu={<MyGuildLeftMenu />}
      leftSideMenuTitle={null}
      rightSideMenu={<MyGuildRightMenu />}
      rightSideMenuTitle={null}
      main={<MyGuild />}
    />
  );
}
