import Layout from "../../components/Layout";
import {
  GuildhallLeftMenu,
  GuildhallRightMenu,
} from "../../components/sideMenus/guildhallMenu";
import { Guilds } from "../../components/container/guildhall/Guilds";

export default function GuildsPage() {
  return (
    <div>
      <Layout
        leftSideMenu={<GuildhallLeftMenu />}
        rightSideMenu={<GuildhallRightMenu />}
        main={<Guilds />}
      />
    </div>
  );
}
