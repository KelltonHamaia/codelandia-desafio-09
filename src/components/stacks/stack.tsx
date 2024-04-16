import { StackCard } from "@/components/stacks/stack-card";
import { Technologies } from "@/data/techs"


export const Stack = () => {

    return (
        <section className='grid grid-cols-2 gap-10 py-5 md:gap-4 lg:grid-cols-6'>
            <h1 className="py-4 text-2xl font-bold text-center md:text-3xl col-span-full" id="skills">Minhas Skills</h1>
            {Technologies.map(tech => (
                <StackCard
                    key={tech.id}
                    name={tech.name}
                    icon={tech.icon}
                />
            ))}
        </section>
    );

}
