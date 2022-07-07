import React, { useState } from 'react';
import { TextField,Typography, Stack, Button,
	IconButton, InputAdornment } from "@mui/material";
import Header from '../components/Header/header';
import "./authentication.css"
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { borderRadius, fontWeight } from '@mui/system';
import { Link } from "react-router-dom";

function AuthenticationPage() {

	const navigate = useNavigate();

	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState(false);
	const [errorText, setErrorText] = useState("");


	return (
		<div className='mainbox-login'>
            <Header/>
			<div className="box">
			<Stack direction="column" className="container1"  spacing={2} alignItems = "center">
				<Typography fontSize={24} fontWeight={600}>	Sign In</Typography>
				<TextField					
					id="standard-basic"
					label="Login"
					variant="standard"
					borderRadius = "30"
					fullWidth 			
					//onChange={(event) => handleLoginOnChange(event)}
				/>				
				<TextField
					id="standard-basic-1"
					label="Password"
					variant="standard"
					fullWidth 
					type={showPassword ? 'text' : 'password'}
					//onChange={(event) => handlePasswordOnChange(event)}
					helperText={errorText}
					error={error}
					/*InputProps={{
						endAdornment: showPasswordIcon()
					}}*/
				/>
			</Stack>
			</div>
			<div className='button'>
				<Button
					sx={{ 
						color: 'white',					 
						borderRadius: 5,
						marginTop: 5					
					}}
					className="log_but"
					variant="text"
					//</div>onClick={() => handleSignInResponse()}
                    >					
					<Typography fontSize={15}>Sign In</Typography>					
				</Button>
			</div>			
		</div>
	);
}

export default AuthenticationPage;