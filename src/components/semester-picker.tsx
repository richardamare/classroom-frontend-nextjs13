import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import {useQuery, useQueryClient} from "react-query";
import {useApi} from "@/hooks/use-api";
import {useGetQueryParam, useSetQueryParam} from "@/hooks/use-query-param";
import {useToast} from "@/hooks/use-toast";

interface SemesterPickerProps {
	className?: string;
}

export function SemesterPicker({className}: SemesterPickerProps) {

	const semesterId = useGetQueryParam("semester", "")
	const setSemesterId = useSetQueryParam<string>("semester");

	const api = useApi();
	const toast = useToast();
	const queryClient = useQueryClient();

	const semesterQuery = useQuery({
		queryKey: ['semesters'],
		queryFn: async () => {
			return await api.listSemesters({
				input: {
					limit: 100,
					offset: 0
				}
			});
		},
	})

	const semesters = semesterQuery.data?.listSemesters ?? [];

	const onSemesterChange = (value: string) => {
		setSemesterId(value);
		queryClient.invalidateQueries(["courses", "studentGroups"]).catch(console.error);
		queryClient.resetQueries().catch(console.error);
	}

	return (
		<Select onValueChange={onSemesterChange} value={semesterId}>
			<SelectTrigger className={className}>
				<SelectValue placeholder="Select a semester"/>
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Semesters</SelectLabel>
					{semesters.map((s) => (
						<SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}