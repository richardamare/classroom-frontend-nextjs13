import { useEffect, useState } from "react";
import AddTeacherModal from "@/components/teachers/add-teacher-modal";
import { AddStudentModal } from "@/components/students/add-student-modal";

export default function ModalProvider() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AddTeacherModal />
            <AddStudentModal />
        </>
    );
}
