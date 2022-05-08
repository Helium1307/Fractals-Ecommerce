import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "100%",
  },

  contentContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",

    marginTop: "10rem",

    width: "60vw",
    height: "62vh",

    padding: "14px",

    border: "1px solid #adadad",
    borderRadius: "5px",
  },

  googleButton: {
    width: "95%",

    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",

    background: "#fefefe",
    color: "#da5050",
    border: "1px solid #da5050",

    "&:hover": {
      color: "#f1f1f1",
      background: "#da5050",

      border: "1px solid #da5050",
    },
  },

  lineDivision: {
    height: "95%",
    width: "0px",
    border: "1px solid #bebebed5",
  },

  loginContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",

    width: "40%",
    height: "100%",
  },
  loginBtn: {
    background: "#252525",
    color: "#fefefe",
    fontWeight: "bold",
    boxShadow: "none",
  },

  registerContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",

    width: "45%",
    height: "100%",

    "& button": {
      border: "1px solid #252525",
      background: "none",
      color: "#252525",
      fontWeight: "bold",
      boxShadow: "none",

      "&:hover": {
        background: "none",
      },
    },
  },

  forgotsContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",

    color: "#919191eb",
    fontWeight: "bold",
    textDecoration: "underline",

    width: "100%",
  },
});

export default useStyles;
