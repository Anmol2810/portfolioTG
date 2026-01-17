"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-black pt-32 pb-16 px-4 selection:bg-pink-500/30">
            <div className="container mx-auto max-w-6xl">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>

                <motion.h1
                    className="text-5xl md:text-8xl font-bold mb-16 tracking-tighter"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    All <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Projects.</span>
                </motion.h1>

                <div className="grid md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <Link href={`/projects/${project.id}`} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-purple-500/50 transition-colors cursor-pointer"
                            >
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-3xl font-bold">{project.title}</h3>
                                            <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity text-white">
                                                <ArrowUpRight size={24} />
                                            </div>
                                        </div>
                                        <p className="text-zinc-300 mb-6 max-w-md line-clamp-2">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.slice(0, 3).map(t => (
                                                <span key={t} className="text-xs font-mono text-zinc-400 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full bg-black/50">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
