"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Palette, Terminal } from "lucide-react";
import { GenmojiFace } from "@/components/ui/GenmojiFace";

export function AboutBento() {
    return (
        <section className="py-24 px-4 bg-zinc-950">
            <div className="container mx-auto max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-5xl font-bold tracking-tighter mb-4">Inside the Mind</h2>
                    <div className="h-1 w-20 bg-blue-500" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[600px]">

                    {/* Main Bio Card - Large */}
                    <div className="md:col-span-2 md:row-span-2 bg-zinc-900/50 rounded-3xl p-8 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors flex flex-col md:flex-row items-center gap-8">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="shrink-0">
                            <GenmojiFace src="/images/animo.png" />
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Terminal className="text-blue-500" />
                                The Developer
                            </h3>
                            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                                I build pixel-perfect, engaging, and accessible digital experiences.
                                With a background in both design and engineering, I understand the
                                constraints and possibilities of the web.
                            </p>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                My approach is product-design driven: clear goals, scalable systems,
                                and delightful interactions. I'm obsessed with performance and
                                micro-interactions that make an app feel "native".
                            </p>
                        </div>
                    </div>

                    {/* Stack Card - Small */}
                    <div className="bg-zinc-900/50 rounded-3xl p-6 border border-white/5 flex flex-col justify-center items-center text-center hover:bg-zinc-900 transition-colors">
                        <Code2 size={40} className="text-purple-500 mb-4" />
                        <h4 className="text-xl font-bold mb-2">Clean Code</h4>
                        <p className="text-sm text-zinc-500">TypeScript, Next.js, and sturdy architectures.</p>
                    </div>

                    {/* Design Card - Small */}
                    <div className="bg-zinc-900/50 rounded-3xl p-6 border border-white/5 flex flex-col justify-center items-center text-center hover:bg-zinc-900 transition-colors">
                        <Palette size={40} className="text-pink-500 mb-4" />
                        <h4 className="text-xl font-bold mb-2">Modern UI</h4>
                        <p className="text-sm text-zinc-500">Tailwind, Motion, and glassmorphism.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
