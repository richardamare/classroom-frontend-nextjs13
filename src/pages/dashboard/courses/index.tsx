import DashboardLayout from "@/components/layouts/dashboard-layout";
import {useApi} from "@/hooks/use-api";
import {useQuery} from "@tanstack/react-query";
import {Card} from "@/components/ui/card";
import CourseListTable from "@/components/courses/course-list-table";

export default function Page() {

	const api = useApi();

	const coursesQuery = useQuery({
		queryFn: () => api.listCourses(),
		queryKey: ["courses"],
	})

	return <DashboardLayout>
		<div className="space-y-4">
			<h1 className="text-2xl font-semibold">Kurzy</h1>
			<pre>
				{JSON.stringify(coursesQuery.data, null, 2)}
			</pre>
			{coursesQuery.data && (
				<Card>
					<CourseListTable courses={coursesQuery.data}/>
				</Card>
			)}
		</div>
	</DashboardLayout>
}
