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
	student: Awaited<ReturnType<typeof api.listStudents>>["listStudents"][number];
}

export default function StudentTableActions({student}: TeacherTableActionsProps) {
	const router = useRouter();

	const onView = () => {
		router.push(`/dashboard/students/${student.id}`).catch(console.error);
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
				<DropdownMenuItem
					onSelect={onView}
				>
					Zobrazit
				</DropdownMenuItem>
				<DropdownMenuItem
					onSelect={() => {
					}}
				>
					Upravit
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}