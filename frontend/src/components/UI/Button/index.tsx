import React from "react";
import useStyles from "./theme";

import { Button, ButtonProps } from "@mui/material";

export interface IButtonProps extends ButtonProps {
  width?: string;
  height?: string;
  background?: string;
  fontColor?: string;
}
const ButtonStyled: React.FC<IButtonProps> = (props) => {
  const classes = useStyles({
    width: props.width,
    height: props.height,
    background: props.background,
    fontColor: props.fontColor,
  });

  return (
    <Button {...props} className={classes.buttonStyled}>
      {props.children}
    </Button>
  );
};

export default ButtonStyled;
