import React, { useState } from 'react';
import { TextField,Typography, Stack/*, Button,IconButton, InputAdornment, useTheme, FormHelperText*/ } from "@mui/material";
import "./registration.css";
import Header from '../../components/Header/header';
import { Link } from "react-router-dom";
import { createTheme } from '@mui/material/styles';

function RegistrationPage() {
	/*const [login, setLogin] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')*/

	const [showPassword, setShowPassword] = useState(false);
	const [errorText, setErrorText] = useState('')
	const [error, setError] = useState(false);

	const theme = createTheme({
		palette: {
			primary: {
				// light: will be calculated from palette.primary.main,
				main: '#ffffff',
				// dark: will be calculated from palette.primary.main,
				// contrastText: will be calculated to contrast with palette.primary.main
				dark: '#ACA6BB',
				contrastText: '#fff',
			},
			TextField: {
				marginTop: 5
			},
			input: {
				color: 'white'
			}
		}
	});

	return (
		<div className='mainbox'>
            <Header/>
			<Stack direction="column" className="container signup" alignItems="center" >
			<p className="login-text">Регистрация</p>
				<TextField
					sx ={{marginTop: '5px'}}
					type='text'
					label="Логин/Почта"
					variant='standard'
					className="StandardInput"
					fullWidth				
					//onChange={handleLoginOnChange}
				/>
				<TextField
					sx ={{marginTop: '5px'}}
					type='email'
					label="ФИО"
					className="StandardInput"
					variant='standard'
					fullWidth
					//onChange={handleEmailOnChange}
				/>
				<TextField
					sx ={{marginTop: '5px'}}
					label="Пароль"
					type={showPassword ? 'text' : 'password'}
					className="StandardInput"
					variant='standard'
					fullWidth
					//onChange={handlePasswordOnChange}
					/*InputProps={{
						
						endAdornment: PasswordIcon()
					}}*/
				/>
				<TextField
					sx ={{marginTop: '5px'}}
					label="Повторите пароль"
					type={showPassword ? 'text' : 'password'}
					className="StandardInput"
					variant='standard'
					fullWidth
					helperText={errorText}
					error={error}
					//onChange={handlePasswordConfirmOnChange}
				/>
				<div className='auth-button signup'/*onClick={handleRegistrationResponse} */>
   					Зарегистрироваться
				</div>
			</Stack>
			
	</div>
	);
}

export default RegistrationPage;