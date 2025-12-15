"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 glass-panel border-0 border-b border-b-[rgba(255,255,255,0.05)] rounded-none">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/">
                    <h1 className="text-2xl font-bold tracking-tighter text-gradient">
                        WAVE CLOTHING
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    <Link href="/shop" className="text-sm tracking-wide opacity-80 hover:opacity-100 hover:text-[var(--secondary)] transition-colors">SHOP</Link>
                    <Link href="/#custom" className="text-sm tracking-wide opacity-80 hover:opacity-100 hover:text-[var(--secondary)] transition-colors">CUSTOM</Link>
                    <Link href="/about" className="text-sm tracking-wide opacity-80 hover:opacity-100 hover:text-[var(--secondary)] transition-colors">ABOUT</Link>
                    <Link href="/contact" className="text-sm tracking-wide opacity-80 hover:opacity-100 hover:text-[var(--secondary)] transition-colors">CONTACT</Link>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <button className="p-2 hover:bg-[var(--card-border)] rounded-full transition-colors">
                        <ShoppingBag size={20} />
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-full bg-[#050505] border-b border-[rgba(255,255,255,0.1)] p-6 md:hidden flex flex-col gap-4 shadow-2xl"
                >
                    <Link href="/shop" onClick={() => setIsOpen(false)} className="text-lg font-medium tracking-wide">Shop</Link>
                    <Link href="/#custom" onClick={() => setIsOpen(false)} className="text-lg font-medium tracking-wide">Custom</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium tracking-wide">About</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium tracking-wide">Contact</Link>
                </motion.div>
            )}
        </header>
    );
}
