import { ItpAxiosInstance } from "../axios";

function getBrandString(selectedBrands) {
	//console.log(selectedBrands);
	let brands;
	selectedBrands.forEach((item, index) => {
		if (index === 0) {
			brands = item.field_site_key + "|";
		} else {
			brands = brands + item.field_site_key + "|";
		}
	});
	let brandValue = brands.slice(0, -1);
	console.log("brandValue: ", brandValue);
	return brandValue;
}

const BrandsPreferenceAPI = (userId, selectedBrands, onSuccess, onFailure, onError) => {
	const url = "ws/save-preferences/brand";
	ItpAxiosInstance.post(url, { user_id: userId, values: getBrandString(selectedBrands) })
		.then((response: any) => {
			if (response) {
				onSuccess(response);
			} else {
				onFailure(response);
			}
		})
		.catch((error: any) => {
			onError(error);
		});
};

export default BrandsPreferenceAPI;

// export default LoginApi;

// import { BaseAxiosInstance } from "../axios";

// const BrandsPreferenceAPI = (userId, selectedBrands, onSuccess, onFailure, onError) => {
// 	const url = "ws/save-preferences/brand";
// 	BaseAxiosInstance.post(url, { user_id: userId, values: getBrandString(selectedBrands) })
// 		.then((response: any) => {
// 			if (response.data.status === 1) {
// 				onSuccess(response.data.data.token, response.data.data.user_id);
// 			} else {
// 				onFailure(response.data.message);
// 			}
// 		})
// 		.catch((error: any) => {
// 			onError(error);
// 		});
// };
