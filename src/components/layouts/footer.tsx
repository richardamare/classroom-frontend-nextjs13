import ModeToggle from "@/components/mode-toggle";

export default function Footer() {
    return (
        <div className="flex items-center flex-row justify-between my-auto h-full px-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
                v1.0.0beta
            </p>
            <ModeToggle />
        </div>
    );
}
