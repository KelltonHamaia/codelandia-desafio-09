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
    title: "Codelândia - Projeto Portfólio",
    authors: {
        name: "Kellton Makito Hamaia Arai",
        url: "https://github.com/KelltonHamaia"
    },
    description: "Desafio 09 da comunidade do discord Codelândia!",
    icons: {
        icon: "/favicon.ico"
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

