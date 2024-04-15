import { AboutMe } from "@/components/about/about-me";
import { Header } from "@/components/header/header";
import { Jobs } from "@/components/jobs/jobs";
import { Presentation } from "@/components/presentation/presentation";
import { Projects } from "@/components/projects/projects";

const Page = () => {
    return (
        <div className='container min-h-screen mx-auto border-transparent max-w-screen-2xl border-x lg:border-primary space-y-10'>
            <Header />
            <Presentation />
            <AboutMe />
            <Projects />
            <Jobs />
        </div>
    );
}

export default Page;