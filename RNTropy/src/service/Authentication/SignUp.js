import { ItpAxiosInstance } from "../axios";

// const PRODUCTION = "http://murugappan.pythonanywhere.com/";
// const PATH = "api/v1/seller/";

function SignUpApi(name, email, password, deviceId, onSuccess, onFailure, onError) {
	const url = "ws/create-user";
	return ItpAxiosInstance.post(url, {
		name,
		email,
		pass: password,
		device_id: deviceId,
	})
		.then((response: any) => {
			if (response.data.status === "Success" || response.data.status === "1") {
				onSuccess(response.data.message);
			} else {
				onFailure(response.data.message);
			}
		})
		.catch((error: any) => {
			onError(error);
		});
}

export default SignUpApi;
