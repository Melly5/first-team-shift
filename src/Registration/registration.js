import React, { useState } from 'react';
import { TextField,Typography, Stack, Button,
	IconButton, InputAdornment, useTheme, FormHelperText } from "@mui/material";
import "./registration.css"
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

function RegistrationPage() {
	const [login, setLogin] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')

	const [showPassword, setShowPassword] = useState(false);
	const [errorText, setErrorText] = useState('')
	const [error, setError] = useState(false);

	return (
		<div className='mainbox-signup'>
			<div className='box'>
			<Stack direction="column" className="container1"  spacing={2} alignItems="center">
			<Typography fontSize={24} fontWeight={600} >	Sign Up</Typography>
				<TextField
					type='text'
					label="Login"
					variant='standard'
					className="StandardInput"
					fullWidth				
					//onChange={handleLoginOnChange}
				/>
				<TextField
					type='email'
					label="Email"
					className="StandardInput"
					variant='standard'
					fullWidth
					//onChange={handleEmailOnChange}
				/>
				<TextField
					label="Password"
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
					label="Confirm Password"
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
					borderRadius: 5,
					marginTop: 5,
						
				}}
				//</div>onClick={handleRegistrationResponse}
                >
				<Typography fontSize={15} >Sign Up</Typography>		
			</Button>
			</div>
	</div>
	);
}

export default RegistrationPage;