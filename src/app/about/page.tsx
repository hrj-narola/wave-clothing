"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="min-h-screen pt-24 pb-20 px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase"
                >
                    Not Just a <span className="text-gradient">Brand</span>. <br />
                    It's a <span className="text-white">Movement</span>.
                </motion.h1>
                <p className="text-xl text-gray-400 leading-relaxed">
                    Wave Clothing was born from the streets, fueled by anime marathons, and defined by the chaos of youth culture.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-24">
                <div className="relative h-[400px] rounded-2xl overflow-hidden glass-panel border border-[var(--card-border)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] opacity-20"></div>
                    {/* Placeholder for brand story image */}
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 font-black text-6xl rotate-[-15deg]">
                        WAVE
                    </div>
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold uppercase tracking-wide">Our Mission</h2>
                    <p className="text-gray-300 leading-relaxed">
                        We believe that what you wear is an extension of who you are. Whether you're an otaku, a meme lord, or a streetwear enthusiast, we create oversized tees that let you speak without saying a word.
                    </p>
                    <div className="grid grid-cols-2 gap-6 pt-6">
                        <div>
                            <h3 className="text-2xl font-bold text-[var(--secondary)]">100%</h3>
                            <p className="text-sm text-gray-400">Premium Cotton</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-[var(--primary)]">10k+</h3>
                            <p className="text-sm text-gray-400">Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
