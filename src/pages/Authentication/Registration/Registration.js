import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Stack, Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Box } from "@mui/system";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Header } from "../../../components/Header/Header";
import "./Registration.css";
import { makeStyles } from '@mui/styles';
//import { ROUTES } from "./utils/constants/router";

const useStyles = makeStyles({
  input: {
    color: 'white'
  },
  Button: {
    marginTop: "30px",
    marginBottom: "5px",
    background:
      "linear-gradient(to right, #3f51b5 0%, #6173db 100%)",
    padding: "0.6rem 1.5rem",
    color: "#fff",
    fontSize: "17px",
    borderRadius: "5px",
  },
  root: {
    color: 'white',
    "&.Mui-focused": {
      color: "white"
    }
  }
});

const validationSchema = yup.object({
  email: yup
    .string('Введите логин')
    .email('Некорректная почта')
    .required('Это поле не может быть пустым'),
  nickname: yup
    .string('Введите ФИО')
    .required('Это поле не может быть пустым'),
  password: yup
    .string('Введите пароль')
    .min(8, 'Пароль должен содержать минимум 8 знаков')
    .required('Это поле не может быть пустым'),
  confirmPassword:  yup
  .string('Повторите пароль')
  .min(8, 'Пароль должен содержать минимум 8 знаков')
  .oneOf([yup.ref('password'), null], "Пароли не совпадают")
  .required('Это поле не может быть пустым'),
});


export const RegistrationPage = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: '',
      nickname: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate(`/chat`);
    },
  });

  return (
    <Box className="mainbox unsigned">
      <Header />
      <Stack
        direction="column"
        className="container signup"
        alignItems="center"
      >
        <div className="auth-text">Регистрация</div>
        <form onSubmit={formik.handleSubmit}>
        <TextField
          sx={{ marginTop: "5px" }}
          type="text"
          label="Логин/Почта"
          variant="standard"
          InputProps={{
            className: classes.root
          }}
          fullWidth
          id="email"
          name="email"
          //color = {classes.color}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          sx={{ marginTop: "5px" }}
          type="text"
          label="ФИО"
          className="StandardInput"
          variant="standard"
          fullWidth
          id="nickname"
          name="nickname"        
          value={formik.values.nickname}
          onChange={formik.handleChange}
          error={formik.touched.nickname && Boolean(formik.errors.nickname)}
          helperText={formik.touched.nickname && formik.errors.nickname}
          InputProps={{
            className: classes.root
          }}
        />
        <TextField
          sx={{ marginTop: "5px" }}
          label="Пароль"
          //type={showPassword ? "text" : "password"}
          className="StandardInput"
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
          InputProps={{
            className: classes.root
          }}
          
          //onChange={handlePasswordOnChange}
          /*InputProps={{
						
						endAdornment: PasswordIcon()
					}}*/
        />
        <TextField
          sx={{ marginTop: "5px" }}
          label="Повторите пароль"
          //type={showPassword ? "text" : "password"}
          className="StandardInput"
          variant="standard"
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          type="confirmPassword"
          //type={showPassword ? "text" : "password"}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          InputProps={{
            className: classes.root
          }}
          
          //onChange={handlePasswordConfirmOnChange}
        />
        <Box style={{ textAlign: "center" }}>
            <Button
              type="submit"
              className={classes.Button}
            >
              Зарегистрироваться
            </Button>
          </Box>
        </form>
      </Stack>
    </Box>
  );
}
