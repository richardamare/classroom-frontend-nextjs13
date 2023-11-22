import DashboardLayout from "@/components/layouts/dashboard-layout";
import {Card} from "@/components/ui/card";
import TeacherTable from "@/components/teachers/teacher-table";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {useAddTeacherModal} from "@/hooks/use-add-teacher-modal";

export default function Page() {

	const onOpen = useAddTeacherModal((s) => s.onOpen);

	return <DashboardLayout>
		<div className="space-y-4">
			<div className="flex justify-between items-center">
				<div className="space-y-2">
					<h1 className="text-2xl font-semibold">Učitelé</h1>
					<p className="text-gray-500 dark:text-gray-400">
						Seznam všech učitelů
					</p>
				</div>
				<div>
					<Button onClick={onOpen}>
						<Plus className="h-4 w-4 mr-2"/>
						<span>Přidat učitele</span>
					</Button>
				</div>
			</div>
			<Card>
				<TeacherTable/>
			</Card>
		</div>
	</DashboardLayout>
}