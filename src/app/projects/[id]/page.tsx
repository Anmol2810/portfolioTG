"use client";

import { useParams, useRouter } from "next/navigation";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";
import Lenis from "lenis";

export default function ProjectPage() {
    const { id } = useParams();
    const router = useRouter();
    const project = projects.find((p) => p.id === id);

    useEffect(() => {
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);

    if (!project) {
        return (
            <div className="h-screen flex items-center justify-center bg-black text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <button onClick={() => router.back()} className="text-zinc-500 hover:text-white underline">Go Back</button>
                </div>
            </div>
        );
    }

    return (
        <main className="bg-black min-h-screen text-white selection:bg-blue-500/30">
            {/* Header / Nav */}
            {/* Header / Nav removed to use global Navigation */}
            {/* Keeping just a spacer or relying on global nav */}

            {/* Hero Image */}
            {/* Hero Image */}
            {project.src && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full max-w-6xl mx-auto h-[50vh] md:h-[60vh] relative pt-20 px-4 md:px-12"
                >
                    <div className="w-full h-full relative rounded-2xl overflow-hidden bg-zinc-900">
                        {/* In a real app, use valid images. For now, color placeholder if image fails or generic text */}
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 border border-white/10">
                            <Image src={project.src} fill alt={project.title} className="object-cover" />
                        </div>

                    </div>
                </motion.div>
            )}

            {/* Content */}
            <div className="container mx-auto px-6 py-24">

                {/* Title Section - Full Width */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-16 max-w-4xl"
                >
                    {project.title}
                </motion.h1>

                <div className="grid md:grid-cols-3 gap-16">
                    {/* Project Info */}
                    <div className="md:col-span-1 space-y-8">

                        <div className="space-y-6">
                            <div className="border-t border-white/10 pt-4">
                                <span className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1">Client</span>
                                <span className="text-xl">{project.client}</span>
                            </div>
                            <div className="border-t border-white/10 pt-4">
                                <span className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1">Role</span>
                                <span className="text-xl">{project.role}</span>
                            </div>
                            {/* Year removed */}
                            <div className="border-t border-white/10 pt-4">
                                <span className="block text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1">Tech</span>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map(t => (
                                        <span key={t} className="px-3 py-1 rounded-full border border-white/20 text-sm hover:bg-white hover:text-black transition-colors">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {project.link && (
                            <div className="pt-8">
                                <a href={project.link} target="_blank" className="inline-flex items-center gap-2 text-2xl font-bold border-b border-white hover:text-blue-500 hover:border-blue-500 transition-colors pb-1">
                                    Live Site <ArrowUpRight size={24} />
                                </a>
                            </div>
                        )}
                    </div>

                    {/* Description & Gallery */}
                    <div className="md:col-span-2 space-y-24">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            className="text-2xl md:text-3xl font-light text-zinc-300 leading-relaxed"
                        >
                            {project.description}
                        </motion.div>

                        {project.images && project.images.length > 0 && (
                            <div className="space-y-8">
                                {project.images.map((img, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ y: 50, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="aspect-video bg-zinc-900 rounded-lg border border-white/5 relative overflow-hidden group"
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center text-zinc-800 font-bold text-4xl group-hover:scale-105 transition-transform duration-700">
                                            <Image src={img} fill alt={`Screenshot ${i + 1}`} className="object-cover" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Next Project CTA */}
            <div className="border-t border-white/10 py-32 text-center bg-zinc-950">
                <p className="text-sm font-mono uppercase tracking-widest text-zinc-500 mb-6">Next Case</p>
                <Link href="/" className="text-6xl md:text-9xl font-bold tracking-tighter hover:text-blue-500 transition-colors">
                    Next Project
                </Link>
            </div>
        </main>
    );
}
