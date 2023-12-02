import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { ClientError } from "graphql-request";
import { z } from "zod";
import { LoginForm } from "@/lib/validations";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";

export default function Page() {
    const router = useRouter();
    const toast = useToast();

    const form = useForm<z.infer<typeof LoginForm>>({
        resolver: zodResolver(LoginForm),
    });

    const { mutate, isLoading } = useMutation<
        undefined,
        ClientError,
        z.infer<typeof LoginForm>
    >({
        mutationKey: ["login"],
        mutationFn: async (variables) => {
            const result = await signIn(
                "credentials",
                {
                    redirect: false,
                    email: variables.email,
                    password: variables.password,
                },
                {
                    email: variables.email,
                    password: variables.password,
                },
            );

            if (!result) throw new Error("An error occurred while logging in");

            if (result?.error) throw new Error(result.error);
        },
        onSuccess: async () => {
            await router.push("/dashboard/overview");
        },
    });

    const onSubmit = (values: z.infer<typeof LoginForm>) => {
        mutate(values);
    };

    return (
        <div className="bg-gray-50 min-h-screen w-screen justify-center flex flex-col dark:bg-gray-900">
            <Card className="max-w-lg w-full mx-auto">
                <CardHeader>
                    <CardTitle className="text-xl">
                        Login to your account
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            id="login-form"
                            className="space-y-2"
                            onSubmit={form.handleSubmit(onSubmit)}
                        >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                {...field}
                                                disabled={isLoading}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                {...field}
                                                disabled={isLoading}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <div className="mt-10">
                                <Button
                                    onClick={() => onSubmit(form.getValues())}
                                    className="text-white"
                                >
                                    {isLoading && (
                                        <Icons.spinner className="animate-spin mr-2 w-4 h-4" />
                                    )}
                                    Login
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter>
                    <Link
                        href="/reset-password"
                        className="text-sm text-muted-foreground cursor-pointer hover:underline"
                    >
                        Forgot your password?
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
