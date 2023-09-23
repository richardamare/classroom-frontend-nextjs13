import {BookOpen, ClipboardList, GraduationCap, LucideLayoutDashboard, Presentation} from "lucide-react";

const dashboardItem = {
	label: "Dashboard",
	href: "/dashboard",
	icon: LucideLayoutDashboard,
}

const gradesItem = {
	label: "Grades",
	href: "/dashboard/grades",
	icon: ClipboardList,
}

const coursesItem = {
	label: "Courses",
	href: "/dashboard/courses",
	icon: BookOpen,
}

const classesItem = {
	label: "Classes",
	href: "/dashboard/classes",
	icon: ClipboardList,
}

const studentsItem = {
	label: "Students",
	href: "/dashboard/students",
	icon: GraduationCap,
}

export const sidebarItems = {
	office: [
		dashboardItem,
		studentsItem,
		{
			label: "Teachers",
			href: "/dashboard/teachers",
			icon: Presentation,
		},
		classesItem,
		coursesItem,
	],
	teacher: [
		dashboardItem,
		studentsItem,
		classesItem,
		coursesItem,
		gradesItem,
	],
	student: [
		dashboardItem,
		coursesItem,
		gradesItem,
	],
	parent: [
		dashboardItem,
		gradesItem,
	]
}