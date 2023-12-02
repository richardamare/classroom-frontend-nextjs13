import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useQuery, useQueryClient } from "react-query";
import { useApi } from "@/hooks/use-api";
import { useSemesterState } from "@/hooks/state";

interface SemesterPickerProps {
    className?: string;
}

export function SemesterPicker({ className }: SemesterPickerProps) {
    const semester = useSemesterState((state) => state.semester);
    const setSemester = useSemesterState((state) => state.setSemester);

    const api = useApi();
    const queryClient = useQueryClient();

    const semesterQuery = useQuery({
        queryKey: ["semesters"],
        queryFn: async () => {
            return await api.listSemesters({
                input: {
                    limit: 100,
                    offset: 0,
                },
            });
        },
    });

    const semesters = semesterQuery.data?.listSemesters ?? [];

    const onSemesterChange = (value: string) => {
        setSemester(value);
        queryClient
            .invalidateQueries(["courses", "studentGroups"])
            .catch(console.error);
        queryClient.resetQueries().catch(console.error);
    };

    return (
        <Select onValueChange={onSemesterChange} value={semester ?? ""}>
            <SelectTrigger className={className}>
                <SelectValue placeholder="Select a semester" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Semesters</SelectLabel>
                    {semesters.map((s) => (
                        <SelectItem key={s.id} value={s.id}>
                            {s.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
