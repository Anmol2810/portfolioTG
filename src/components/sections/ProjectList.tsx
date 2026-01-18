"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ProjectList() {
    return (
        <section id="projects" className="bg-zinc-950 py-32 px-4">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-sm font-mono uppercase tracking-widest text-purple-500 font-medium mb-12">Selected Works</h2>

                <div className="flex flex-col">
                    {projects.slice(0, 4).map((project, index) => (
                        <Link key={index} href={`/projects/${project.id}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative border-t border-white/10 py-8 md:py-20 cursor-pointer"
                            >
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 relative z-10 transition-colors duration-300 group-hover:text-zinc-400">
                                    <h3 className="text-3xl md:text-6xl font-bold tracking-tighter group-hover:translate-x-4 transition-transform duration-500">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center justify-between md:justify-start gap-8 w-full md:w-auto mt-2 md:mt-0">
                                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-zinc-500 md:text-inherit opacity-100 md:opacity-100 transition-opacity">{project.category}</span>
                                        <div className="md:hidden text-white/50">
                                            <ArrowUpRight size={24} />
                                        </div>
                                    </div>
                                </div>

                                <div className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight size={32} />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="border-t border-white/10 mt-12 pt-12 flex justify-center">
                    <Link href="/projects" className="inline-block px-8 py-4 rounded-full border border-white/20 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 text-lg font-mono uppercase tracking-widest group">
                        View All Projects <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
