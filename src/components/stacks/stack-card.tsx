import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { StackType } from "@/types/stack"

export const StackCard = ({ icon, name }: Omit<StackType, "id">) => {

    return (
        <Card className="flex flex-col items-center gap-2 hover:bg-secondary hover:animate-pulse">
            <CardContent className="py-5">
                <img
                    className="lg:size-40"
                    src={icon}
                    alt={name}
                />
            </CardContent>
            <CardFooter>
                <h2 className="w-full text-lg font-semibold text-center md:text-xl text-muted-foreground">{name}</h2>
            </CardFooter>
        </Card>
    );

}
