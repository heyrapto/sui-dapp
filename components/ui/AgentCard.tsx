"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AgentCardProps {
    name: string;
    ticker: string;
    image: string;
    onClick?: () => void;
}

export default function AgentCard({ name, ticker, image, onClick }: AgentCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            onClick={onClick}
            className="bg-[#111] rounded-2xl border border-white/5 overflow-hidden cursor-pointer hover:border-[#ff0066]/30 transition-colors group"
        >
            <div className="aspect-square relative overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="p-4">
                <h3 className="text-white font-bold text-lg">{name}</h3>
                <p className="text-[#22c55e] font-medium text-sm">{ticker}</p>
            </div>
        </motion.div>
    );
}
