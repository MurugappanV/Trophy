import axios from "axios";

const BASE_URL = "http://trove-drupal.itp.com/";
const ITP_URL = "http://trove.itp.com/";

export const BaseAxiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 600000,
	headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
});

export const setGlobalHeader = (token: string, userId: number) => {
	BaseAxiosInstance.defaults.headers.common["token"] = token;
	BaseAxiosInstance.defaults.headers.common["user-id"] = userId;
};

export const ItpAxiosInstance = axios.create({
	baseURL: ITP_URL,
	timeout: 600000,
	headers: { "Content-Type": "application/json", "Cache-Control": "no-cache" },
});
