export type CourseListDTO = {
	id: string
	name: string
	description: string
	type: string
	teacher: { id: string, fullName: string }
	group: { id: string, name: string }
}