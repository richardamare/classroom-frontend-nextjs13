import {type ColumnDef} from "@tanstack/react-table";
import {TableColumnHeader} from "@/components/ui/table-column-header";
import {api} from "@/lib/api";
import StudentTableActions from "@/components/students/student-table-actions";


type ColumnType = Awaited<ReturnType<typeof api.listStudentGroups>>["listStudentGroups"][number];

export const studentGroupTableColumns: ColumnDef<ColumnType>[] = [
	{
		id: "name",
		accessorFn: (c) => c.name,
		header: ({column}) => <TableColumnHeader column={column} title="Název"/>,
	},
	{
		id: "type",
		accessorFn: (c) => c.type,
		header: ({column}) => <TableColumnHeader column={column} title="Typ"/>,
	},
	{
		id: "teacher",
		accessorFn: (c) => c.teacher?.fullName,
		header: ({column}) => <TableColumnHeader column={column} title="Třídní učitel"/>,
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
