import {create} from "zustand";

interface UseAddTeacherModal {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export const useAddTeacherModal = create<UseAddTeacherModal>((set) => ({
	isOpen: false,
	onOpen: () => set({isOpen: true}),
	onClose: () => set({isOpen: false}),
}));
