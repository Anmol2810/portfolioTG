export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    year: string;
    role: string;
    client: string;
    src: string; // Main image
    images: string[]; // Gallery images
    link?: string;
    tech: string[];
}

export const projects: Project[] = [
    {
        id: "sukhmanah",
        title: "Sukhmanah",
        category: "Web Experience",
        description: "A dynamic web experience built with React and Framer Motion, focusing on smooth interactions and modern aesthetics.",
        year: "2024",
        role: "Frontend Developer",
        client: "Sukhmanah",
        src: "/images/sukhmanah.png",
        images: ["/images/sukhmanah1.png", "/images/sukhmanah2.png", "/images/sukhmanah3.png", "/images/sukhmanah4.png"],
        tech: ["React", "Framer Motion", "Netlify"],
        link: "https://sukhmanah.netlify.app"
    },
    {
        id: "omniyat",
        title: "Omniyat",
        category: "Real Estate / Design",
        description: "A high-end real estate portfolio showcasing luxury properties. Integrated with Socket.io for real-time features.",
        year: "2024",
        role: "Full Stack Developer",
        client: "Omniyat",
        src: "/images/omniyat.webp",
        images: ["/images/omniyat1.png", "/images/omniyat2.png"],
        tech: ["Webflow", "Figma", "Socket.io"],
        link: "https://omniyat.com"
    },
    {
        id: "hola-world-tourism",
        title: "Hola World Tourism",
        category: "Travel & Leisure",
        description: "A modern travel agency website facilitating world tourism with a clean, responsive interface.",
        year: "2024",
        role: "Lead Developer",
        client: "Hola World",
        src: "/images/hwt.png",
        images: ["/images/hwt1.png", "/images/hwt2.png", "/images/hwt3.png"],
        tech: ["Next.js", "React", "Tailwind CSS"],
        link: "https://holaworldtourism.com"
    },
    {
        id: "welspun-living",
        title: "Welspun Living",
        category: "Interior & Lifestyle",
        description: "A lifestyle brand website focusing on home textiles and living solutions.",
        year: "2024",
        role: "Web Developer",
        client: "Welspun",
        src: "",
        images: ["/images/well1.png", "/images/well2.png", "/images/well3.png"],
        tech: ["WordPress"],
        link: "https://welspunliving.com"
    },
    {
        id: "trac-seals",
        title: "Trac Seals",
        category: "Industrial / Manufacturing",
        description: "Corporate website for an industrial sealing solutions provider, utilizing dynamic routing and SMTP for communications.",
        year: "2024",
        role: "Full Stack Developer",
        client: "Trac Seals",
        src: "",
        images: ["/images/trac1.png", "/images/trac2.png"],
        tech: ["Next.js", "Dynamic Routing", "SMTP.js"],
        link: "https://tracseals.com"
    },
    {
        id: "kayafit",
        title: "Kayafit",
        category: "Fitness & Wellness",
        description: "A comprehensive fitness platform offering workout plans and wellness resources. (⚠️WIP)",
        year: "2024",
        role: "Web Designer/Developer",
        client: "Kayafit",
        src: "",
        images: ["/images/kaya1.png", "/images/kaya2.png", "/images/kaya3.png"],
        tech: ["Next.js", "Tailwind CSS"],
        link: "https://kayafit.me"
    },
    {
        id: "macksyra",
        title: "Macksyra",
        category: "E-Commerce",
        description: "A robust e-commerce platform for retail, built on WordPress and WooCommerce.",
        year: "2024",
        role: "E-commerce Developer",
        client: "Macksyra",
        src: "/images/mack.png",
        images: ["/images/mack1.png", "/images/mack3.png", "/images/mack4.png"],
        tech: ["WordPress", "WooCommerce"],
        link: "https://macksyra.com"
    },
    {
        id: "sparrow",
        title: "Sparrow Interactive",
        category: "Digital Agency",
        description: "A sleek website for a digital agency, showcasing their portfolio and services with interactive elements.",
        year: "2024",
        role: "Freelance",
        client: "Sparrow",
        src: "/images/sparrow.jpg",
        images: [],
        tech: ["WordPress", "Elementor"],
        link: "https://sparrowi.com"
    },
    {
        id: "welspun-energy",
        title: "Welspun Energy",
        category: "Energy / Corporate",
        description: "Corporate website for a leading energy company, highlighting sustainable solutions and innovations.",
        year: "2024",
        role: "Web Developer",
        client: "Welspun Energy",
        src: "/images/welspunlogo.png",
        images: ["/images/wele1.png", "/images/wele2.png", "/images/wele3.png"],
        tech: ["WordPress", "Elementor"],
        link: "https://welspunnewenergy.com/"
    },
    {
        id: "prima-infotek",
        title: "Prima Infotek",
        category: "IT Services",
        description: "A professional web presence for an IT solutions provider, built for speed and reliability.",
        year: "2024",
        role: "Frontend Developer",
        client: "Prima Infotek",
        src: "/images/primalogo.png",
        images: ["/images/prima1.png", "/images/prima2.png", "/images/prima3.png"],
        tech: ["Vue.js", "Hostinger Page Builder"],
        link: "https://primainfotek.com/"
    },
    {
        id: "galaxy-consulting",
        title: "Galaxy Consulting Canada",
        category: "Consulting",
        description: "A clean, informative platform for a Canadian business consulting firm.",
        year: "2024",
        role: "Web Developer",
        client: "Galaxy Consulting",
        src: "",
        images: [],
        tech: ["JavaScript", "CSS", "SMTP"],
        link: "https://galaxyconsultinginc.ca/"
    },
    {
        id: "webplorax",
        title: "Webplorax",
        category: "Digital Services",
        description: "Website for a digital services provider, focusing on clarity and service showcasing.",
        year: "2024",
        role: "Web Developer",
        client: "Webplorax",
        src: "/images/wplogo.png",
        images: ["/images/wpx.png", "/images/wpx1.png", "/images/wpx2.png", "/images/wpx3.png"],
        tech: ["JavaScript", "CSS", "SMTP"],
        link: "https://webplorax.com/"
    }
];
