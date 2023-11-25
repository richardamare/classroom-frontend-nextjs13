import DashboardLayout from "@/components/layouts/dashboard-layout";
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import {useApi} from "@/hooks/use-api";

export default function Page() {

	const router = useRouter();
	const id = router.query.id as string;

	const api = useApi();

	const getStudentQuery = useQuery({
		enabled: !!id && api.isAuthenticated,
		queryKey: ['student', id],
		queryFn: async () => {
			return await api.getStudent({id});
		},
	})

	const student = getStudentQuery.data?.getStudent;

	return <DashboardLayout>
		<div>
<pre>
{JSON.stringify(student, null, 2)}
</pre>
		</div>
	</DashboardLayout>
}