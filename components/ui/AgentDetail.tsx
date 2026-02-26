"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, Send, ShieldCheck } from "lucide-react";
import { cn } from "@/components/ui/utils";

interface AgentDetailProps {
    agent: {
        name: string;
        ticker: string;
        image: string;
    };
    onBack: () => void;
}

export default function AgentDetail({ agent, onBack }: AgentDetailProps) {
    const [tradeType, setTradeType] = useState<"buy" | "sell">("buy");

    return (
        <div className="p-6 flex flex-col gap-6 h-full">
            {/* Header */}
            <div className="flex items-center gap-4">
                <button
                    onClick={onBack}
                    className="w-10 h-10 flex items-center justify-center bg-[#111] hover:bg-white/5 rounded-xl border border-white/5 text-white transition-colors"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden relative border border-white/10">
                        <Image src={agent.image} alt={agent.name} fill className="object-cover" />
                    </div>
                    <div>
                        <h2 className="text-white font-bold text-xl leading-tight">{agent.name}</h2>
                        <p className="text-[#22c55e] font-medium text-sm">{agent.ticker}</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-6 h-full">
                {/* Main Content Area */}
                <div className="flex-1 flex flex-col gap-6">
                    {/* Chart Section */}
                    <div className="bg-[#111] rounded-3xl border border-white/5 overflow-hidden flex-1 relative min-h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-black opacity-50" />
                        <div className="p-4 border-b border-white/5 flex items-center justify-between relative z-10">
                            <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                                <span className="text-white">Q {agent.name}</span>
                                <span className="bg-white/5 px-2 py-0.5 rounded text-white">+</span>
                                <span>1m</span>
                                <span>Indicators</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xs text-blue-400">Save</span>
                            </div>
                        </div>
                        {/* Mock Chart Visualization */}
                        <div className="flex-1 flex items-end justify-between px-8 py-12 relative z-10">
                            {[...Array(20)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-4 bg-[#22c55e]/20 rounded-t-sm relative group"
                                    style={{ height: `${20 + Math.random() * 60}%` }}
                                >
                                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-3 bg-[#22c55e]" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="bg-[#111] rounded-3xl border border-white/5 p-6 flex gap-6">
                        <div className="w-48 h-48 rounded-2xl overflow-hidden relative border border-white/10 shrink-0">
                            <Image src={agent.image} alt={agent.name} fill className="object-cover" />
                        </div>
                        <div className="flex flex-col gap-2 font-mono text-sm">
                            <div className="flex gap-2">
                                <span className="text-white font-bold">{agent.name}</span>
                                <span className="text-[#22c55e]">{agent.ticker}</span>
                            </div>
                            <p className="text-gray-400 text-xs">Dev wallet: 0x6c3f...dfd0</p>
                            <p className="text-gray-400 text-xs">CA: 0x3abb...f250</p>
                            <div className="flex gap-4 mt-2">
                                <div>
                                    <p className="text-gray-500 text-[10px] uppercase">Market cap</p>
                                    <p className="text-white font-bold">1,452.32 $</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-[10px] uppercase">Reply count</p>
                                    <p className="text-white font-bold">0</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-gray-500 text-[10px] uppercase">Created</p>
                                <p className="text-white">2 months ago</p>
                            </div>
                            <div className="flex flex-col gap-1 mt-2">
                                <span className="text-[#22c55e] font-bold">About {agent.name}</span>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Space explorer and galactic navigator. Committed to finding the best deals in the cosmos.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Chat Area */}
                    <div className="bg-[#111] rounded-3xl border border-white/5 p-6 flex flex-col gap-4">
                        <h3 className="text-[#22c55e] font-bold text-lg">Chat</h3>
                        <div className="flex-1 min-h-[100px] flex items-center justify-center border-b border-white/5 mb-4">
                            <p className="text-gray-500 text-sm">Here you will see your conversation with the agent...</p>
                        </div>
                        <div className="flex gap-3">
                            <input
                                type="text"
                                placeholder="Type something"
                                className="flex-1 bg-black border border-white/5 rounded-2xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#ff0066]/50 transition-colors"
                            />
                            <button className="bg-[#ff0066] hover:bg-[#d40055] text-white px-8 py-4 rounded-2xl font-bold transition-colors">
                                Send
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar - Trade Panel */}
                <div className="w-[380px] shrink-0 flex flex-col gap-6">
                    <div className="bg-[#111] rounded-3xl border border-white/5 overflow-hidden flex flex-col">
                        <div className="flex">
                            <button
                                onClick={() => setTradeType("buy")}
                                className={cn(
                                    "flex-1 p-4 font-bold text-sm transition-all border-b-2",
                                    tradeType === "buy" ? "text-[#ff0066] border-[#ff0066]" : "text-gray-500 border-transparent hover:text-gray-300"
                                )}
                            >
                                Buy in
                            </button>
                            <button
                                onClick={() => setTradeType("sell")}
                                className={cn(
                                    "flex-1 p-4 font-bold text-sm transition-all border-b-2",
                                    tradeType === "sell" ? "text-white border-white" : "text-gray-500 border-transparent hover:text-gray-300"
                                )}
                            >
                                Sell
                            </button>
                        </div>

                        <div className="p-6 flex flex-col gap-6">
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between text-xs font-mono">
                                    <span className="text-gray-500 uppercase">Balance</span>
                                    <span className="text-white">0.0000 SUIAIGENTS</span>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        defaultValue="0"
                                        className="w-full bg-black border border-white/5 rounded-xl px-4 py-4 text-white font-mono text-lg focus:outline-none focus:border-[#ff0066]/50"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    {["Reset", "25%", "50%", "75%", "100%"].map(label => (
                                        <button key={label} className="flex-1 bg-white/5 hover:bg-white/10 text-gray-400 text-[10px] py-2 rounded-lg transition-colors">
                                            {label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4 font-mono text-xs">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">100 SUIAGENTS ≈</span>
                                    <span className="text-white">306770.4755 COSMO</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Spot price:</span>
                                    <span className="text-white">0.0²1010 COSMO</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Execution price:</span>
                                    <span className="text-white">0.0²3259 COSMO</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Slippage:</span>
                                    <span className="text-white">222.60 %</span>
                                </div>
                            </div>

                            <button className="w-full bg-[#ff0066] hover:bg-[#d40055] text-white py-5 rounded-2xl font-black text-lg shadow-lg shadow-[#ff0066]/20 transition-all active:scale-95 mt-4">
                                Buy
                            </button>

                            <div className="flex items-center justify-center gap-2 text-[#22c55e] text-xs font-medium">
                                <ShieldCheck className="w-4 h-4" />
                                Secured payments
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
