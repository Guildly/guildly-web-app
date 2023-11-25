import Layout from "../../../components/Layout";
import {
  GuildhallLeftMenu,
  GuildhallRightMenu,
} from "../../../components/sideMenus/guildhallMenu";
import { Game } from "../../../components/container/guildhall/Game";

export default function GuildPage() {
  return (
    <Layout
      leftSideMenu={<GuildhallLeftMenu />}
      leftSideMenuTitle={null}
      rightSideMenu={<GuildhallRightMenu />}
      rightSideMenuTitle={null}
      main={<Game />}
    />
  );
}
