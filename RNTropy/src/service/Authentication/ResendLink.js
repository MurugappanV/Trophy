import { ItpAxiosInstance } from "../axios";

const ResendApi = (id: number, onSuccess, onFailure, onError) => {
	const url = `resend-activation/${id}`;
	// login='robodiego'
	// password='Buddy6jar!'
	ItpAxiosInstance.get(url)
		.then((response: any) => {
			console.log("response in resend", response);

			onSuccess(response.data.message);
		})
		.catch((error: any) => {
			onError(error);
		});
};

export default ResendApi;
