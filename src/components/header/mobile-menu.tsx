import {
    DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuItem,
    DropdownMenuLabel
} from "@/components/ui/dropdown-menu"

import { Menu } from 'lucide-react'
import { Button } from "../ui/button";
import Link from "next/link";
import { ThemeSwitch } from "@/components/theme/theme-switch";

export const MobileMenu = () => {

    return (
        <div className="flex items-center gap-2 lg:hidden">
            <ThemeSwitch />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button>
                        <Menu size={24} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem>
                        <Link href="#about-me">Sobre mim</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href="#projects">Projetos</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href="#jobs">Serviços</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href="#skills">Minhas skills</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );

}




