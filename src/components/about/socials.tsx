import { SocialCard } from "@/components/about/socials-card";
import { SocialsData } from "@/data/socials";

export const Socials = () => {

    return (
        <section className='flex-1 grid md:grid-cols-3 grid-cols-2 place-content-start md:pt-10 pt-5 gap-10'>
            {SocialsData.map(item => {
                if (item.url) {
                    return (
                        <a href={item.url} key={item.id} target="__blank">
                            <SocialCard
                                key={item.id}
                                title={item.title}
                                value={item.value}
                                icon={item.icon}
                            />
                        </a>
                    )
                } else {
                    return (
                        <SocialCard
                            key={item.id}
                            title={item.title}
                            value={item.value}
                            icon={item.icon}
                        />
                    )
                }
            })}
        </section>
    );

}
