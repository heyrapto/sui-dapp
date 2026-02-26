"use client";

import Image from "next/image";
import { cn } from "@/components/ui/utils";

interface StakingCardProps {
    duration: number;
    apr: number;
    rewardValue: string;
    agentAmount: number;
    image: string;
    isActive?: boolean;
    onClick?: () => void;
}

export default function StakingCard({
    duration,
    apr,
    rewardValue,
    agentAmount,
    image,
    isActive,
    onClick,
}: StakingCardProps) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "bg-[#111] rounded-3xl border overflow-hidden cursor-pointer transition-all duration-300 group",
                isActive ? "border-[#ff0066]" : "border-white/5 hover:border-white/10"
            )}
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={image}
                    alt={`Stake for ${duration} days`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                    <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                        <span className="text-[#2edbd3] text-sm font-bold">{duration}</span>
                        <span className="text-gray-400 text-xs ml-1 font-medium">days</span>
                    </div>
                </div>
                <div className="absolute top-4 right-4 bg-[#ff0066]/20 backdrop-blur-md px-3 py-1 rounded-lg border border-[#ff0066]/30">
                    <span className="text-[#ff0066] text-xs font-bold uppercase mr-1">APR</span>
                    <span className="text-white text-sm font-black">{apr}%</span>
                </div>
            </div>

            <div className="p-5 space-y-3 font-mono">
                <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500 uppercase">Reward value:</span>
                    <span className="text-white font-bold">{rewardValue}</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500 uppercase">Amount of agents:</span>
                    <span className="text-[#2edbd3] font-bold text-sm">{agentAmount}</span>
                </div>
            </div>
        </div>
    );
}
