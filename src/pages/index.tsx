import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useState} from "react";
import {Icons} from "@/components/ui/icons";
import {useRouter} from "next/router";

export default function Page() {

	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter();

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setIsLoading(true)
		setTimeout(() => {
			setIsLoading(false)
			router.push('/dashboard').catch(console.error)
		}, 1000)
	}

	return <div className="bg-gray-50 min-h-screen w-screen justify-center flex flex-col">
		<Card className="max-w-lg w-full mx-auto">
			<CardHeader>
				<CardTitle className="text-xl">
					Login to your account
				</CardTitle>
			</CardHeader>
			<CardContent>
				<form className="space-y-6" onSubmit={handleSubmit}>
					<div className="space-y-2">
						<div>
							<Label htmlFor="email">Email</Label>
							<Input id="email" type="email"/>
						</div>
						<div>
							<Label htmlFor="password">Password</Label>
							<Input id="password" type="password"/>
						</div>
					</div>
					<div className="mt-10">
						<Button type="submit">
							{isLoading && <Icons.spinner className="animate-spin mr-2 w-4 h-4"/>}
							Login
						</Button>
					</div>
				</form>
			</CardContent>
			<CardFooter>
				<Link href="/reset-password" className="text-sm text-muted-foreground cursor-pointer hover:underline">
					Forgot your password?
				</Link>
			</CardFooter>
		</Card>
	</div>
}
