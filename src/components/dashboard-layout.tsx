import React from "react";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";

interface DashboardLayoutProps {
	children: React.ReactNode;
}

export default function DashboardLayout({children}: DashboardLayoutProps) {
	return (
		<div className="border-t block bg-background max-h-screen h-full overflow-hidden">
			<div className="grid lg:grid-cols-5 w-screen">
				<Sidebar className="hidden lg:grid lg:col-span-1"/>
				<div
					className="border-l min-h-screen max-h-screen overflow-hidden lg:col-span-4 flex flex-col justify-between">
					<div className="px-4 pt-10">{children}</div>
					<div className="border-t w-full bg-red-50 pb-4 pt-2">
						<Footer/>
					</div>
				</div>
			</div>
		</div>
	);
}
