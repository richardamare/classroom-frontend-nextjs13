import {buttonVariants} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

export default function Page() {
	return (
		<>
			<div className="flex flex-col items-center justify-center min-h-screen py-2 space-y-4">
				<h1 className="text-6xl font-bold">404</h1>
				<p className="text-2xl">PAGE NOT FOUND</p>
				<Link
					href="/dashboard/overview"
					className={buttonVariants({variant: "outline"})}
				>
					<ArrowRight className="mr-2 h-4 w-4"/>
					<span>Return</span>
				</Link>
			</div>
		</>
	);
}