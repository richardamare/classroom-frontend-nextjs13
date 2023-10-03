import {useRouter} from "next/router";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {LogOut} from "lucide-react";
import {sidebarItems} from "@/lib/config";

interface SidebarProps {
	className?: string;
}

export default function Sidebar({className}: SidebarProps) {

	const router = useRouter();

	function isActive(path: string) {
		return router.pathname === path
	}

	return (
		<>
			<div className={className}>
				<div className="space-y-4 flex flex-col justify-between min-h-screen h-full">
					<div className="py-2 space-y-6">
						<div className="flex items-center justify-center h-20">
							<h1>LOGO</h1>
						</div>
						<div className="mt-20">
							{sidebarItems.office.map((item) => (
								<>
									<Link href={item.href}
									      className={cn(
										      "flex items-center gap-x-2 text-muted-foreground text-sm font-[500] pl-6 hover:text-secondary-foreground hover:bg-slate-300/20 w-full",
										      isActive(item.href) && "text-accent-foreground bg-secondary/20"
									      )}>
										<div className="flex items-center gap-x-2 py-4">
											<item.icon className="w-5 h-5 mr-2"/>
											<span>{item.label}</span>
										</div>
									</Link>
								</>
							))}
						</div>
					</div>
					<div className="border-t">
						<div className="px-4 pt-2 pb-4 space-y-6">
							<Link
								href="/auth/logout"
								className={cn(
									buttonVariants({variant: "link"}),
									"hover:no-underline text-muted-foreground"
								)}
							>
								<LogOut className="mr-2 w-4 h-4"/>
								<span>Odhlásit se</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
