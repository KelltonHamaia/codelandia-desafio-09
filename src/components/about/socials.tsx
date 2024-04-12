import { SocialCard } from "@/components/about/socials-card";
import { SocialsData } from "@/data/socials";

export const Socials = () => {

    return (
        <section className='flex-1 grid md:grid-cols-4 grid-cols-2 place-content-start md:pt-10 pt-5 gap-5'>
            {SocialsData.map(item => (
                <SocialCard
                    key={item.id}
                    title={item.title}
                    value={item.value}
                    icon={item.icon}
                />
            ))}
        </section>
    );

}
