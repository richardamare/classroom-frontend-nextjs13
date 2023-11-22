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
import {TeacherListDTO} from "@/lib/types";

interface Props {
	teacher: TeacherListDTO
}

export default function TeacherTableActions({teacher}: Props) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-8 w-8 p-0">
					<span className="sr-only">Open menu</span>
					<MoreHorizontal className="h-4 w-4"/>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>Actions</DropdownMenuLabel>
				<DropdownMenuSeparator/>
				<DropdownMenuItem
					onSelect={() => {
					}}
				>
					View
				</DropdownMenuItem>
				<DropdownMenuItem
					onSelect={() => {
					}}
				>
					Edit
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}