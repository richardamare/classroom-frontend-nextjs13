import {type ColumnDef} from "@tanstack/react-table";
import {TeacherListDTO} from "@/lib/types";
import {TableColumnHeader} from "@/components/ui/table-column-header";
import TeacherTableActions from "@/components/teachers/teacher-table-actions";

export const teacherTableColumns: ColumnDef<TeacherListDTO>[] = [
	{
		id: "fullName",
		accessorFn: (c) => c.fullName,
		header: ({column}) => <TableColumnHeader column={column} title="Name"/>,
	},
	{
		id: "email",
		accessorFn: (c) => c.email,
		header: ({column}) => <TableColumnHeader column={column} title="Email"/>,
	},
	{
		id: "actions",
		header: ({column}) => (
			<TableColumnHeader column={column} title="Actions"/>
		),
		cell: ({row}) => {
			return <TeacherTableActions teacher={row.original}/>;
		},
	},
];
