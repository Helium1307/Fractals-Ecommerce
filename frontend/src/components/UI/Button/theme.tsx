import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  buttonStyled: {
    width: (props: {
      width?: string;
      height?: string;
      background?: string;
      fontColor?: string;
    }) => {
      return props.width && "95%";
    },
    height: (props: { height?: string }) => {
      return props.height && "8%";
    },
    background: (props: { background?: string }) => {
      if (props.background === "primary") {
        return "#252525";
      } else if (props.background === "secondary") {
        return "#fefefe";
      } else {
        return props.background;
      }
    },
    color: (props: { background?: string; fontColor?: string }) => {
      if (props.background === "primary") {
        return "#fefefe";
      } else if (props.background === "secondary") {
        return "#252525";
      } else {
        return props.fontColor;
      }
    },
    fontWeight: "bold",
    boxShadow: "none",

    "&:hover": {
      background: (props: { background?: string }) => {
        if (props.background === "primary") {
          return "#252525";
        } else if (props.background === "secondary") {
          return "#fefefe";
        } else {
          return props.background;
        }
      },
    },
  },
});

export default useStyles;
