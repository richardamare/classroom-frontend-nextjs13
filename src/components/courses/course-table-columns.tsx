import { type ColumnDef } from "@tanstack/react-table";
import { TableColumnHeader } from "@/components/ui/table-column-header";
import { api } from "@/lib/api";
import CourseTableActions from "@/components/courses/course-table-actions";

type ColumnType = Awaited<
    ReturnType<typeof api.listCourses>
>["listCourses"][number];

export const courseTableColumns: ColumnDef<ColumnType>[] = [
    {
        id: "name",
        accessorFn: (c) => c.name,
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Název" />
        ),
    },
    {
        id: "teacher",
        accessorFn: (c) => c.teacher.fullName,
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Učitel" />
        ),
    },
    {
        id: "studentGroup",
        accessorFn: (c) => c.studentGroup.name,
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Skupina" />
        ),
    },
    {
        id: "actions",
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Akce" />
        ),
        cell: ({ row }) => {
            return <CourseTableActions course={row.original} />;
        },
    },
];
