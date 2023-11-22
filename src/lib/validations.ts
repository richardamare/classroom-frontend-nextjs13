import {z} from "zod";

export const AddTeacherForm = z.object({
	prefix: z.string().min(2, {message: "Prefix must be at least 2 characters long"}),
	suffix: z.string().min(2, {message: "Suffix must be at least 2 characters long"}),
	firstName: z.string().min(2, {message: "First name must be at least 2 characters long"}),
	lastName: z.string().min(2, {message: "Last name must be at least 2 characters long"}),
	email: z.string().email({message: "Invalid email address"}),
})