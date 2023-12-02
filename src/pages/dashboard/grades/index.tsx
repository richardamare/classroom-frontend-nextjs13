import DashboardLayout from "@/components/layouts/dashboard-layout";
import {Card} from "@/components/ui/card";
import CourseGradeTable from "@/components/grades/course-grade-table";

export default function Page() {
	return <DashboardLayout>
		<div className="space-y-4">
			<div className="flex justify-between items-center">
				<div className="space-y-2">
					<h1 className="text-2xl font-semibold">
						Známky
					</h1>
					<p className="text-gray-500 dark:text-gray-400">
						Seznam všech známek
					</p>
				</div>
			</div>
			<Card>
				<CourseGradeTable/>
			</Card>
		</div>
	</DashboardLayout>
}