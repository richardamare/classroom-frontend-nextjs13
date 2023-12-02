import { create } from "zustand";
import Modal, { ModalStateProps } from "@/components/modal";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useMutation } from "react-query";
import { useApi } from "@/hooks/use-api";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { AddStudentForm } from "@/lib/validations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface StudentModalState extends ModalStateProps {}

export const useStudentModal = create<StudentModalState>((set) => ({
    isOpen: false,
    setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));

type FormValues = z.infer<typeof AddStudentForm>;

export function AddStudentModal() {
    const studentModal = useStudentModal();
    const api = useApi();
    const toast = useToast();

    const { isLoading, mutate } = useMutation({
        mutationKey: "addStudent",
        onMutate: async (values: FormValues) => {
            toast.success("Creating student...");
        },
    });

    const form = useForm<FormValues>({
        resolver: zodResolver(AddStudentForm),
    });

    const onClose = () => {
        form.reset({
            email: "",
            firstName: "",
            lastName: "",
        });
        studentModal.setIsOpen(false);
    };

    const onSubmit = async (values: FormValues) => mutate(values);

    return (
        <Modal
            title="Přidat studenta"
            description="Přidat studenta do systému"
            isOpen={studentModal.isOpen}
            onClose={onClose}
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
                        render={({ field }) => (
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
                        render={({ field }) => (
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
                        render={({ field }) => (
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
                <Button variant="ghost" disabled={isLoading} onClick={onClose}>
                    Cancel
                </Button>
                <Button
                    form="add-teacher-form"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading && (
                        <Icons.spinner className="animate-spin mr-2 h-4 w-4" />
                    )}
                    Continue
                </Button>
            </DialogFooter>
        </Modal>
    );
}
