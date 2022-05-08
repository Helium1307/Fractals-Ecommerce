import type { NextPage } from "next";
import useStyles from "../styles/LoginPage/theme";

import { Button, TextField, Container, Typography, Fab } from "@mui/material";
import { Google, ArrowBack } from "@mui/icons-material";
import Link from "next/link";
import CircleBackButton from "../src/components/UI/CircleBackButton";
import ButtonStyled from "../src/components/UI/Button";

const Login: NextPage = () => {
  const classes = useStyles();

  return (
    <body>
      <CircleBackButton style={{ margin: "10px 0 0 16px" }} href={"/"} />
      <main className={classes.mainContainer}>
        <Container className={classes.contentContainer}>
          <div className={classes.loginContainer}>
            <Typography fontWeight={"bold"} variant="h4">
              JÁ POSSUO CADASTRO
            </Typography>
            <TextField
              style={{ width: "90%" }}
              variant="outlined"
              placeholder="Email"
              label="Email"
              type="email"
            />
            <TextField
              style={{ width: "90%" }}
              variant="outlined"
              placeholder="Password"
              label="Password"
              type="password"
            />

            <ButtonStyled
              type="submit"
              width="95%"
              height="8%"
              background={"primary"}
            >
              Login
            </ButtonStyled>

            <div className={classes.forgotsContainer}>
              <Link href={"/forgot-login"}>
                <Typography variant="overline">Esqueci meu login</Typography>
              </Link>
              <Link href={"/forgot-password"}>
                <Typography variant="overline">Esqueci minha senha</Typography>
              </Link>
            </div>

            <div
              className={classes.lineDivision}
              style={{
                width: "85%",
                height: "0px",
                border: "1px solid #bebebe53",
              }}
            ></div>

            <Button variant="outlined" className={classes.googleButton}>
              <Google />
              <span>Utilize sua conta Google</span>
            </Button>
          </div>

          <div className={classes.lineDivision}></div>

          <div className={classes.registerContainer}>
            <Typography fontWeight={"bold"} variant="h4">
              QUERO ME CADASTRAR
            </Typography>
            <TextField
              style={{ width: "90%" }}
              variant="outlined"
              placeholder="Email *"
              label="Email"
              type="email"
            />
            <TextField
              style={{ width: "90%" }}
              variant="outlined"
              placeholder="Senha *"
              label="Senha"
              type="password"
            />
            <TextField
              style={{ width: "90%" }}
              variant="outlined"
              placeholder="Confirmar senha *"
              label="Confirmar senha"
              type="password"
            />
            <TextField
              style={{ width: "90%" }}
              variant="outlined"
              placeholder="CPF ou CNPJ"
              label="CPF ou CNPJ"
              type="text"
            />
            <TextField
              style={{ width: "90%" }}
              variant="outlined"
              placeholder="CEP"
              label="XXXXX-XXX"
              type="text"
            />

            <Button
              variant="contained"
              type="submit"
              style={{ width: "95%", height: "8%" }}
            >
              Cadastrar
            </Button>
          </div>
        </Container>
      </main>
    </body>
  );
};

export default Login;
