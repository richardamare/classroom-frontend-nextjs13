import {toast} from "sonner";

export function useToast() {
	return {
		success: toast.success,
		error: toast.error,
		warn: toast.warning,
		info: toast.info,
		custom: toast.custom,
	}
}