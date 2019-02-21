import { ItpAxiosInstance } from "../axios";

const MyTroveApi = (topic_id, brand, onSuccess, onFailure, onError) => {
	const url = "ws/my-trove";
	console.log("my trove api :", { topic_id, brand });
	ItpAxiosInstance.post(url, { topic_id, brand })
		.then((response: any) => {
			if (response.status === 200) {
				// null or empty
				console.log("Got my trove response:", topic_id, brand, response);
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
// : "2|3|5"
// : "cwo_en|mea_en|aviation_en"
