"use client";

import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { Filter, X } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

function ShopContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const initialCategory = searchParams.get("category") || "All";

    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        const category = searchParams.get("category");
        if (category) {
            setSelectedCategory(category);
        }
    }, [searchParams]);

    const categories = ["All", "Anime", "Bollywood", "Memes", "Custom"];

    const handleCategoryChange = (cat: string) => {
        setSelectedCategory(cat);
        const params = new URLSearchParams(searchParams.toString());
        if (cat === "All") {
            params.delete("category");
        } else {
            params.set("category", cat);
        }
        router.push(`/shop?${params.toString()}`, { scroll: false });
    };

    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="min-h-screen pt-24 pb-20 px-6 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <h1 className="text-4xl font-bold tracking-tighter mb-4 md:mb-0">
                    SHOP <span className="text-gradient">DROPS</span>
                </h1>

                <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="md:hidden flex items-center gap-2 px-4 py-2 border border-[var(--card-border)] rounded-full text-sm"
                >
                    <Filter size={16} /> Filters
                </button>

                <div className="hidden md:flex gap-4">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === cat
                                ? "bg-[var(--primary)] text-white"
                                : "bg-[var(--card-bg)] border border-[var(--card-border)] hover:bg-[var(--card-border)]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Mobile Filter Drawer */}
            <AnimatePresence>
                {isFilterOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden overflow-hidden mb-8"
                    >
                        <div className="flex flex-wrap gap-2 p-4 glass-panel">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        handleCategoryChange(cat);
                                        setIsFilterOpen(false);
                                    }}
                                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${selectedCategory === cat
                                        ? "bg-[var(--primary)] text-white"
                                        : "bg-white/5 border border-white/10"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {filteredProducts.map((product) => (
                    <Link href={`/shop/${product.id}`} key={product.id}>
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="group relative cursor-pointer"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)]">
                                {product.isNew && (
                                    <span className="absolute top-3 left-3 z-10 bg-[var(--accent)] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest rounded-sm">
                                        New Drop
                                    </span>
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex flex-col justify-end p-6">
                                    <button className="w-full py-3 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-[var(--secondary)] transition-colors rounded-sm">
                                        Quick View
                                    </button>
                                </div>

                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            <div className="mt-4">
                                <h3 className="text-lg font-bold leading-tight mb-1">{product.name}</h3>
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-gray-400">{product.category}</p>
                                    <p className="text-[var(--secondary)] font-bold">₹{product.price}</p>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </motion.div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No products found in this category.
                </div>
            )}
        </div>
    );
}

export default function ShopPage() {
    return (
        <Suspense fallback={<div className="min-h-screen pt-24 flex justify-center text-white">Loading...</div>}>
            <ShopContent />
        </Suspense>
    );
}
