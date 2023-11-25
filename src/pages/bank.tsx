import { useState } from "react";
import Layout from "../components/Layout";
import { Bank } from "../components/container/Bank";
import { BankLeftMenu, BankRightMenu } from "../components/sideMenus/bankMenu";

export default function VaultPage() {
  const [tab, setTab] = useState("Account");
  const [tokenStandardFilter, setTokenStandardFilter] = useState("");
  const [gameFilter, setGameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("");
  const [addressFilter, setAddressFilter] = useState("");

  const props = {
    tab,
    setTab,
    tokenStandardFilter,
    setTokenStandardFilter,
    gameFilter,
    setGameFilter,
    genreFilter,
    setGenreFilter,
    addressFilter,
    setAddressFilter,
  };
  return (
    <Layout
      leftSideMenu={<BankLeftMenu {...props} />}
      leftSideMenuTitle="Filters"
      rightSideMenu={<BankRightMenu />}
      rightSideMenuTitle="Info"
      main={<Bank {...props} />}
    />
  );
}
