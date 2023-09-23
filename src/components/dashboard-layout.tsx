import Sidebar from "@/components/sidebar";

interface DashboardLayoutProps {
	children: React.ReactNode;
}

export default function DashboardLayout({children}: DashboardLayoutProps) {
	return (
		<>
			<div className="border-t block bg-background">
				<div className="grid lg:grid-cols-5 min-h-screen">
					<Sidebar className="hidden lg:block"/>
					<div className="col-span-3 lg:col-span-4 lg:border-l">
						<div className="h-full px-4 py-6 lg:px-8">{children}</div>
					</div>
				</div>
			</div>
		</>
	);
}
