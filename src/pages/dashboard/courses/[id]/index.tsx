import DashboardLayout from "@/components/layouts/dashboard-layout";
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import {useApi} from "@/hooks/use-api";
import {useSession} from "next-auth/react";

export default function Page() {
	const router = useRouter();
	const id = router.query.id as string;

	const api = useApi();
	const session = useSession();

	const getCourseQuery = useQuery({
		enabled: !!id && api.isAuthenticated,
		queryKey: ["course", id],
		queryFn: async () => {
			const userRole = session.data?.user?.role;
			if (userRole === "TEACHER") {
				return await api.getCourseAsTeacher({id});
			}
			return await api.getCourse({id});
		},
	});

	const course = getCourseQuery.data?.getCourse;

	return (
		<DashboardLayout>
			<div>
				<pre>{JSON.stringify(course, null, 2)}</pre>
			</div>
		</DashboardLayout>
	);
}
