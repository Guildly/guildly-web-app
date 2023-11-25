import Layout from "../../../components/Layout";
import {
  GuildhallLeftMenu,
  GuildhallRightMenu,
} from "../../../components/sideMenus/guildhallMenu";
import { Guild } from "../../../components/container/guildhall/Guild";

export default function GuildPage() {
  return (
    <Layout
      leftSideMenu={<GuildhallLeftMenu />}
      leftSideMenuTitle={null}
      rightSideMenu={<GuildhallRightMenu />}
      rightSideMenuTitle={null}
      main={<Guild />}
    />
  );
}
