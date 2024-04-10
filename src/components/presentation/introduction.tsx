import { Button } from "../ui/button";

export const Introduction = () => {

    return (
        <div className='flex flex-col items-center justify-center flex-1 h-auto space-y-5 md:items-start'>
            <h1 className="text-2xl font-bold lg:text-4xl ">Olá, eu sou o <br />Kellton Hamaia :)</h1>
            <p className="text-muted-foreground">Desenvolvedor Fullstack </p>
            <div className="flex gap-2">
                <Button variant="default" className="text-xs rounded-none md:text-sm">Download CV</Button>
                <Button variant="outline" className="text-xs rounded-none md:text-sm">Entrar em contato</Button>
            </div>
        </div>
    );

}
