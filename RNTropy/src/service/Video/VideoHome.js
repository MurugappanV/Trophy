import { ItpAxiosInstance } from "../axios";

const VideoHomeAPI = (topicsIds, brands, onSuccess, onFailure, onError) => {
	const url = "ws/article-list";
	console.log("VideoHomeAPI url: ", url);
	ItpAxiosInstance.post(url, { ctype: "video", topic_id: topicsIds, brand: brands })
		.then((response: any) => {
			if (response.data) {
				console.log("VideoHomeAPI response:", response);
				console.log("VideoHomeAPI are :", response.data.items);
				onSuccess(response.data.items);
			} else {
				console.log("Failed to Show VideoHomeAPI:", response);
				onFailure("Can't fetch topics");
			}
		})
		.catch((error: any) => {
			console.log("Error to Show History response:", error);
			onError(error);
		});
};

export default VideoHomeAPI;
