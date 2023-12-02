import DashboardLayout from "@/components/layouts/dashboard-layout";
import { Button } from "@/components/ui/button";
import { useQueryParam } from "@/hooks/use-query-param";

export default function Page() {
    const [page, setPage] = useQueryParam<boolean>("page", false);

    return (
        <DashboardLayout>
            <div className="space-y-4">
                <h1 className="text-2xl font-semibold">Přehled</h1>
                <div className="flex space-x-4">
                    <Button onClick={() => setPage(!page)}>
                        Page: {page ? "true" : "false"}
                    </Button>
                    {/*student*/}
                    {/*card with subjects and its scores*/}
                    {/*	card with the latest grades */}
                </div>
            </div>
        </DashboardLayout>
    );
}
