import { makeStyles } from "@material-ui/styles";

interface IStyleMainContainerProps {
  justifyContent?: string;
  alignItems?: string;
}

const useStyles = makeStyles({
  mainContainer: (props: IStyleMainContainerProps) => ({
    display: "flex",
    justifyContent: props.justifyContent || "center",
    alignItems: props.alignItems || "center",

    background: "#a7a7a7a7",
  }),
});

export default useStyles;
