import { Header } from "@/components/header/header";
import { Presentation } from "@/components/presentation/presentation";
import { Separator } from "@/components/ui/separator";

const Page = () => {
    return (
        <div className='container min-h-screen mx-auto border-transparent max-w-screen-2xl border-x lg:border-primary'>
            <Header />
            <Presentation />
            <Separator className="my-5" />
        </div>
    );
}

export default Page;