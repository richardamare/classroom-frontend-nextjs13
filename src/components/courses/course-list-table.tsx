import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {useQueryParam} from "@/hooks/use-query-param";
import {Button} from "@/components/ui/button";
import {useQuery} from "react-query";
import {api} from "@/lib/api";


export default function CourseListTable() {

	const [limit, setLimit] = useQueryParam("limit", 1);
	const [offset, setOffset] = useQueryParam("offset", 0);
	const [semesterId, setSemesterId] = useQueryParam("semesterId", null as string | null);

	const listCourseQuery = useQuery({
		queryKey: ["courses", limit, offset],
		enabled: !!semesterId,
		queryFn: async () => {
			if (!semesterId) throw new Error("SemesterId is not set");
			return await api.listCourses({
				input: {
					limit,
					offset,
					semesterId,
				}
			})
		}
	})

	const courses = listCourseQuery.data?.listCourses ?? [];

	return <>
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[250px]">Název kurzu</TableHead>
					<TableHead>Učitel</TableHead>
					<TableHead>Třída/Skupina</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{courses.map((course) => (
					<TableRow key={course.id}>
						<TableCell className="font-medium">{course.name}</TableCell>
						<TableCell>{course.teacher.id}</TableCell>
						<TableCell>{course.studentGroup.name}</TableCell>
					</TableRow>
				))}
				{courses.length === 0 && (
					<TableRow>
						<TableCell colSpan={4} className="text-center text-muted-foreground">
							Žádné kurzy
						</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
		<div className="flex items-center justify-end space-x-2 py-4">
			<div className="flex-grow"/>
			<div className="space-x-2">
				<Button
					variant="outline"
					size="sm"
					onClick={() => {
						if (offset === 0) return;
						setOffset(offset - 1);
					}}
				>
					Previous
				</Button>
				<Button
					variant="outline"
					size="sm"
					onClick={() => {
						setOffset(offset + 1);
					}}
				>
					Next
				</Button>
			</div>
		</div>
	</>
}