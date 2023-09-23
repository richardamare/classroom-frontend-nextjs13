import {Api} from "@/lib/api";

export function useApi() {
	const baseUrl = process.env.NEXT_PUBLIC_API_URL as string;
	return new Api(baseUrl)
}
