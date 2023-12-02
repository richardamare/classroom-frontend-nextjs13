import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    ColumnFiltersState,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    SortingState,
} from "@tanstack/table-core";
import { useState } from "react";
import { flexRender, useReactTable } from "@tanstack/react-table";
import { useQuery } from "react-query";
import { useApi } from "@/hooks/use-api";
import { studentTableColumns } from "@/components/students/student-table-columns";

export default function StudentTable() {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    const api = useApi();

    const listStudentQuery = useQuery({
        queryKey: ["students"],
        queryFn: async () => {
            return await api.listStudents({
                input: {
                    limit: 100,
                    offset: 0,
                },
            });
        },
    });

    const table = useReactTable({
        data: listStudentQuery.data?.listStudents ?? [],
        columns: studentTableColumns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    });

    return (
        <div className="space-y-4">
            {/*<div className="px-3 py-5 flex justify-between items-center space-x-2">*/}
            {/*	<Input*/}
            {/*		placeholder="Vyhledat učitele (podle jména, emailu)"*/}
            {/*	/>*/}
            {/*	<Button>*/}
            {/*		Hledat*/}
            {/*	</Button>*/}
            {/*</div>*/}
            <div className="rounded-md">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext(),
                                                  )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext(),
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={studentTableColumns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
