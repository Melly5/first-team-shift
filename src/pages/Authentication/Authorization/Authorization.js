import React, { useState } from "react";
import { TextField, Stack, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as yup from 'yup';
import Header from "../../../components/Header/Header";
import "./Authorization.css";
import "../Authentication.css";

const validationSchema = yup.object({
  email: yup
    .string('Введите логин')
    .email('Некорректная почта')
    .required('Это поле не может быть пустым'),
  password: yup
    .string('Введите пароль')
    .min(8, 'Пароль должен содержать минимум 8 знаков')
    .required('Это поле не может быть пустым'),
});


export const AuthorizationPage = () => {
  /*const navigate = useNavigate();

	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");*/
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const [inputValue, setInputValue] = React.useState("");

  const navigate = useNavigate();

  const onClick = () => {
    console.log("@", inputValue);
    navigate(`/chat`);
  };

  const onChange = (event) => {
    const { value } = event.target;
    console.log("@", inputValue);
    setInputValue(value);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate(`/chat`);
    },
  });

  return (
    <div className="mainbox unsigned">
      <Header />
      <Stack direction="column" className="container login" alignItems="center">
        <div className="auth-text">Вход</div>
        <form onSubmit={formik.handleSubmit}>
        <TextField
          sx={{ marginTop: "7px" }}
          className="login-input"
          label="Логин"
          variant="standard"
          borderRadius="30"
          fullWidth
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          sx={{ marginTop: "7px" }}
          className="login-input"
          label="Пароль"
          variant="standard"
          id="password"
          name="password"
          type="password"
          fullWidth
          //type={showPassword ? "text" : "password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}

          /*InputProps={{
						endAdornment: showPasswordIcon()
					}}*/
        />
        <Button type="submit" className="auth-button login" >
            Войти
        </Button>
        </form>
      </Stack>
    </div>
  );
};
