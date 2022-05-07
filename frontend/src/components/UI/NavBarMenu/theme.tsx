import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    flexFlow: "row wrap",

    background: "#252525",
    color: "#fefefe",

    borderRadius: "3px",
    position: "absolute",

    right: "300px",

    padding: "10px",
    width: "80rem",
    height: "30rem",
  },
});

export default useStyles;
