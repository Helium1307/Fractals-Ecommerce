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
    flexDirection: "column",
    alignItems: "center",

    marginTop: "12rem",

    width: "23vw",
    height: "50vh",

    padding: "14px ",

    border: "1px solid #adadad",
    borderRadius: "5px",

    transition: "0.3s",

    "&:hover": {
      boxShadow: "7px 7px 9px 0px #bebebe",
    },
  },

  googleButton: {
    width: "100%",

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
});

export default useStyles;
