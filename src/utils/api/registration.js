import axios from "axios";

export const registration = async (login, nickname, password) => {
	try {
		const response = await axios.post(
			"http://localhost:8085/auth/registration",
			{
				login,
				password,
				nickname
			}
		);

		alert(response.data.message || "отправлено");
	} catch (e) {
		alert(e.response.data.message);
	}
};