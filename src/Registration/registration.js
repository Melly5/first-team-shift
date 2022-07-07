import React, { useState } from 'react';
import { TextField,Typography, Stack, Button,
	IconButton, InputAdornment, useTheme, FormHelperText } from "@mui/material";
import "./registration.css"
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { createTheme } from '@mui/material/styles';

function RegistrationPage() {
	const [login, setLogin] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')

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
	},
});
	return (
		<div className='mainbox-signup'>
			<div className='box'>
			<Stack direction="column" className="container1" alignItems="center" spacing={2} >
			<Typography fontSize={24} fontWeight={400} color={theme.palette.primary.main}>Регистрация</Typography>
				<TextField
					type='text'
					label="Логин"
					variant='standard'
					className="StandardInput"
					fullWidth				
					//onChange={handleLoginOnChange}
				/>
				<TextField
					type='email'
					label="Почта"
					className="StandardInput"
					variant='standard'
					fullWidth
					//onChange={handleEmailOnChange}
				/>
				<TextField
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
					label="Повторите пароль"
					type={showPassword ? 'text' : 'password'}
					className="StandardInput"
					variant='standard'
					fullWidth
					helperText={errorText}
					error={error}
					//onChange={handlePasswordConfirmOnChange}
				/>
			</Stack>
			</div>
			<div className='button'>
			<Button 
				className='button_Registration'
				variant='text' 
				sx={{ 
					color: 'white', 
					borderRadius: 2,
					marginTop: -12,
						
				}}
				//</div>onClick={handleRegistrationResponse}
                >
				<Typography 
				variant='text'
				fontSize={15}>Зарегистрироваться</Typography>		
			</Button>
			</div>
	</div>
	);
}

export default RegistrationPage;