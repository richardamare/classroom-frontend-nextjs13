import { type ColumnDef } from "@tanstack/react-table";
import { TableColumnHeader } from "@/components/ui/table-column-header";
import { api } from "@/lib/api";
import TeacherTableActions from "@/components/teachers/teacher-table-actions";

type ColumnType = Awaited<
    ReturnType<typeof api.listTeachers>
>["listTeachers"][number];

export const teacherTableColumns: ColumnDef<ColumnType>[] = [
    {
        id: "fullName",
        accessorFn: (c) => c.fullName,
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Jméno" />
        ),
    },
    {
        id: "email",
        accessorFn: (c) => c.email,
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Email" />
        ),
    },
    {
        id: "actions",
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Akce" />
        ),
        cell: ({ row }) => {
            return <TeacherTableActions teacher={row.original} />;
        },
    },
];
