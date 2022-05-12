import { makeStyles } from "@material-ui/styles";

interface IButtonProps {
  width?: string;
  height?: string;
  styledStatus?: string;
}

const useStyles = makeStyles({
  styledButton: {
    width: (props: IButtonProps) => {
      return props.width ? props.width : "95%";
    },
    height: (props: IButtonProps) => {
      return props.height ? props.height : "10%";
    },
    background: (props: IButtonProps) => {
      if (props.styledStatus === "primary") {
        return "#252525";
      } else {
        return "#fefefe";
      }
    },
    color: (props: IButtonProps) => {
      if (props.styledStatus === "primary") {
        return "#fefefe";
      } else {
        return "#252525";
      }
    },
    fontWeight: "bold",
    boxShadow: "none",

    "&:hover": {
      background: (props: IButtonProps) => {
        if (props.styledStatus === "primary") {
          return "#252525";
        } else {
          return "#fefefe";
        }
      },
    },
  },
});

export default useStyles;
