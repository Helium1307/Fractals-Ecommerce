import type { NextPage } from "next";

import { Button, TextField, Container, Typography, Fab } from "@mui/material";
import { Google, ArrowBack } from "@mui/icons-material";
import useStyles from "../styles/LoginPage/theme";
import Link from "next/link";

const Login: NextPage = () => {
  const classes = useStyles();

  return (
    <body>
      <div>
        <Link href="/">
          <Fab style={{ margin: "10px 0 0 16px" }}>
            <ArrowBack />
          </Fab>
        </Link>
      </div>
      <main className={classes.mainContainer}>
        <Container className={classes.contentContainer}>
          <Typography variant="h4">Logo</Typography>

          <TextField
            style={{ width: "100%" }}
            variant="outlined"
            placeholder="Email"
            label="Email"
            type="email"
          />
          <TextField
            style={{ width: "100%" }}
            variant="outlined"
            placeholder="Password"
            label="Password"
            type="password"
          />

          <Button variant="contained" type="submit" style={{ width: "100%" }}>
            Login
          </Button>

          <div>
            <span style={{ color: "#9c9c9c", fontSize: "14px" }}> - ou - </span>
          </div>

          <Button variant="outlined" className={classes.googleButton}>
            <Google />
            <span>Utilize sua conta Google</span>
          </Button>
        </Container>
      </main>
    </body>
  );
};

export default Login;
