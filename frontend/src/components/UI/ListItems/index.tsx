import type { NextPage } from "next";

import { TextField, Typography } from "@mui/material";
import Link from "next/link";

import useStyles from "./theme";

interface IListItem {
  items: Array<IArrayProps>;
}

interface IArrayProps {
  id: number;
  content: string;
  href: string;
}

const Header: NextPage<IListItem> = ({ items, ...rest }) => {
  const classes = useStyles();

  return (
    <></>
    // <li
    //   key={items.id}
    //   onMouseEnter={(e) => {
    //     openMenu(e);
    //   }}
    //   onMouseLeave={() => {
    //     closeMenu();
    //   }}
    // >
    //   <Link href="/">Novidades</Link>
    // </li>
  );
};

export default Header;
