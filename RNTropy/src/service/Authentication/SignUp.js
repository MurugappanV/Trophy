import { ItpAxiosInstance } from "../axios";

// const PRODUCTION = "http://murugappan.pythonanywhere.com/";
// const PATH = "api/v1/seller/";

function SignUpApi(name, email, password, deviceId, onSuccess, onFailure, onError) {
	const url = "ws/create-user";
	return ItpAxiosInstance.post(url, {
		name: name,
		email: email,
		pass: password,
		device_id: deviceId,
	})
		.then((response: any) => {
			if (response.data.status === "1") {
				onSuccess(response.data.message);
			} else if (response.data.status === "2") {
				onFailure(response.data.message);
			}
		})
		.catch((error: any) => {
			console.log("error", error);
		});
}

export default SignUpApi;
