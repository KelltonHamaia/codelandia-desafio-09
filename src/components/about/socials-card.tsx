import { SocialDataType } from "@/types/Socials";

export const SocialCard = ({ title, value, icon }: Omit<SocialDataType, "id">) => {

    return (
        <div className='flex flex-col justify-center items-center gap-2 '>
            <span className="lg:size-16 size-10 flex items-center justify-center rounded-full bg-secondary">
                {icon}
            </span>
            <h3 className="font-bold md:text-lg text-sm">{title}</h3>
            <span className="text-muted-foreground md:text-base text-xs">{value}</span>
        </div>
    );

}
