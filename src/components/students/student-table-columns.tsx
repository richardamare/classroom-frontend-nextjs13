import {type ColumnDef} from "@tanstack/react-table";
import {TableColumnHeader} from "@/components/ui/table-column-header";
import {api} from "@/lib/api";
import StudentTableActions from "@/components/students/student-table-actions";


type ColumnType = Awaited<ReturnType<typeof api.listStudents>>["listStudents"][number];

export const studentTableColumns: ColumnDef<ColumnType>[] = [
	{
		id: "fullName",
		accessorFn: (c) => c.fullName,
		header: ({column}) => <TableColumnHeader column={column} title="Jméno"/>,
	},
	{
		id: "email",
		accessorFn: (c) => c.email,
		header: ({column}) => <TableColumnHeader column={column} title="Email"/>,
	},
	{
		id: "actions",
		header: ({column}) => (
			<TableColumnHeader column={column} title="Akce"/>
		),
		cell: ({row}) => {
			return <StudentTableActions student={row.original}/>;
		},
	},
];
