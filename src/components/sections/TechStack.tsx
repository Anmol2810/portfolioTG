"use client";

import { motion } from "framer-motion";
import { BrandIcons } from "@/components/BrandIcons";

const technologies = [
    { name: "WordPress", Icon: BrandIcons.WordPress },
    { name: "WooCommerce", Icon: BrandIcons.WooCommerce },
    { name: "Webflow", Icon: BrandIcons.Webflow },
    { name: "Next.js", Icon: BrandIcons.NextJS },
    { name: "React", Icon: BrandIcons.React },
    { name: "GSAP", Icon: BrandIcons.GSAP },
    { name: "Netlify", Icon: BrandIcons.Netlify },
    { name: "Prismic", Icon: BrandIcons.Prismic },
    { name: "Vercel", Icon: BrandIcons.Vercel },
    { name: "TypeScript", Icon: BrandIcons.TypeScript },
    { name: "Tailwind CSS", Icon: BrandIcons.Tailwind },
    { name: "Framer Motion", Icon: BrandIcons.FramerMotion },
    { name: "Figma", Icon: BrandIcons.Figma },
    { name: "Miro", Icon: BrandIcons.Miro },
];

// Double the array for seamless loop
const marqueeItems = [...technologies, ...technologies];

export function TechStack() {
    return (
        <section className="py-24 bg-black border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 mb-12">
                <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500">
                    Technologies & Tools
                </h2>
            </div>

            <div className="flex">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 80, // Slower duration for readability of logos
                        ease: "linear",
                        repeat: Infinity
                    }}
                    className="flex gap-16 md:gap-32 whitespace-nowrap pr-16 md:pr-32"
                >
                    {marqueeItems.map((tech, i) => (
                        <div key={i} className="flex items-center gap-4 group cursor-default">
                            <div className="text-zinc-600 group-hover:text-white transition-colors">
                                <tech.Icon className="w-8 h-8 md:w-12 md:h-12" />
                            </div>
                            <span className="text-2xl md:text-4xl font-bold tracking-tighter text-zinc-600 group-hover:text-white transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
