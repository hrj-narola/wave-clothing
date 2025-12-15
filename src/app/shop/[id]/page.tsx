"use client";

import { useParams, useRouter } from "next/navigation";
import { products, Product } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Star, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, use } from "react";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const product = products.find((p) => p.id === id);
    const [selectedSize, setSelectedSize] = useState("M");

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
                    <Link href="/shop" className="text-[var(--primary)] hover:underline">
                        Back to Shop
                    </Link>
                </div>
            </div>
        );
    }

    const handleOrder = () => {
        // Scroll to custom order form and pre-fill data (visual cue only for now)
        router.push("/contact");
    };

    return (
        <div className="min-h-screen pt-24 pb-20 px-6 max-w-7xl mx-auto">
            <Link href="/shop" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={18} /> Back to Shop
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Product Image */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="relative aspect-[4/5] bg-[var(--card-bg)] rounded-2xl overflow-hidden border border-[var(--card-border)]"
                >
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Product Details */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col justify-center"
                >
                    <span className="text-[var(--secondary)] font-bold tracking-widest uppercase text-sm mb-2">
                        {product.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">{product.name}</h1>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-3xl font-bold text-white">₹{product.price}</span>
                        <span className="flex items-center gap-1 text-yellow-400">
                            <Star fill="currentColor" size={16} /> 4.8
                        </span>
                    </div>

                    <p className="text-gray-400 leading-relaxed mb-8">
                        Premium oversized fit made from 100% combed cotton (240 GSM).
                        Bio-washed and pre-shrunk for maximum comfort and durability.
                        High-density puff print that lasts.
                    </p>

                    <div className="mb-8">
                        <h3 className="text-sm font-bold uppercase tracking-wide mb-3">Select Size</h3>
                        <div className="flex gap-3">
                            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-12 h-12 rounded-lg font-bold flex items-center justify-center transition-all ${selectedSize === size
                                            ? "bg-white text-black scale-110"
                                            : "bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-white/50"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={handleOrder}
                            className="flex-1 py-4 bg-[var(--primary)] text-white font-bold uppercase tracking-widest rounded hover:bg-[var(--accent)] transition-colors flex items-center justify-center gap-2"
                        >
                            <ShoppingBag size={20} /> Order Now
                        </button>
                        <button className="p-4 bg-[var(--card-bg)] border border-[var(--card-border)] rounded hover:bg-[var(--card-border)] transition-colors">
                            <Share2 size={20} />
                        </button>
                    </div>

                    <div className="mt-8 pt-8 border-t border-[var(--card-border)] text-sm text-gray-500">
                        <p>• Free Shipping on Prepaid Orders</p>
                        <p className="mt-2">• 7 Days Easy Returns</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
