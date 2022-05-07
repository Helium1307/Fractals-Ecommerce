import type { NextPage } from "next";

import { TextField, Typography } from "@mui/material";
import Link from "next/link";

import useStyles from "./theme";

interface INavBarMenuProps {
  children: React.ReactNode;
}

const NavBarMenu: NextPage<INavBarMenuProps> = ({ children }) => {
  const classes = useStyles();

  return <main className={classes.mainContainer}>{children}</main>;
};

export default NavBarMenu;
