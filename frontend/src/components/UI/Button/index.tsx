import React from "react";
import useStyles from "./theme";

import { Button, ButtonProps } from "@mui/material";

export interface IButtonProps extends ButtonProps {
  width?: string;
  height?: string;
  styledStatus: string;
}
const ButtonStyled: React.FC<IButtonProps> = (props) => {
  const classes = useStyles({
    width: props.width,
    height: props.height,
    styledStatus: props.styledStatus,
  });

  const primaryStyled = {
    width: props.width,
    height: props.height,
    background: "#252525",
    color: "#fefefe",
    fontWeight: "bold",
  };
  const secondaryStyled = {
    width: props.width,
    height: props.height,
    background: "#fefefe",
    color: "#252525",
    fontWeight: "bold",
  };

  return (
    <Button
      {...props}
      style={props.styledStatus === "primary" ? primaryStyled : secondaryStyled}
    >
      {props.children}
    </Button>
  );
};

export default ButtonStyled;
