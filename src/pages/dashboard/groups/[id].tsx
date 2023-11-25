import DashboardLayout from "@/components/layouts/dashboard-layout";
import {useRouter} from "next/router";
import {useQuery} from "react-query";
import {useApi} from "@/hooks/use-api";

export default function Page() {

	const router = useRouter();
	const id = router.query.id as string;

	const api = useApi();

	const getStudentGroupQuery = useQuery({
		enabled: !!id && api.isAuthenticated,
		queryKey: ['studentGroup', id],
		queryFn: async () => {
			return await api.getStudentGroup({id});
		},
	})

	const studentGroup = getStudentGroupQuery.data?.getStudentGroup;

	return <DashboardLayout>
		<div>
<pre>
{JSON.stringify(studentGroup, null, 2)}
</pre>
		</div>
	</DashboardLayout>
}