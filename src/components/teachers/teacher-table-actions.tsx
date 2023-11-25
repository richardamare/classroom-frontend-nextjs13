import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreHorizontal} from "lucide-react";
import {api} from "@/lib/api";
import {useRouter} from "next/router";

interface TeacherTableActionsProps {
	teacher: Awaited<ReturnType<typeof api.listTeachers>>["listTeachers"][number];
}

export default function TeacherTableActions({teacher}: TeacherTableActionsProps) {
	const router = useRouter();

	const onView = () => {
		router.push(`/dashboard/teachers/${teacher.id}`).catch(console.error);
	}

	const onEdit = () => {

	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 p-0">
					<span className="sr-only">Otevřít menu</span>
					<MoreHorizontal className="h-4 w-4"/>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>Akce</DropdownMenuLabel>
				<DropdownMenuSeparator/>
				<DropdownMenuItem onSelect={onView}>
					Zobrazit
				</DropdownMenuItem>
				<DropdownMenuItem onSelect={onEdit}>
					Upravit
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}