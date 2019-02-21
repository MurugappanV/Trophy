import { ItpAxiosInstance } from "../axios";

const PodcastViewListApi = (id, page, onSuccess, onFailure, onError) => {
	const url = `ws/podcast-brands/${id}?page=${page}`;
	// login='robodiego'
	// password='Buddy6jar!'
	ItpAxiosInstance.get(url)
		.then((response: any) => {
			console.log("podcast view list", response);
			if (response.status === 200) {
				onSuccess(response);
			} else {
				onFailure(response);
			}
		})
		.catch((error: any) => {
			onError(error);
		});
};

export default PodcastViewListApi;
