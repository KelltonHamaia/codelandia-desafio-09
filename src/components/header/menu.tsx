import Link from "next/link";
import { ThemeSwitch } from "../theme/theme-switch";

export const Menu = () => {

    return (
        <ul className="items-center hidden gap-5 lg:flex">
            <li className="text-xl hover:text-primary hover:animate-pulse">
                <Link href="#about-me">Sobre mim</Link>
            </li>
            <li className="text-xl hover:text-primary hover:animate-pulse">
                <Link href="#projects">Projetos</Link>
            </li>
            <li className="text-xl hover:text-primary hover:animate-pulse">
                <Link href="#jobs">Serviços</Link>
            </li>
            <li className="text-xl hover:text-primary hover:animate-pulse">
                <Link href="#skills">Minhas skills</Link>
            </li>
            <ThemeSwitch />
        </ul>
    );

}
