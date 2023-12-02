import {z} from "zod";

export const AddTeacherForm = z.object({
	prefix: z.string().min(2, {message: "Prefix must be at least 2 characters long"}),
	suffix: z.string().min(2, {message: "Suffix must be at least 2 characters long"}),
	firstName: z.string().min(2, {message: "First name must be at least 2 characters long"}),
	lastName: z.string().min(2, {message: "Last name must be at least 2 characters long"}),
	email: z.string().email({message: "Invalid email address"}),
})

export const LoginForm = z.object({
	email: z.string().email({message: "Invalid email address"}),
	password: z.string().min(8, {message: "Password must be at least 8 characters long"}),
})

export const AddStudentForm = z.object({
	firstName: z.string().min(2, {message: "First name must be at least 2 characters long"}),
	lastName: z.string().min(2, {message: "Last name must be at least 2 characters long"}),
	email: z.string().email({message: "Invalid email address"}),
})