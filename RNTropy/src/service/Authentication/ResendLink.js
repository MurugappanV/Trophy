import { ItpAxiosInstance } from "../axios";

const ResendApi = (id: number) => {
	const url = `resend-activation/${id}`;
	// login='robodiego'
	// password='Buddy6jar!'
	ItpAxiosInstance.get(url)
		.then((response: any) => {
			console.log("resend response", response);
		})
		.catch((error: any) => {
			console.log("error", error);
		});
};

export default ResendApi;
