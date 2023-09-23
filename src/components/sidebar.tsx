import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {useRouter} from "next/router";
import {sidebarItems} from "@/lib/config";

interface SidebarProps {
	className?: string;
}

export default function Sidebar({className}: SidebarProps) {

	const router = useRouter();

	function isActive(path: string) {
		return router.pathname.includes(path)
	}

	return (
		<div className={cn("pb-12", className)}>
			<div className="space-y-4 py-4">
				<div className="px-4 py-2 space-y-6">
					<div className="flex items-center justify-center h-20">
						<h1>LOGO</h1>
					</div>
					<div className="space-y-2 mt-20">
						{sidebarItems.office.map((item) => (
							<>
								<Button
									variant={isActive(item.href) ? "secondary" : "ghost"}
									size="default"
									className="w-full justify-start"
									onClick={() => router.push(item.href)}
								>
									<item.icon className="mr-2 w-4 h-4"/>
									{item.label}
								</Button>
							</>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
