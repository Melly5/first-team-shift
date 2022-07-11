import React, { useState } from "react";
import { TextField, Stack /*, Button, IconButton, InputAdornment */} from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import "./Authorization.css";
import "../Authentication.css";

export const AuthorizationPage = () => {
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
        <div className="auth-text">Вход</div>
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

