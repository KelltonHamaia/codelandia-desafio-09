import { Introduction } from "@/components/presentation/introduction";
import { Banner } from "@/components/presentation/image-area";

export const Presentation = () => {

    return (
        <main className='flex lg:mt-20 lg:px-20 h-2/4'>
            <Introduction />
            <Banner />
        </main>
    );

}
