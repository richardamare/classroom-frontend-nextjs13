import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import {useQuery} from "react-query";
import {useApi} from "@/hooks/use-api";
import {useQueryParam} from "@/hooks/use-query-param";
import {useToast} from "@/hooks/use-toast";
import {useEffect} from "react";

interface SemesterPickerProps {
	className?: string;
}

export function SemesterPicker({className}: SemesterPickerProps) {

	const [semesterId, setSemesterId] = useQueryParam("semester", "")

	const api = useApi();
	const toast = useToast();

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
		toast.success(`Semester changed to ${value}`)
	}

	useEffect(() => {
		if (semesterId === "" && semesters.length > 0) {
			setSemesterId(semesters[0]?.id ?? "");
		}
	}, [semesterId, semesters]);

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