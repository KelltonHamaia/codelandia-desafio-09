import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

import { ProjectDataType } from "@/types/Project"

export const ProjectCard = ({ title, image, stack, preview_url }: Omit<ProjectDataType, "id">) => {

    return (
        <Link href={preview_url}>
            <Card className="flex flex-col rounded-none pt-4 h-full hover:animate-pulse">
                <CardContent>
                    <img src={image} alt={title} className="rounded" />
                </CardContent>
                <CardFooter className="flex flex-col gap-2 items-start">
                    <h2 className="md:text-lg text-sm font-medium">{title}</h2>
                    <div className="flex gap-4 flex-wrap">
                        {stack.map(stack => (
                            <Badge key={stack} className="md:text-sm text-xs">
                                {stack}
                            </Badge>
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );

}


