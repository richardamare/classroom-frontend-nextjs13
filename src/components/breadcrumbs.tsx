import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Fragment } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BreadcrumbsProps {
    paths: { name: string; href: string }[];
    children?: React.ReactNode;
}

export default function Breadcrumbs({ paths, children }: BreadcrumbsProps) {
    return (
        <div className="flex items-center space-x-1">
            {paths.map((path, index) => (
                <Fragment key={path.href}>
                    <Link
                        href={path.href}
                        className={cn(
                            buttonVariants({ size: "sm", variant: "link" }),
                            "text-gray-500 dark:text-gray-400",
                        )}
                    >
                        {path.name}
                    </Link>
                    {index !== paths.length - 1 && (
                        <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    )}
                </Fragment>
            ))}
            {children}
        </div>
    );
}
