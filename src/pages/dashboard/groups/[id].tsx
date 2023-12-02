import DashboardLayout from "@/components/layouts/dashboard-layout";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { useApi } from "@/hooks/use-api";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useSession } from "next-auth/react";
import Breadcrumbs from "@/components/breadcrumbs";

export default function Page() {
    const router = useRouter();
    const id = router.query.id as string;

    const api = useApi();
    const session = useSession();

    const getStudentGroupQuery = useQuery({
        enabled: !!id && api.isAuthenticated,
        queryKey: ["studentGroup", id],
        queryFn: async () => {
            return await api.getStudentGroup({ id });
        },
    });

    const studentGroup = getStudentGroupQuery.data?.getStudentGroup;

    const isOffice = session.data?.user?.role === "OFFICE" ?? false;

    return (
        <DashboardLayout>
            <div className="space-y-4">
                <div>
                    <Breadcrumbs
                        paths={[
                            { name: "Skupiny", href: "/dashboard/groups" },
                            {
                                name: studentGroup?.name ?? "Načítání...",
                                href: `/dashboard/groups/${id}`,
                            },
                        ]}
                    />
                </div>
                <div className="flex justify-between items-center">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-semibold">
                            {studentGroup?.name}
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            Počet studentů: {studentGroup?.students.length ?? 0}
                        </p>
                    </div>
                    {isOffice && (
                        <div>
                            <Button>
                                <Plus className="h-4 w-4 mr-2" />
                                <span>Přidat studenta</span>
                            </Button>
                        </div>
                    )}
                </div>
                <Card>
                    <Table>
                        <TableHeader className="border-b">
                            <TableHead>Jméno</TableHead>
                            <TableHead>Příjmení</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Akce</TableHead>
                        </TableHeader>
                        <TableBody>
                            {studentGroup?.students.map((student) => (
                                <TableRow key={student.id}>
                                    <TableCell>{student.firstName}</TableCell>
                                    <TableCell>{student.lastName}</TableCell>
                                    <TableCell>{student.email}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="ghost"
                                            className="h-8 w-8 p-0"
                                        >
                                            <span className="sr-only">
                                                Otevřít menu
                                            </span>
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
            </div>
        </DashboardLayout>
    );
}
