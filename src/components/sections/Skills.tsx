"use client";

import { motion } from "framer-motion";

const skills = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", // Frontend
    "Node.js", "PostgreSQL", "Prisma", // Backend
    "Figma", "Framer Motion", "Three.js", // Design/Creative
    "Git", "Docker", "AWS" // DevOps
];

export function Skills() {
    return (
        <section className="py-24 border-y border-white/5 bg-zinc-950/30">
            <div className="container mx-auto max-w-6xl px-4">
                <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-12 text-center">
                    Technologies & Tools
                </h3>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
