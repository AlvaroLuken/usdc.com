"use client";
import Image from "next/image";
import USDCFunkyLogo from "@public/usdc_funky_logo.svg";
import { useState } from "react";

export default function TokenBridge() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="flex mt-24 justify-center h-screen bg-[#faf7ff]">
            <div className="w-full max-w-sm">
                <form
                    className="bg-[#131417] rounded-xl border-2 px-8 pt-6 pb-8 mb-24 font-mono"
                >

                    <div className="mb-4 text-xl p-4 bg-white rounded-xl bg-[#232429]">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-md font-medium">From</span>
                            </div>
                            <select className="select select-bordered">
                                <option disabled selected>Pick a source chain</option>
                                <option>Sepolia</option>
                                <option>Arbitrum Sepolia</option>
                                <option>Base Sepolia Testnet</option>
                            </select>
                        </label>
                    </div>
                    <div className="mb-4 text-xl p-4 bg-white rounded-xl bg-[#232429]">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text text-md font-medium">To</span>
                            </div>
                            <select className="select select-bordered">
                                <option disabled selected>Pick a destination chain</option>
                                <option>Sepolia</option>
                                <option>Arbitrum Sepolia</option>
                                <option>Base Sepolia Testnet</option>
                            </select>
                        </label>
                    </div>
                    {error && <p className="text-red-500 mb-4">{error}</p>}{" "}
                    <div className="flex items-center justify-between">
                        <div
                            className="link link-secondary cursor-pointer"
                        >
                            No account yet?
                        </div>
                        <button className="btn btn-active text-white">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}