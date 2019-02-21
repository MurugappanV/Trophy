import { ItpAxiosInstance } from "../axios";

const TopicArticleApi = (topic_id, onSuccess, onFailure, onError) => {
	const url = "ws/article-list";
	// console.log("my trove api :", { topic_id });
	ItpAxiosInstance.post(url, { topic_id })
		.then((response: any) => {
			if (response.status === 200) {
				// null or empty
				// console.log("Got my trove topic response:", topic_id, response);
				onSuccess(response.data.items);
			} else {
				onFailure("Can't fetch topics");
			}
		})
		.catch((error: any) => {
			console.log("error ", error);
			onError(error);
		});
};

export default TopicArticleApi;
// : "2|3|5"
// : "cwo_en|mea_en|aviation_en"
