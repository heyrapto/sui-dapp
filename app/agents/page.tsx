"use client";

import { useState } from "react";
import Image from "next/image";
import AgentCard from "@/components/ui/AgentCard";
import AgentDetail from "@/components/ui/AgentDetail";

const DUMMY_AGENTS = [
    { name: "COSMO", ticker: "$COSMO", image: "/agents/cosmo.png" },
    { name: "TRUMP", ticker: "$TRUMP", image: "/agents/trump.png" },
    { name: "Retard", ticker: "$RETAR", image: "/agents/monkey.png" },
    { name: "Santa", ticker: "$SANTA", image: "/agents/santa.png" }, // Placeholder if image missing
    { name: "BMW M3", ticker: "$BM3", image: "/agents/car.png" }, // Placeholder if image missing
];

export default function AgentsPage() {
    const [selectedAgent, setSelectedAgent] = useState<typeof DUMMY_AGENTS[0] | null>(null);

    if (selectedAgent) {
        return <AgentDetail agent={selectedAgent} onBack={() => setSelectedAgent(null)} />;
    }

    return (
        <div className="p-8">
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

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {DUMMY_AGENTS.map((agent) => (
                    <AgentCard
                        key={agent.name}
                        {...agent}
                        onClick={() => setSelectedAgent(agent)}
                    />
                ))}
            </div>
        </div>
    );
}
