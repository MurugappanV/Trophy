import { ItpAxiosInstance } from "../axios";

const AuthorDetailsAPI = (authorId, siteKey, onSuccess, onFailure, onError) => {
	const url = "ws/article-list";
	const key = authorId + "~" + siteKey;
	console.log("Author Details API is calling for the author: ", key);

	ItpAxiosInstance.post(url, {
		author: key,
	})
		.then((response: any) => {
			if (response) {
				console.log("Success in Author Details data fetching: ", response);
				onSuccess(response.data);
			} else {
				console.log("Failure in Author Details data fetching ", response);
				onFailure();
			}
		})
		.catch((error: any) => {
			console.log("Error in Author Details data fetching: ", error);
			onError(error);
		});
};

export default AuthorDetailsAPI;
