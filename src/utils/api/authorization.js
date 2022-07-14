import axios from "axios";

export const authorization = async (login, nickname, password) => {
	try {
		const response = await axios.post(
			"http://localhost:8085/auth/login",
			{
				login,
				password
			}
		);

		alert(response.data.message || "отправлено");
	} catch (e) {
		alert(e.response.data.message);
	}
};