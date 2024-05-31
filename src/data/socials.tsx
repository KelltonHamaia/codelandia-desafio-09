import { SocialDataType } from "@/types/Socials"
import { Mail, Instagram, Phone, Smile, LucideLinkedin, Github } from "lucide-react"

export const SocialsData: SocialDataType[] = [
    {
        id: 1,
        title: "Meu nome",
        value: "Kellton Hamaia",
        icon: <Smile className="stroke-primary" />
    },
    {
        id: 2,
        title: "LinkedIn",
        value: "Kellton Hamaia",
        url: "https://www.linkedin.com/in/kelltonhamaia/",
        icon: <LucideLinkedin className="stroke-primary" />
    },
    {
        id: 3,
        title: "GitHub",
        value: "KelltonHamaia",
        url: "https://github.com/KelltonHamaia",
        icon: <Github className="stroke-primary" />
    },
    {
        id: 4,
        title: "Instagram",
        value: "@kellton_arai",
        url: "https://www.instagram.com/kellton_arai/",
        icon: <Instagram className="stroke-primary" />
    },
    {
        id: 5,
        title: "E-mail",
        value: "kellhamaiaa@gmail.com",
        url: "mailto:kellhamaiaa@gmail.com",
        icon: <Mail className="stroke-primary" />
    },
    {
        id: 6,
        title: "Telefone",
        value: "(43) 99980-5048",
        url: "https://api.whatsapp.com/send?phone=5543999805048",
        icon: <Phone className="stroke-primary" />
    }
]