import {useMutation} from "@tanstack/react-query";
import {useToast} from "@/hooks/use-toast";
import {z} from "zod";
import {AddTeacherForm} from "@/lib/validations";

export function useAddTeacher() {
	const toast = useToast();

	return useMutation<unknown, Error, z.infer<typeof AddTeacherForm>>({
		mutationKey: ["add-teacher"],
		mutationFn: async (data) => {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			return data;
		},
		onSuccess: () => {
			toast.success("Teacher added successfully.");
		},
		onError: (err) => {
			toast.error(`Failed to add teacher: ${err.message}`);
		}
	})
}