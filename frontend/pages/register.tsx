import type { NextPage } from "next";

import { Button, TextField, Container, Typography, Fab } from "@mui/material";
import { Google, ArrowBack } from "@mui/icons-material";
import useStyles from "../styles/LoginPage/theme";
import Link from "next/link";
import CircleBackButton from "../src/components/UI/CircleBackButton";

const Login: NextPage = () => {
  const classes = useStyles();

  return (
    <body>
      <CircleBackButton style={{ margin: "10px 0 0 16px" }} href={"/"} />
      <main className={classes.mainContainer}>
        <Container className={classes.contentContainer}>
          <Typography variant="h4">Logo</Typography>

          <TextField
            style={{ width: "100%" }}
            variant="outlined"
            placeholder="Email *"
            label="Email"
            type="email"
          />
          <TextField
            style={{ width: "100%" }}
            variant="outlined"
            placeholder="Senha *"
            label="Senha"
            type="password"
          />
          <TextField
            style={{ width: "100%" }}
            variant="outlined"
            placeholder="Confirmar senha *"
            label="Confirmar senha"
            type="password"
          />
          <TextField
            style={{ width: "100%" }}
            variant="outlined"
            placeholder="CPF ou CNPJ"
            label="CPF ou CNPJ"
            type="text"
          />
          <TextField
            style={{ width: "100%" }}
            variant="outlined"
            placeholder="CEP"
            label="XXXXX-XXX"
            type="text"
          />

          <Button variant="contained" type="submit" style={{ width: "100%" }}>
            Cadastrar
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
