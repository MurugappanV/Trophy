import { ItpAxiosInstance } from "../axios";

const MyTroveApi = (onSuccess, onFailure, onError) => {
	const url = "ws/my-trove";
	ItpAxiosInstance.post(url, { topic_id: "2|3|5", brand: "cwo_en|mea_en|aviation_en" })
		.then((response: any) => {
			if (response.status === 200) {
				// null or empty
				console.log("Got my trove response:", response);
				onSuccess(response.data);
			} else {
				onFailure("Can't fetch topics");
			}
		})
		.catch((error: any) => {
			console.log("error ", error);
			onError(error);
		});
};

export default MyTroveApi;
