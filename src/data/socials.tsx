import { SocialDataType } from "@/types/Socials"
import { Mail, Instagram, Phone, Smile } from "lucide-react"

export const SocialsData: SocialDataType[] = [
    {
        id: 1,
        title: "Meu nome",
        value: "Kellton Hamaia",
        icon: <Smile className="stroke-primary" />
    },
    {
        id: 1,
        title: "E-mail",
        value: "kellhamaiaa@gmail.com",
        icon: <Mail className="stroke-primary" />
    },
    {
        id: 1,
        title: "Instagram",
        value: "@kellton_arai",
        icon: <Instagram className="stroke-primary" />
    },
    {
        id: 1,
        title: "Telefone",
        value: "(43) 99980-5048",
        icon: <Phone className="stroke-primary" />
    }
]