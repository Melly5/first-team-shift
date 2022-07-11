import React, { useState } from "react";
import { TextField, Stack /*, Button,IconButton, InputAdornment, useTheme, FormHelperText*/} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Header from "../../../components/Header/Header";
import "./Registration.css";
import "../Authentication.css";

export const RegistrationPage = () => {
  /*const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");*/

  const [showPassword, setShowPassword] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [error, setError] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: "#ffffff",
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
        dark: "#ACA6BB",
        contrastText: "#fff",
      },
      TextField: {
        marginTop: 5,
      },
      input: {
        color: "white",
      },
    },
  });

  /*const handleRegistrationResponse = async () => {
    if (
      login === "" ||
      email === "" ||
      password === "" ||
      passwordConfirm === ""
    ) {
      enableError("One or more fields are empty.");
      return;
    }

    const emailRegular =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegular.test(email)) {
      enableError("Email is incorrect.");
      return;
    }

    if (password !== passwordConfirm) {
      enableError("Confirmation password is incorrect.");
      return;
    }
	*/
    /*const responseSignUp = await auth.signUp(login, email, password);

		if (responseSignUp === "failure") {
			enableError("Sign up failed.");
			return;
		}*/

    /*const responseSignIn = await auth.signIn(login, password);

		if (responseSignIn === "failure") {
			enableError("Sign in failed.");
			return;
		}*/

    //navigate(`/tasks`, {replace: true});

  return (
    <div className="mainbox unsigned">
      <Header />
      <Stack
        direction="column"
        className="container signup"
        alignItems="center"
      >
        <div className="auth-text">Регистрация</div>
        <TextField
          sx={{ marginTop: "5px" }}
          type="text"
          label="Логин/Почта"
          variant="standard"
          className="StandardInput"
          fullWidth
          //onChange={handleLoginOnChange}
        />
        <TextField
          sx={{ marginTop: "5px" }}
          type="email"
          label="ФИО"
          className="StandardInput"
          variant="standard"
          fullWidth
          //onChange={handleEmailOnChange}
        />
        <TextField
          sx={{ marginTop: "5px" }}
          label="Пароль"
          type={showPassword ? "text" : "password"}
          className="StandardInput"
          variant="standard"
          fullWidth
          //onChange={handlePasswordOnChange}
          /*InputProps={{
						
						endAdornment: PasswordIcon()
					}}*/
        />
        <TextField
          sx={{ marginTop: "5px" }}
          label="Повторите пароль"
          type={showPassword ? "text" : "password"}
          className="StandardInput"
          variant="standard"
          fullWidth
          helperText={errorText}
          error={error}
          //onChange={handlePasswordConfirmOnChange}
        />
        <div
          className="auth-button signup" /*onClick={handleRegistrationResponse} */
        >
          Зарегистрироваться
        </div>
      </Stack>
    </div>
  );
}
