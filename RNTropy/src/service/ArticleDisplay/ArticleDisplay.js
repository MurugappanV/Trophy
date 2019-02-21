import { ItpAxiosInstance } from "../axios";

const ArticleDisplayApi = (articleId, onSuccess, onFailure, onError) => {
	const url = `ws/article-details/${articleId}`;
	ItpAxiosInstance.get(url)
		.then((response: any) => {
			if (response.status === 200) {
				console.log("Article display response", response);
				onSuccess(response);
			} else {
				onFailure(response);
				console.log("Article display response");
			}
		})
		.catch((error: any) => {
			onError(error);
		});
};

export default ArticleDisplayApi;
