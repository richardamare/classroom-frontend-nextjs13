import {useAddTeacherModal} from "@/hooks/use-add-teacher-modal";
import Modal from "@/components/modal";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {AddTeacherForm} from "@/lib/validations";
import {z} from "zod";
import {Form, FormControl, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {useAddTeacher} from "@/hooks/use-add-teacher";
import {DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Icons} from "@/components/ui/icons";

type FormValues = z.infer<typeof AddTeacherForm>;

export default function AddTeacherModal() {
	const addTeacherModal = useAddTeacherModal();
	const addTeacher = useAddTeacher();

	const form = useForm<FormValues>({
		resolver: zodResolver(AddTeacherForm),
	})

	const onCancel = () => {
		form.reset({
			fullName: "",
			email: "",
		});
		addTeacherModal.onClose();
	}

	const onSubmit = async (values: FormValues) => {
		try {
			await addTeacher.mutateAsync(values);
			form.reset({
				fullName: "",
				email: "",
			});
			addTeacherModal.onClose();
		} catch (e: any) {
			console.error(e);
		}
	}

	return <Modal
		title="Add Teacher"
		description="Add a new teacher"
		isOpen={addTeacherModal.isOpen}
		onClose={addTeacherModal.onClose}
	>
		<Form {...form}>
			<form
				id="add-tag-form"
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid gap-3 grid-cols-1"
			>
				<FormField
					control={form.control}
					name="fullName"
					render={({field}) => (
						<FormItem>
							<FormLabel>Full name</FormLabel>
							<FormControl>
								<Input
									placeholder="Ing. John Doe Ph.D."
									{...field}
									disabled={addTeacher.isLoading}
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
									disabled={addTeacher.isLoading}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
			</form>
		</Form>
		<DialogFooter>
			<Button variant="ghost" disabled={addTeacher.isLoading} onClick={onCancel}>
				Cancel
			</Button>
			<Button form="add-tag-form" type="submit" disabled={addTeacher.isLoading}>
				{addTeacher.isLoading && (
					<Icons.spinner className="animate-spin mr-2 h-4 w-4"/>
				)}
				Continue
			</Button>
		</DialogFooter>
	</Modal>
}