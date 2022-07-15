import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Stack, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import * as yup from "yup";
import { Header } from "../../../components/Header/Header";
import { makeStyles } from '@mui/styles';
import "./Authorization.css";
import "../Authentication.css";

const validationSchema = yup.object({
  email: yup
    .string("Введите логин")
    .email("Некорректная почта")
    .required("Это поле не может быть пустым"),
  password: yup
    .string("Введите пароль")
    .min(8, "Пароль должен содержать минимум 8 знаков")
    .required("Это поле не может быть пустым"),
});

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

export const AuthorizationPage = () => {
  const [inputValue, setInputValue] = React.useState("");
  const navigate = useNavigate();
  const classes = useStyles();

  const onChange = (event) => {
    const { value } = event.target;
    console.log("@", inputValue);
    setInputValue(value);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      navigate(`/profile`);
    },
  });

  return (
    <Box className="mainbox unsigned">
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
            InputProps={{
              className: classes.root
            }}
            
          />
          <TextField
            sx={{ marginTop: '7px' }}
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
            InputProps={{
              className: classes.root
            }}
            
            /*InputProps={{
						endAdornment: showPasswordIcon()
					}}*/
          />
          <Box style={{ textAlign: "center" }}>
            <Button
              type="submit"
              className={classes.Button}
            >
              Войти
            </Button>
          </Box>
        </form>
      </Stack>
    </Box>
  );
};
