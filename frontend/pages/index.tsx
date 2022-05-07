import type { NextPage } from "next";
import { useState } from "react";

import Header from "../src/components/Header";
import Link from "next/link";
import { Button } from "@material-ui/core";
import NavBarMenu from "../src/components/UI/NavBarMenu";

import useStyles from "../styles/HomePage/theme";

const Home: NextPage = () => {
  const classes = useStyles();
  const [openNavMenu, setOpenNavMenu] = useState<boolean>(false);

  const openMenu = () => {
    setOpenNavMenu(true);
  };

  const closeMenu = () => {
    setOpenNavMenu(false);
  };

  return (
    <main>
      <Header
        listItem={[
          { href: "/login", content: "Login" },
          { href: "", content: "|" },
          {
            href: "/register",
            content: "Register",
            component: (
              <Button
                variant="outlined"
                style={{ border: "1px solid #fafafa", color: "#fafafa" }}
              >
                Salve
              </Button>
            ),
          },
        ]}
      />

      <div className={classes.navWrapper}>
        <div className={classes.navBar}>
          <ul>
            <li
              key={"news"}
              onMouseEnter={() => {
                openMenu();
              }}
              onMouseLeave={() => {
                closeMenu();
              }}
            >
              <Link href="/">Novidades</Link>
            </li>
            <li
              key={"women"}
              onMouseEnter={() => {
                openMenu();
              }}
              onMouseLeave={() => {
                closeMenu();
              }}
            >
              <Link href="/">Feminino</Link>
            </li>
            <li
              key={"men"}
              onMouseEnter={() => {
                openMenu();
              }}
              onMouseLeave={() => {
                closeMenu();
              }}
            >
              <Link href="/">Masculino</Link>
            </li>
            <li
              key={"children"}
              onMouseEnter={() => {
                openMenu();
              }}
              onMouseLeave={() => {
                closeMenu();
              }}
            >
              <Link href="/">Infatil</Link>
            </li>
            <li
              key={"underwear"}
              onMouseEnter={() => {
                openMenu();
              }}
              onMouseLeave={() => {
                closeMenu();
              }}
            >
              <Link href="/">Moda Íntima</Link>
            </li>
            <li
              key={"sneakers"}
              onMouseEnter={() => {
                openMenu();
              }}
              onMouseLeave={() => {
                closeMenu();
              }}
            >
              <Link href="/">Sneakers</Link>
            </li>
            <li
              key={"accessory"}
              onMouseEnter={(e) => {
                openMenu();
              }}
              onMouseLeave={() => {
                closeMenu();
              }}
            >
              <Link href="/">Acessórios</Link>
            </li>
          </ul>

          {openNavMenu ? (
            <NavBarMenu>
              <h1>Dale</h1>
            </NavBarMenu>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default Home;
