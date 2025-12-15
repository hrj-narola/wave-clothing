export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
    isNew?: boolean;
}

export const products: Product[] = [
    {
        id: "1",
        name: "Samurai Soul Oversized",
        category: "Anime",
        price: 999,
        image: "/images/anime-tshirt.png",
        isNew: true,
    },
    {
        id: "2",
        name: "Namaste Delhi Retro",
        category: "Bollywood",
        price: 899,
        image: "/images/bollywood-tshirt.png",
        isNew: true,
    },
    {
        id: "3",
        name: "Doge Vibes Hoodie",
        category: "Memes",
        price: 1499,
        image: "/images/anime-tshirt.png", // Fallback
    },
    {
        id: "4",
        name: "Custom Print Basic",
        category: "Custom",
        price: 799,
        image: "/images/bollywood-tshirt.png", // Fallback
    },
    {
        id: "5",
        name: "Gojo Domain Expansion",
        category: "Anime",
        price: 1099,
        image: "/images/anime-tshirt.png",
    },
    {
        id: "6",
        name: "Hera Pheri Raju",
        category: "Bollywood",
        price: 899,
        image: "/images/bollywood-tshirt.png",
    },
];
