import { AboutMe } from "@/components/about/about-me";
import { Header } from "@/components/header/header";
import { Presentation } from "@/components/presentation/presentation";

const Page = () => {
    return (
        <div className='container min-h-screen mx-auto border-transparent max-w-screen-2xl border-x lg:border-primary space-y-10'>
            <Header />
            <Presentation />
            <AboutMe />
        </div>
    );
}

export default Page;