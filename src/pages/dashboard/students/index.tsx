import DashboardLayout from "@/components/layouts/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import StudentTable from "@/components/students/student-table";

export default function Page() {
    return (
        <DashboardLayout>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <div className="space-y-2">
                        <h1 className="text-2xl font-semibold">Studenti</h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            Seznam všech studentů
                        </p>
                    </div>
                    <div>
                        <Button>
                            <Plus className="h-4 w-4 mr-2" />
                            <span>Přidat studenta</span>
                        </Button>
                    </div>
                </div>
                <Card>
                    <StudentTable />
                </Card>
            </div>
        </DashboardLayout>
    );
}
