import {Api} from "@/lib/api";

export function useApi() {
	const api = new Api();

	return api;
}
