import type { Metadata } from "next";
import { DM_Sans as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"

import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Footer } from "@/components/footer/footer";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: {
        absolute: "Hamaia.dev",
        default: "Hamaia.dev"
    },
    authors: {
        name: "Kellton Makito Hamaia Arai",
        url: "https://github.com/KelltonHamaia"
    },
    description: "Fala dev! Meu nome é Kellton, mas pode me chamar de kell! Sou um desenvolvedor fullstack mas tenho um apreço maior pelo front-end!",
    openGraph: {
        images: "https://raw.githubusercontent.com/KelltonHamaia/codelandia-desafio-09/main/public/images/banner/myself-in-anime.webp",
        authors: ["Kellton Makito Hamaia Arai"],
    },
    icons: {
        icon: "/favicon.ico"
    },
    robots: {
        follow: true,
        index: true
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}

