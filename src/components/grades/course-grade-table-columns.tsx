import { type ColumnDef } from "@tanstack/react-table";
import { TableColumnHeader } from "@/components/ui/table-column-header";
import { api } from "@/lib/api";

type ColumnType = Awaited<
    ReturnType<typeof api.listCourseGrades>
>["listCourseGrades"][number];

export const courseGradeTableColumns: ColumnDef<ColumnType>[] = [
    {
        id: "courseName",
        accessorFn: (c) => c.course.name,
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Kurz" />
        ),
    },
    {
        id: "teacher",
        accessorFn: (c) => c.course.teacher.fullName,
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Učitel" />
        ),
    },
    {
        id: "studentGroup",
        accessorFn: (c) => c.course.studentGroup.name,
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Skupina" />
        ),
    },
    {
        id: "points",
        accessorFn: (c) => c.points,
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Body" />
        ),
        cell: ({ row }) => {
            return (
                <div>
                    {row.original.points} / {row.original.basePoints}
                </div>
            );
        },
    },
    {
        id: "finalGrade",
        accessorFn: (c) => c.finalGrade,
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Výsledná známka" />
        ),
    },
    {
        id: "actions",
        header: ({ column }) => (
            <TableColumnHeader column={column} title="Akce" />
        ),
        cell: ({ row }) => {
            // return <CourseTableActions course={row.original}/>;
        },
    },
];
