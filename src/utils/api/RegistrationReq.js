import axios from "axios";
//import { useNavigate } from "react-router";

/*export const registration = async (login, nickname, password) => {
	try {
		const response = await axios.post(
			"http://localhost:8085/auth/registration",
			{
				login,
				password,
				nickname
			}
		);

		alert(response.data.registration || "отправлено");
	} catch (e) {
		console.log(e.response.data.nickname);
	}
};*/


export const RegistrationReq = (values) => {

	//const navigate = useNavigate();

	/*Axios.post("http://localhost:8085/auth/registration", {}, {params: {login : values.login , password: values.password, name: values.nickname}}).then(response => {
		console.log((response.data));
		const userResult = response.data.login;
		return console.log(response.data.login);
	}).catch((error) => {
		console.log(error);
	})*/
	axios.post('http://localhost:8085/auth/registration', {
		login: values.login,
		password: values.password,
		name: values.nickname
	  })
	  .then((response) => {
		console.log(response);
	  }, (error) => {
		console.log(error);
	  });

	return console.log('itsok');
	
}