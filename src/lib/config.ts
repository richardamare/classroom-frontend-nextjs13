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

const groupsItem = {
	label: "Skupiny",
	href: "/dashboard/groups",
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
		groupsItem,
		coursesItem,
	],
	teacher: [
		dashboardItem,
		studentsItem,
		groupsItem,
		coursesItem,
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