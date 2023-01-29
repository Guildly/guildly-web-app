import Layout from "../../components/Layout";
import {
  GuildhallLeftMenu,
  GuildhallRightMenu,
} from "../../components/sideMenus/guildhallMenu";
import { Games } from "../../components/container/guildhall/Games";

export default function GamesPage() {
  return (
    <Layout
      leftSideMenu={<GuildhallLeftMenu />}
      rightSideMenu={<GuildhallRightMenu />}
      main={<Games />}
    />
  );
}
