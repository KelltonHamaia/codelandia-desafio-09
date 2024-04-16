import { AboutMe } from "@/components/about/about-me";
import { Header } from "@/components/header/header";
import { Jobs } from "@/components/jobs/jobs";
import { Presentation } from "@/components/presentation/presentation";
import { Projects } from "@/components/projects/projects";
import { Stack } from "@/components/stacks/stack";

const Page = () => {
    return (
        <div className='container min-h-screen mx-auto space-y-10 border-transparent max-w-screen-2xl border-x lg:border-primary'>
            <Header />
            <Presentation />
            <AboutMe />
            <Projects />
            <Jobs />
            <Stack />
        </div>
    );
}

export default Page;