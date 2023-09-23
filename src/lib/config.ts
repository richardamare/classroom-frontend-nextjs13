import {BookOpen, ClipboardList, GraduationCap, LucideLayoutDashboard, Presentation} from "lucide-react";

const dashboardItem = {
	label: "Přehled",
	href: "/dashboard/overview",
	icon: LucideLayoutDashboard,
}

const gradesItem = {
	label: "Známky",
	href: "/dashboard/grades",
	icon: ClipboardList,
}

const coursesItem = {
	label: "Kurzy",
	href: "/dashboard/courses",
	icon: BookOpen,
}

const classesItem = {
	label: "Třídy/Skupiny",
	href: "/dashboard/classes",
	icon: ClipboardList,
}

const studentsItem = {
	label: "Studenti",
	href: "/dashboard/students",
	icon: GraduationCap,
}

export const sidebarItems = {
	office: [
		dashboardItem,
		studentsItem,
		{
			label: "Učitelé",
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