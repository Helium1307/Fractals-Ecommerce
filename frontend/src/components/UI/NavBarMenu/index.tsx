import type { NextPage } from "next";

import useStyles from "./theme";
interface INavBarMenuProps {
  children: React.ReactNode;
}

const NavBarMenu: React.FC<INavBarMenuProps> = ({ children }) => {
  const classes = useStyles();

  return <main className={classes.mainContainer}>{children}</main>;
};

export default NavBarMenu;
