"use client";

import { useState } from "react";
import Image from "next/image";
import { RefreshCw, Check, Upload, ChevronLeft } from "lucide-react";
import { cn } from "@/components/ui/utils";

const STEPS = [
    "Token Information",
    "Personalization",
    "Initial Liquidity",
    "Completion & NFT Requirements"
];

export default function CreateAgentPage() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        ticker: "",
        twitter: "",
        description: "",
        charisma: 50,
        personality: "",
        liquidity: 32,
    });

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    return (
        <div className="p-8 flex items-center justify-center min-h-[calc(100vh-140px)]">
            <div className="w-full max-w-4xl bg-[#111] rounded-[40px] border border-white/5 p-12 relative overflow-hidden">
                {/* Progress Header */}
                <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-8">
                    <div className="flex items-center gap-3">
                        <h1 className="text-white text-2xl font-black">
                            {currentStep}. {STEPS[currentStep - 1]}
                        </h1>
                        <button className="w-8 h-8 rounded-lg bg-[#ff0066] flex items-center justify-center text-white hover:rotate-180 transition-transform duration-500">
                            <RefreshCw className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="flex items-center gap-2">
                        {[1, 2, 3, 4].map((step) => (
                            <div key={step} className="flex items-center">
                                <div className={cn(
                                    "w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300",
                                    currentStep > step
                                        ? "bg-[#ff0066] border-[#ff0066] text-white"
                                        : currentStep === step
                                            ? "bg-[#ff0066]/20 border-[#ff0066] text-[#ff0066]"
                                            : "bg-white/5 border-white/10 text-gray-600"
                                )}>
                                    {currentStep > step ? <Check className="w-5 h-5" /> : step}
                                </div>
                                {step < 4 && (
                                    <div className={cn(
                                        "w-6 h-[2px] mx-1",
                                        currentStep > step ? "bg-[#ff0066]" : "bg-white/10"
                                    )} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Step Content */}
                <div className="min-h-[400px]">
                    {currentStep === 1 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="space-y-2">
                                <label className="text-gray-400 font-mono text-xs uppercase tracking-widest ml-1">Token Name</label>
                                <input
                                    type="text"
                                    placeholder="Nickname..."
                                    className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white font-mono focus:outline-none focus:border-[#ff0066]/50 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-400 font-mono text-xs uppercase tracking-widest ml-1">Token Ticker</label>
                                <input
                                    type="text"
                                    placeholder="Token ticker"
                                    className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white font-mono focus:outline-none focus:border-[#ff0066]/50 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-400 font-mono text-xs uppercase tracking-widest ml-1">Twitter/X Link Persona</label>
                                <input
                                    type="text"
                                    placeholder="Twitter url"
                                    className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white font-mono focus:outline-none focus:border-[#ff0066]/50 transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-gray-400 font-mono text-xs uppercase tracking-widest ml-1">Token Description</label>
                                <textarea
                                    rows={4}
                                    placeholder="Description of the token"
                                    className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white font-mono focus:outline-none focus:border-[#ff0066]/50 transition-colors resize-none"
                                />
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="space-y-4">
                                <label className="text-gray-400 font-mono text-xs uppercase tracking-widest ml-1">Token Image</label>
                                <div className="w-full aspect-[4/1] bg-black border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center gap-2 group cursor-pointer hover:border-[#ff0066]/50 transition-colors">
                                    <Upload className="w-8 h-8 text-gray-600 group-hover:text-[#ff0066] transition-colors" />
                                    <p className="text-gray-500 font-mono text-sm tracking-tight">Drag and drop your image here</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-between items-center px-1">
                                    <label className="text-gray-400 font-mono text-xs uppercase tracking-widest">Charisma Level</label>
                                    <div className="flex gap-12 text-[10px] font-mono uppercase tracking-widest text-[#ff0066]">
                                        <span>Retarded</span>
                                        <span>Genius</span>
                                    </div>
                                </div>
                                <input
                                    type="range"
                                    className="w-full accent-[#ff0066] bg-white/5 h-2 rounded-lg appearance-none cursor-pointer"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-400 font-mono text-xs uppercase tracking-widest ml-1">Describe Personality</label>
                                <textarea
                                    rows={4}
                                    placeholder="Write something"
                                    className="w-full bg-black border border-white/5 rounded-2xl px-6 py-4 text-white font-mono focus:outline-none focus:border-[#ff0066]/50 transition-colors resize-none"
                                />
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pt-8">
                            <div className="space-y-8">
                                <label className="text-gray-400 font-mono text-xs uppercase tracking-widest ml-1">Liquidity slider</label>
                                <div className="bg-black border border-white/5 rounded-3xl p-12 relative">
                                    <div className="flex justify-between text-[10px] font-mono text-gray-600 uppercase mb-4">
                                        <span>1%</span>
                                        <span className="text-[#ff0066] font-bold text-sm bg-[#ff0066]/10 px-3 py-1 rounded-lg border border-[#ff0066]/20">32%</span>
                                        <span>100%</span>
                                    </div>
                                    <input
                                        type="range"
                                        defaultValue={32}
                                        className="w-full accent-[#ff0066] bg-white/5 h-2 rounded-lg appearance-none cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="bg-black border-2 border-dashed border-white/5 rounded-3xl p-8 space-y-6">
                                <h3 className="text-white font-black text-xl tracking-tight">Checkout</h3>
                                <div className="space-y-4 font-mono">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-500 uppercase">Total Balance</span>
                                        <span className="text-[#22c55e] font-bold">1</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-gray-500 uppercase">Required for mint</span>
                                        <span className="text-[#22c55e] font-bold">1</span>
                                    </div>
                                    <div className="w-full h-px bg-white/5 my-2" />
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400 uppercase text-sm">Total:</span>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-6 bg-[#111] border border-white/5 rounded flex items-center justify-center">
                                                <div className="w-4 h-[2px] bg-[#ff0066]" />
                                            </div>
                                            <span className="text-white font-mono text-xs uppercase">HI</span>
                                            <span className="text-[#22c55e] font-bold">1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <button className="w-full bg-[#ff0066] hover:bg-[#d40055] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg shadow-[#ff0066]/20 transition-all active:scale-[0.98]">
                                    Step 1: Create Agent and Pay for Liquidity
                                </button>
                                <button className="w-full bg-white/5 hover:bg-white/10 text-gray-600 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all cursor-not-allowed">
                                    Step 2: Create liquidity pair
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Navigation Buttons */}
                <div className="mt-12 space-y-4">
                    {currentStep < 4 && (
                        <button
                            onClick={nextStep}
                            className="w-full bg-[#ff0066] hover:bg-[#d40055] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg shadow-[#ff0066]/20 transition-all active:scale-[0.98]"
                        >
                            Continue
                        </button>
                    )}
                    {currentStep > 1 && (
                        <button
                            onClick={prevStep}
                            className="w-full bg-transparent border border-[#ff0066] text-white hover:bg-[#ff0066]/5 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-[0.98]"
                        >
                            Go back
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
