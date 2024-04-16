import { Socials } from "@/components/about/socials";

export const AboutMe = () => {
    return (
        <div className="flex flex-col gap-5 my-5">
            <section className="flex flex-col gap-4 py-2 lg:py-5" id="about-me">
                <h1 className="text-xl font-bold text-center md:text-3xl">Sobre mim</h1>
                <p className="w-full max-w-xl mx-auto text-sm leading-relaxed lg:text-center text-pretty md:text-lg text-muted-foreground">
                    Fala dev, muito prazer! Me chamo Kellton, mas pode me chamar de Kell! <br />Tenho {new Date().getFullYear() - 2003} anos e sou desenvolvedor Fullstack, com um foco a mais no desenvolvimento Front-end!
                    Possuo conhecimento e experiência em tecnolgias como React e Node, tendo criado vários projetos e aplicações com o uso das mesmas,
                    acredito que posso contribuir e te ajudar a ir mais longe!
                </p>
            </section>
            <Socials />
        </div>
    );

}


