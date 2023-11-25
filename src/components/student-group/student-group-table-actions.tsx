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

interface TeacherTableActionsProps {
	studentGroup: Awaited<ReturnType<typeof api.listStudentGroups>>["listStudentGroups"][number];
}

export default function StudentGroupTableActions({studentGroup}: TeacherTableActionsProps) {
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
					onSelect={() => {
					}}
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