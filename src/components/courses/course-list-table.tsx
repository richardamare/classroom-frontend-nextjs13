import {CourseListDTO} from "@/lib/types";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

interface Props {
	courses: CourseListDTO[];
}

export default function CourseListTable(props: Props) {
	return <Table>
		<TableHeader>
			<TableRow>
				<TableHead className="w-[250px]">Název kurzu</TableHead>
				<TableHead className="w-[100px]">Typ</TableHead>
				<TableHead>Učitel</TableHead>
				<TableHead>Třída/Skupina</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			{props.courses.map((course) => (
				<TableRow key={course.id}>
					<TableCell className="font-medium">{course.name}</TableCell>
					<TableCell>{course.type}</TableCell>
					<TableCell>{course.teacher.fullName}</TableCell>
					<TableCell>{course.group.name}</TableCell>
				</TableRow>
			))}
			{props.courses.length === 0 && (
				<TableRow>
					<TableCell colSpan={4} className="text-center text-muted-foreground">
						Žádné kurzy
					</TableCell>
				</TableRow>
			)}
		</TableBody>
	</Table>
}