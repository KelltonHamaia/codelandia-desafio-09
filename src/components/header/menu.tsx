import Link from "next/link";
import { ThemeSwitch } from "../theme/theme-switch";

export const Menu = () => {

    return (
        <ul className="items-center hidden gap-5 lg:flex">
            <li className="text-xl">
                <Link href="#about-me">Sobre mim</Link>
            </li>
            <li className="text-xl">
                <Link href="#projects">Projetos</Link>
            </li>
            <li className="text-xl">
                <Link href="#jobs">Serviços</Link>
            </li>
            <li className="text-xl">
                <Link href="#skills">Minhas skills</Link>
            </li>
            <ThemeSwitch />
        </ul>
    );

}
