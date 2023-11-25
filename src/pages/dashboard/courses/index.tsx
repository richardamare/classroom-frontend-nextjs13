import DashboardLayout from "@/components/layouts/dashboard-layout";
import {Card} from "@/components/ui/card";
import CourseListTable from "@/components/courses/course-list-table";

export default function Page() {
	return <DashboardLayout>
		<div className="space-y-4">
			<h1 className="text-2xl font-semibold">Kurzy</h1>
			<Card>
				<CourseListTable/>
			</Card>
		</div>
	</DashboardLayout>
}
