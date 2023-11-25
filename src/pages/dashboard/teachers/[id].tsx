import DashboardLayout from "@/components/layouts/dashboard-layout";
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import {useApi} from "@/hooks/use-api";

export default function Page() {

	const router = useRouter();
	const id = router.query.id as string;

	const api = useApi();

	const getTeacherQuery = useQuery({
		enabled: !!id && api.isAuthenticated,
		queryKey: ['teacher', id],
		queryFn: async () => {
			return await api.getTeacher({id});
		},
	})

	const teacher = getTeacherQuery.data?.getTeacher;

	return <DashboardLayout>
		<div>
<pre>
{JSON.stringify(teacher, null, 2)}
</pre>
		</div>
	</DashboardLayout>
}