import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  header: {
    background: "#252525",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "0px 15px",

    color: "#fefefe",

    "& div": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "60%",

      fontFamily: ["Poppins", "Roboto", "sans-serif"],
    },

    "& input": {
      color: "#fefefe",

      borderBottom: "1px solid #fefefe",

      "&:placeholder": {
        color: "#fefefe",
      },
      "&:hover": {
        borderBottom: "1px solid #fefefe",
        color: "#fefefe",
      },
    },

    "& ul": {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",

      listStyle: "none",

      "& li": {
        margin: "0px 25px",

        "& a": {
          "&:visited": {
            textDecoration: "none",
          },
        },
      },
    },
  },
});

export default useStyles;
