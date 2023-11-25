import DashboardLayout from "@/components/layouts/dashboard-layout";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {Card} from "@/components/ui/card";
import StudentGroupTable from "@/components/student-group/student-group-table";

export default function Page() {
	return <DashboardLayout>
		<div className="space-y-4">
			<div className="flex justify-between items-center">
				<div className="space-y-2">
					<h1 className="text-2xl font-semibold">Skupiny</h1>
					<p className="text-gray-500 dark:text-gray-400">
						Seznam všech skupin
					</p>
				</div>
				<div>
					<Button>
						<Plus className="h-4 w-4 mr-2"/>
						<span>Přidat skupin</span>
					</Button>
				</div>
			</div>
			<Card>
				<StudentGroupTable/>
			</Card>
		</div>
	</DashboardLayout>
}