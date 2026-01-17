"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Platform",
        category: "Next.js / Stripe",
        description: "A full-featured shopping experience with modern design.",
        color: "bg-blue-900/20",
    },
    {
        title: "SaaS Dashboard",
        category: "React / Tailwind",
        description: "Analytics and management interface for data visualization.",
        color: "bg-purple-900/20",
    },
    {
        title: "Design System",
        category: "TypeScript / Storybook",
        description: "A comprehensive component library for enterprise apps.",
        color: "bg-green-900/20",
    },
    {
        title: "AI Chat Interface",
        category: "OpenAI / WebSocket",
        description: "Real-time conversational agent with streaming responses.",
        color: "bg-red-900/20",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-24 md:py-32 px-4">
            <div className="container mx-auto max-w-6xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-16"
                >
                    Selected Work
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 cursor-pointer"
                        >
                            <div className={`absolute inset-0 ${project.color} group-hover:scale-105 transition-transform duration-500`} />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-bold">{project.title}</h3>
                                        <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <p className="text-zinc-400 mb-4">{project.description}</p>
                                    <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
                                        {project.category}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
