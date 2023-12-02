import {create} from "zustand";

interface ISemesterState {
	semester: string | null;
	setSemester: (semester: string | null) => void;
}

export const useSemesterState = create<ISemesterState>((set) => ({
	semester: null,
	setSemester: (semester) => set({semester}),
}));