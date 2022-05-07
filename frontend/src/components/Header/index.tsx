import type { NextPage } from "next";

import { TextField, Typography } from "@mui/material";
import Link from "next/link";

import useStyles from "./theme";

interface IHeaderProps {
  listItem: Array<{
    href: string;
    content?: string;
    component?: React.ReactNode;
    logComponent?: boolean;
  }>;
}

const Header: NextPage<IHeaderProps> = ({ listItem }) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div>
        <Typography variant="h4">
          <Link href="/">Logo</Link>
        </Typography>

        <TextField variant="standard" placeholder="Search..." />

        <ul>
          {listItem !== undefined
            ? listItem.map((item) => {
                return (
                  <>
                    <li key={listItem.indexOf(item)}>
                      <Link href={item.href}>
                        <a>
                          {item.component === undefined
                            ? item.content
                            : item.component}
                        </a>
                      </Link>
                    </li>
                  </>
                );
              })
            : null}
        </ul>
      </div>
    </header>
  );
};

export default Header;
