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
    .required("Digite a mesma senha")
    .oneOf([Yup.ref("password"), null], "Senhas devem corresponder"),
  CPF: Yup.string().required("Digite um CPF"),
  CEP: Yup.string().required("Digite um CEP"),
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
                    textFieldProps={{
                      variant: "outlined",
                      label: "Email",
                      style: { width: "90%" },
                      placeholder: "Email",
                      type: "email",
                    }}
                  />

                  <TextInput
                    name="password"
                    textFieldProps={{
                      variant: "outlined",
                      label: "Senha",
                      style: { width: "90%" },
                      placeholder: "Senha",
                      type: "password",
                    }}
                  />

                  <ButtonStyled
                    width="100%"
                    height="16%"
                    type="submit"
                    styledStatus="primary"
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
                  <TextInput
                    name="email"
                    textFieldProps={{
                      variant: "outlined",
                      label: "Email",
                      style: { width: "90%" },
                      placeholder: "Email",
                      type: "email",
                    }}
                  />
                  <TextInput
                    name="password"
                    textFieldProps={{
                      variant: "outlined",
                      label: "Digite uma Senha",
                      style: { width: "90%" },
                      placeholder: "Digite uma senha",
                      type: "password",
                    }}
                  />
                  <TextInput
                    name="password2"
                    textFieldProps={{
                      variant: "outlined",
                      label: "Confirme sua senha",
                      style: { width: "90%" },
                      placeholder: "Confirme sua senha",
                      type: "password",
                    }}
                  />
                  <TextInput
                    name="CPF"
                    textFieldProps={{
                      variant: "outlined",
                      label: "Digite seu CPF",
                      style: { width: "90%" },
                      placeholder: "Digite seu CPF",
                      type: "text",
                    }}
                  />
                  <TextInput
                    name="CEP"
                    textFieldProps={{
                      variant: "outlined",
                      label: "Digite seu CEP",
                      style: { width: "90%" },
                      placeholder: "Digite seu CEP",
                      type: "text",
                    }}
                  />

                  <ButtonStyled
                    width="100%"
                    height="10%"
                    type="submit"
                    styledStatus="secondary"
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
