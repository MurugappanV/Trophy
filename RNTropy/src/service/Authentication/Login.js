import { ItpAxiosInstance } from "../axios";

const LoginApi = (email, password, onSuccess, onFailure, onError) => {
	const url = "ws/sign-in";
	// login='robodiego'
	// password='Buddy6jar!'
	ItpAxiosInstance.post(url, {
		email,
		pass: password,
	})
		.then((response: any) => {
			console.log("login response", response, email, password);
			if (response.data.status === "Success") {
				onSuccess(response.data);
			} else if (response.data.status === "Failed") {
				onFailure(response.data);
			}
		})
		.catch((error: any) => {
			onError(error);
		});
};

export default LoginApi;
