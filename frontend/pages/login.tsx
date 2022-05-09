import type { NextPage } from "next";
import useStyles from "../styles/LoginPage/theme";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import { Button, TextField, Container, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import Link from "next/link";
import CircleBackButton from "../src/components/UI/CircleBackButton";
import ButtonStyled from "../src/components/UI/Button";
import TextInput from "../src/components/UI/Form/TextInput";
import { useState } from "react";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("Digite um e-mail"),
  password: Yup.string().required("Digite uma senha"),
});

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Digite um e-mail válido")
    .required("Digite um e-mail"),
  password: Yup.string().required("Digite uma senha"),
  password2: Yup.string()
    .required("Digite uma senha")
    .oneOf([Yup.ref("password"), null], "Senhas devem corresponder"),
  CPForCNPJ: Yup.string().required("Ex.: XXX.XXX.XXX-XX"),
  CEP: Yup.string().required("XXXXX-XXX"),
});

const Login: NextPage = () => {
  const classes = useStyles();

  const handleSubmitLogin = (e: any) => {
    console.log(e);
  };

  const handleSubmitRegister = (e: any) => {
    console.log(e);
  };

  return (
    <body>
      <CircleBackButton style={{ margin: "10px 0 0 16px" }} href={"/"} />
      <main className={classes.mainContainer}>
        <Container className={classes.contentContainer}>
          <div className={classes.loginContainer}>
            <Typography fontWeight={"bold"} variant="h4">
              JÁ POSSUO CADASTRO
            </Typography>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={loginSchema}
              onSubmit={handleSubmitLogin}
            >
              {(props) => (
                <Form className={classes.formLogin}>
                  <TextInput
                    name="email"
                    variant="outlined"
                    label="Email"
                    type="email"
                    placeholder="Email"
                    style={{ width: "90%" }}
                  />
                  <TextInput
                    name="password"
                    variant="outlined"
                    style={{ width: "90%" }}
                    label="Password"
                    placeholder="Senha"
                    type="password"
                  />

                  <ButtonStyled
                    background="primary"
                    height="15%"
                    type="submit"
                    onClick={() => {
                      handleSubmitLogin(props);
                    }}
                  >
                    Login
                  </ButtonStyled>
                </Form>
              )}
            </Formik>
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
            <Formik
              initialValues={{
                email: "",
                password: "",
                password2: "",
                CPForCNPJ: "",
                CEP: "",
              }}
              validationSchema={registerSchema}
              onSubmit={handleSubmitRegister}
            >
              {(props) => (
                <Form className={classes.formRegister}>
                  <TextField
                    name="email"
                    style={{ width: "90%" }}
                    variant="outlined"
                    placeholder="Email*"
                    label="Digite um email"
                    type="email"
                  />
                  <TextField
                    name="password"
                    style={{ width: "90%" }}
                    variant="outlined"
                    placeholder="Senha*"
                    label="Digite uma senha"
                    type="password"
                  />
                  <TextField
                    name="password2"
                    style={{ width: "90%" }}
                    variant="outlined"
                    placeholder="Confirmar senha*"
                    label="Confirme a senha"
                    type="password"
                  />
                  <TextField
                    name="CPForCNPJ"
                    style={{ width: "90%" }}
                    variant="outlined"
                    placeholder="CPF ou CNPJ*"
                    label="CPF ou CNPJ"
                    type="text"
                  />
                  <TextField
                    name="CEP"
                    style={{ width: "90%" }}
                    variant="outlined"
                    placeholder="CEP*"
                    label="CEP"
                    type="text"
                  />

                  <ButtonStyled
                    width="100%"
                    height="8%"
                    type="submit"
                    background="secondary"
                  >
                    Cadastrar
                  </ButtonStyled>
                </Form>
              )}
            </Formik>
          </div>
        </Container>
      </main>
    </body>
  );
};

export default Login;
