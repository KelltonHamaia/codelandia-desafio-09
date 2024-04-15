import { Card, CardContent, CardFooter } from "@/components/ui/card";

type Props = {
    title: string
    icon: React.JSX.Element
}

export const JobCard = ({ title, icon }: Props) => {

    return (
        <Card className="flex flex-col items-center justify-center p-4 border-b-2 rounded-none md:items-start md:justify-start border-b-primary min-h-60">
            <CardContent className="flex items-center flex-1">
                {icon}
            </CardContent>
            <CardFooter className="flex items-center flex-1">
                <h2 className="text-base text-muted-foreground md:text-3xl">
                    {title}
                </h2>
            </CardFooter>
        </Card>
    );

}
