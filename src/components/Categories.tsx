"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
    { id: 1, title: "Anime Edition", desc: "Naruto, One Piece, JJK & more", gradient: "linear-gradient(135deg, #FF4D4D, #F9CB28)" },
    { id: 2, title: "Bollywood Vibes", desc: "Iconic dialogues & retro style", gradient: "linear-gradient(135deg, #7928CA, #FF0080)" },
    { id: 3, title: "Meme Culture", desc: "Trending memes on your chest", gradient: "linear-gradient(135deg, #007CF0, #00DFD8)" },
    { id: 4, title: "On Demand", desc: "Your design, our quality", gradient: "linear-gradient(135deg, #FF4D4D, #191919)" },
];

export default function Categories() {
    return (
        <section id="collections" className="py-20 bg-[var(--background)]">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">TRENDING CATEGORIES</h2>
                    <div className="w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <Link key={cat.id} href={cat.id === 4 ? "/#custom" : `/shop?category=${cat.title.split(' ')[0]}`}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
                            >
                                <div
                                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                                    style={{ background: cat.gradient }}
                                ></div>
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:translate-x-2 transition-transform">{cat.title}</h3>
                                    <p className="text-white/80 text-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        {cat.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
