"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/components/ui/utils";
import StakingCard from "@/components/ui/StakingCard";

const STAKING_OPTIONS = [
    { duration: 30, apr: 1, rewardValue: "$200", agentAmount: 1, image: "/agents/cosmo.png" }, // Using cosmo as placeholder for chest
    { duration: 30, apr: 4, rewardValue: "$800", agentAmount: 4, image: "/agents/trump.png" },
    { duration: 60, apr: 10, rewardValue: "$2000", agentAmount: 10, image: "/agents/monkey.png" },
];

export default function StakingPage() {
    const [selectedOption, setSelectedOption] = useState(0);
    const [stakeAmount, setStakeAmount] = useState("2500");

    return (
        <div className="p-8 pb-32">
            {/* Banner */}
            <div className="relative w-full h-[240px] rounded-3xl overflow-hidden mb-12 border border-white/10 group">
                <Image
                    src="/ad.png"
                    alt="Stake to get airdrop"
                    fill
                    className="object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-12">
                    <h2 className="text-white text-4xl font-black mb-2 tracking-tight">
                        Stake to get airdrop of agents!
                    </h2>
                    <p className="text-gray-300 text-lg">
                        Stake your way to unlock powerful agents and benefits
                    </p>
                </div>
            </div>

            <div className="flex gap-8">
                {/* Main Content Area */}
                <div className="flex-1 space-y-12">
                    {/* Staking Cards Section */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h1 className="text-white text-3xl font-black">Stake $SUI</h1>
                            <p className="text-gray-400 text-sm max-w-2xl leading-relaxed">
                                Choose between three options of staking, the longer you stake more agents you get!
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {STAKING_OPTIONS.map((option, idx) => (
                                <StakingCard
                                    key={idx}
                                    {...option}
                                    isActive={selectedOption === idx}
                                    onClick={() => setSelectedOption(idx)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Stake Form Section */}
                    <div className="bg-[#111] rounded-3xl border border-white/5 p-8 space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-white font-bold text-lg uppercase tracking-wider">Lock duration</h3>
                            <div className="flex gap-4">
                                {STAKING_OPTIONS.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setSelectedOption(idx)}
                                        className={cn(
                                            "flex-1 relative flex items-center justify-center gap-2 py-4 rounded-2xl border transition-all duration-300 font-mono text-sm",
                                            selectedOption === idx
                                                ? "bg-[#ff0066] border-[#ff0066] text-white"
                                                : "bg-white/5 border-white/5 text-gray-400 hover:bg-white/10"
                                        )}
                                    >
                                        <span className="opacity-50">⚡</span>
                                        {option.duration} days
                                        <div className={cn(
                                            "absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black border border-white/20",
                                            selectedOption === idx ? "bg-white/20" : "bg-black/50"
                                        )}>
                                            {option.agentAmount}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-white font-bold text-lg uppercase tracking-wider">Stake Amount</h3>
                            <div className="space-y-4">
                                <input
                                    type="text"
                                    value={stakeAmount}
                                    onChange={(e) => setStakeAmount(e.target.value)}
                                    className="w-full bg-black border border-white/5 rounded-2xl px-8 py-6 text-white font-mono text-xl focus:outline-none focus:border-[#ff0066]/50 transition-colors"
                                />
                                <div className="flex gap-3">
                                    {["Reset", "25%", "50%", "100%"].map(label => (
                                        <button key={label} className="bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 text-xs py-3 px-6 rounded-xl transition-all font-mono">
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-x-24 gap-y-4 pt-4">
                            <div className="space-y-4 font-mono">
                                <div className="flex justify-between items-center py-1 border-b border-white/5">
                                    <span className="text-gray-500 text-sm uppercase">Wallet Balance</span>
                                    <span className="text-white font-bold text-sm">0 $SUI</span>
                                </div>
                                <div className="flex justify-between items-center py-1 border-b border-white/5">
                                    <span className="text-gray-500 text-sm uppercase">Stake Amount</span>
                                    <span className="text-white font-bold text-sm">0 $SUI</span>
                                </div>
                                <div className="flex justify-between items-center py-1 border-b border-white/5">
                                    <span className="text-gray-500 text-sm uppercase">Start Date</span>
                                    <span className="text-white font-bold text-sm">22/01/25</span>
                                </div>
                                <div className="flex justify-between items-center py-1">
                                    <span className="text-gray-500 text-sm uppercase">End Date</span>
                                    <span className="text-white font-bold text-sm">-</span>
                                </div>
                            </div>
                            <div className="space-y-4 font-mono">
                                <div className="flex justify-between items-center py-1 border-b border-white/5">
                                    <span className="text-gray-500 text-sm uppercase">Total Staked</span>
                                    <span className="text-white font-bold text-sm">0 $SUI</span>
                                </div>
                                <div className="flex justify-between items-center py-1 border-b border-white/5">
                                    <span className="text-gray-500 text-sm uppercase">Claimable Rewards</span>
                                    <span className="text-[#2edbd3] font-bold text-sm">0 Agent</span>
                                </div>
                                <div className="flex justify-between items-center py-1 border-b border-white/10">
                                    <span className="text-gray-500 text-sm uppercase">Total Claimed Rewards</span>
                                    <span className="text-white font-bold text-sm">0</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <button className="flex-1 bg-[#ff0066] hover:bg-[#d40055] text-white py-6 rounded-2xl font-black text-xl shadow-lg shadow-[#ff0066]/20 transition-all active:scale-95">
                                Stake $SUI
                            </button>
                            <button className="flex-1 bg-transparent border border-[#ff0066] text-[#ff0066] hover:bg-[#ff0066]/5 py-6 rounded-2xl font-black text-xl transition-all">
                                Buy $SUI
                            </button>
                        </div>

                        <div className="flex items-center justify-center gap-2 text-[#22c55e] text-xs font-medium pt-4 border-t border-white/5">
                            <ShieldCheck className="w-4 h-4" />
                            Secured payments
                        </div>
                    </div>
                </div>

                {/* Right Sidebar - Positions */}
                <div className="w-[320px] bg-[#111] rounded-3xl border border-white/5 p-8 flex flex-col items-center justify-center text-center gap-4">
                    <h3 className="text-[#2edbd3] font-bold text-sm uppercase tracking-widest mb-4">No data found</h3>
                    <p className="text-gray-500 text-sm font-mono leading-relaxed">
                        There is no active positions
                    </p>
                    <p className="text-gray-500 text-sm font-mono">
                        Start one now!
                    </p>
                </div>
            </div>
        </div>
    );
}
