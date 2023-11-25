import {useAddTeacherModal} from "@/hooks/use-add-teacher-modal";
import Modal from "@/components/modal";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {AddTeacherForm} from "@/lib/validations";
import {z} from "zod";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Icons} from "@/components/ui/icons";
import {useMutation} from "react-query";
import {api} from "@/lib/api";
import {useToast} from "@/hooks/use-toast";

type FormValues = z.infer<typeof AddTeacherForm>;

export default function AddTeacherModal() {
	const addTeacherModal = useAddTeacherModal();
	const toast = useToast();

	const {mutate, isLoading} = useMutation({
		mutationKey: "addTeacher",
		onMutate: async (values: FormValues) => {
			toast.success("Creating teacher...")
			const result = await api.createTeacher({
				input: {
					firstName: values.firstName,
					lastName: values.lastName,
					email: values.email,
				}
			});
			return result.createTeacher;
		},
		onSuccess: (data) => {
			// toast.success(data.message);
			form.reset({
				firstName: "",
				lastName: "",
				prefix: "",
				suffix: "",
				email: "",
			});
			addTeacherModal.onClose();
		}
	})

	const form = useForm<FormValues>({
		resolver: zodResolver(AddTeacherForm),
	})

	const onCancel = () => {
		form.reset({
			firstName: "",
			lastName: "",
			prefix: "",
			suffix: "",
			email: "",
		});
		addTeacherModal.onClose();
	}

	const onSubmit = async (values: FormValues) => {
		mutate(values);
	}

	return <Modal
		title="Add Teacher"
		description="Add a new teacher"
		isOpen={addTeacherModal.isOpen}
		onClose={addTeacherModal.onClose}
	>
		<Form {...form}>
			<form
				id="add-teacher-form"
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid gap-3 grid-cols-1"
			>
				<FormField
					control={form.control}
					name="firstName"
					render={({field}) => (
						<FormItem>
							<FormLabel>First name</FormLabel>
							<FormControl>
								<Input
									placeholder="John"
									{...field}
									disabled={isLoading}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="lastName"
					render={({field}) => (
						<FormItem>
							<FormLabel>Last name</FormLabel>
							<FormControl>
								<Input
									placeholder="Doe"
									{...field}
									disabled={isLoading}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({field}) => (
						<FormItem className="col-span-2">
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="johndoe@example.com"
									type="email"
									{...field}
									disabled={isLoading}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
			</form>
		</Form>
		<DialogFooter>
			<Button variant="ghost" disabled={isLoading} onClick={onCancel}>
				Cancel
			</Button>
			<Button form="add-teacher-form" type="submit" disabled={isLoading}>
				{isLoading && (
					<Icons.spinner className="animate-spin mr-2 h-4 w-4"/>
				)}
				Continue
			</Button>
		</DialogFooter>
	</Modal>
}