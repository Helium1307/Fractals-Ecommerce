import type { NextPage } from "next";

import { Typography } from "@mui/material";
import Link from "next/link";

import useStyles from "./theme";

interface IBGProps {
  children: React.ReactNode;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
}

const Header: NextPage<IBGProps> = ({
  children,
  justifyContent = "center",
  alignItems = "center",
}) => {
  const classes = useStyles({
    justifyContent: justifyContent,
    alignItems: alignItems,
  });

  return <main className={classes.mainContainer}>{children}</main>;
};

export default Header;
