import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  navWrapper: {
    background: "#252525",
    display: "flex",
    justifyContent: "center",

    maxHeight: "3.7rem",
  },

  navBar: {
    "& ul": {
      listStyle: "none",

      display: "flex",
      justifyContent: "space-between",
      alignContent: "center",

      width: "65rem",

      color: "#fefefe",
      fontFamily: ["Poppins", "sans-serif", "Roboto"],

      "& li": {
        padding: "8px",
        "& a": {
          cursor: "pointer",
        },
        "&:hover": {
          borderBottom: "2px solid #fff",
        },
      },
    },
  },
});

export default useStyles;
