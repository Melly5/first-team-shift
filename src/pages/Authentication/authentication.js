import React, { useState } from "react";
import {
  TextField,
  Typography,
  Stack /*, Button, IconButton, InputAdornment */,
} from "@mui/material";
import Header from "../../components/Header/header";
import "./authentication.css";
import { Link, useNavigate } from "react-router-dom";

function AuthenticationPage() {
  /*const navigate = useNavigate();

	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");*/
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  return (
    <div className="mainbox unsigned">
      <Header />
      <Stack direction="column" className="container login" alignItems="center">
        <p className="login-text">Вход</p>
        <TextField
          sx={{ marginTop: "7px" }}
          className="login-input"
          label="Логин"
          variant="standard"
          borderRadius="30"
          fullWidth
          //onChange={(event) => handleLoginOnChange(event)}
        />
        <TextField
          sx={{ marginTop: "7px" }}
          className="login-input"
          label="Пароль"
          variant="standard"
          fullWidth
          type={showPassword ? "text" : "password"}
          //onChange={(event) => handlePasswordOnChange(event)}
          helperText={errorText}
          error={error}
          /*InputProps={{
						endAdornment: showPasswordIcon()
					}}*/
        />
        <div
          className="auth-button login" /*onClick={() => handleSignInResponse()}*/
        >
          <Link to="/chat" style={{ textDecoration: "none", color: "white" }}>
            Войти
          </Link>
        </div>
      </Stack>
    </div>
  );
}

export default AuthenticationPage;
