import { useState } from "react";
import Layout from "../components/Layout";
import { Bank } from "../components/container/Bank";
import { BankLeftMenu, BankRightMenu } from "../components/sideMenus/bankMenu";

export default function BankPage() {
  const [tab, setTab] = useState("Guild");
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
    <div>
      <Layout
        leftSideMenu={<BankLeftMenu {...props} />}
        rightSideMenu={<BankRightMenu />}
        main={<Bank {...props} />}
      />
    </div>
  );
}
