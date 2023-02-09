import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import {
  ItemLeftMenu,
  ItemRightMenu,
} from "../../../components/sideMenus/itemMenu";
import { Item } from "../../../components/container/bank/Item";

export default function ItemPage() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout
      leftSideMenu={<ItemLeftMenu />}
      leftSideMenuTitle={null}
      rightSideMenu={<ItemRightMenu />}
      rightSideMenuTitle={null}
      main={<Item />}
    />
  );
}
