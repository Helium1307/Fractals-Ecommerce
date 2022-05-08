import { ArrowBack } from "@mui/icons-material";
import { Fab } from "@mui/material";
import Link from "next/link";
import React from "react";

interface IPropsBackButton {
  style?: {};
  href: string;
}
const CircleBackButton: React.FC<IPropsBackButton> = ({ style, href }) => {
  return (
    <div>
      <Link href={href}>
        <Fab style={style}>
          <ArrowBack />
        </Fab>
      </Link>
    </div>
  );
};

export default CircleBackButton;
