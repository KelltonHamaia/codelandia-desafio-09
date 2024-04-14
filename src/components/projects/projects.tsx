import { ProjectCard } from "@/components/projects/project-card"
import { ProjectsData } from "@/data/projects";

ProjectsData
export const Projects = () => {

    return (
        <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 py-10' id="projects">
            <h1 className="font-bold md:text-4xl text-2xl col-span-full text-center">Projetos</h1>
            {ProjectsData.map(project => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    image={project.image}
                    stack={project.stack}
                    preview_url={project.preview_url}
                />
            ))}
        </section>
    );

}
