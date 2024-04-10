import Link from "next/link";
import { Menu } from "@/components/header/menu";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {

    return (
        <nav className='flex items-center justify-between h-20 px-3 md:px-0'>
            <Link href="/" className="flex items-center gap-2 text-sm font-bold md:text-3xl">
                <img
                    src="/images/brands/brand-alt.svg"
                    className="hidden size-12 md:block"
                    alt="logo"
                />
                &#123;Mkt.dev&#125;
            </Link>
            <Menu />
            <MobileMenu />
        </nav>
    );

}
