"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "E-Commerce",
        category: "Full Stack",
        image: "/project1.jpg",
        color: "from-blue-900 to-indigo-900"
    },
    {
        title: "SaaS Dashboard",
        category: "Frontend",
        image: "/project2.jpg",
        color: "from-purple-900 to-pink-900"
    },
    {
        title: "AI Interface",
        category: "Experimental",
        image: "/project3.jpg",
        color: "from-emerald-900 to-teal-900"
    },
    {
        title: "Mobile App",
        category: "React Native",
        image: "/project4.jpg",
        color: "from-orange-900 to-red-900"
    }
];

function Card({ project }: { project: typeof projects[0] }) {
    return (
        <div className="group relative h-[400px] w-[300px] md:h-[500px] md:w-[400px] overflow-hidden bg-neutral-900 rounded-3xl border border-white/10 shrink-0">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40`} />

            <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-end">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-full group-hover:bg-white group-hover:text-black transition-colors">
                        <ArrowUpRight size={24} />
                    </div>
                </div>

                <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-white/60 mb-2 block">{project.category}</span>
                    <h3 className="text-3xl font-bold uppercase tracking-tighter">{project.title}</h3>
                </div>
            </div>
        </div>
    );
}

export function HorizontalProjects() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black/50">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-8 px-20">
                    <div className="shrink-0 w-[400px] flex flex-col justify-center">
                        <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6">
                            SELECTED <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                                WORKS
                            </span>
                        </h2>
                        <p className="text-xl text-zinc-400 max-w-sm">
                            A curated collection of digital products and web experiences.
                            <br /><span className="text-sm opacity-50 mt-4 block">Scroll down &rarr;</span>
                        </p>
                    </div>
                    {projects.map((project, i) => (
                        <Card key={i} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
