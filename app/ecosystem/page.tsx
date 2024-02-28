"use client";
import Image from "next/image";
import USDCFunkyLogo from "@public/usdc_funky_logo.svg";
import HeroLogo from "@public/USDC_Logo.svg";
import { useRef } from 'react';


export default function Ecosystem() {

    function handleScroll(sectionId: string) {
        var element = document.getElementById(sectionId);

        const executeScroll = () => element?.scrollIntoView({ behavior: 'smooth' })
        executeScroll();
    }

    return (
        <div className="flex flex-col text-[#29233c] h-[90vh] py-4 mx-24">
            <h1 className="text-[3.25rem] font-extrabold my-6 mb-8">Explore the Circle Ecosystem</h1>
            <div className="flex gap-8 h-full flex-1 height-[100%]">
                <div className="card shadow-xl rounded-none rounded-xl flex-1">
                    <figure className="p-10 bg-[#1894E8] h-[240px]">
                        <div className="text-[3rem] text-white font-mono">Grants</div>
                    </figure>
                    <div className="bg-white card-body items-center text-center rounded-xl">
                        <h2 className="card-title font-extrabold">Grants</h2>
                        <p className="text-[1.25rem]">The USDC Grant Program funds early-stage startups innovating on USDC.</p>
                        <div className="card-actions">
                            <button onClick={() => handleScroll("grants-section")} className="mt-2 btn btn-active text-white text-[1rem]">See Grants</button>
                        </div>
                    </div>
                </div>
                <div className="card shadow-xl rounded-none rounded-xl flex-1">
                    <figure className="p-10 bg-[#8656EF] h-[240px]">
                        <div className="text-[3rem] text-white font-mono">Bounties</div>
                    </figure>
                    <div className="bg-white card-body items-center text-center rounded-xl">
                        <h2 className="card-title font-extrabold">Bounties</h2>
                        <p className="text-[1.25rem]">Excited for a developer challenge with rewards in USDC?</p>
                        <div className="card-actions">
                            <button onClick={() => handleScroll("bounty-section")} className="mt-2 btn btn-active text-white text-[1rem]">See Bounties</button>
                        </div>
                    </div>
                </div>
                <div className="card shadow-xl rounded-none rounded-xl flex-1">
                    <figure className="p-10 bg-[#26BC62] h-[240px]">
                        <div className="text-[3rem] text-white font-mono">Catalog</div>
                    </figure>
                    <div className="bg-white card-body items-center text-center rounded-xl">
                        <h2 className="card-title font-extrabold">Catalog</h2>
                        <p className="text-[1.25rem]">Excited for a developer challenge with rewards in USDC?</p>
                        <div className="card-actions">
                            <button onClick={() => handleScroll("catalog-section")} className="mt-2 btn btn-active text-white text-[1rem]">See Catalog</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="grants-section" className="mt-10">
                <div>
                    <div className="text-[5.25rem] font-extrabold mt-6 text-[#1894E8]">The USDC Grant Program</div>
                    <div className="mt-[-12px] text-[2.5rem] font-extrabold text-gray-500">Grants for early-stage startups innovating on USDC</div>
                    <div className="flex my-12">
                        <div className="flex flex-1 flex-col mt-4">
                            <div className="text-[1.5rem] font-bold text-gray-700 mb-2 text-center font-extrabold">Benefits for Grant Recipients</div>
                            <ul>
                                <li className="text-[1.55rem] text-gray-700 text-center md:text-left">&#8226; Up to $100,000 awarded in USDC</li>
                                <li className="text-[1.55rem] text-gray-700 text-center md:text-left">&#8226; Operational, technical and marketing support from Circle</li>
                                <li className="text-[1.55rem] text-gray-700 text-center md:text-left">&#8226; 1-on-1 mentorship</li>
                                <li className="text-[1.55rem] text-gray-700 text-center md:text-left">&#8226; $10k in Circle Web3 Services credits</li>
                            </ul>
                        </div>
                        <div className="flex flex-1 flex-col mt-4">
                            <div className="text-[1.5rem] font-bold text-gray-700 mb-2 text-center font-extrabold">Who We Look For</div>
                            <ul>
                                <li className="text-[1.55rem] text-gray-700 text-center md:text-left">&#8226; Small, dedicated teams; full-time & passionate founders</li>
                                <li className="text-[1.55rem] text-gray-700 text-center md:text-left">&#8226; MVP, in beta or launched to production</li>
                                <li className="text-[1.55rem] text-gray-700 text-center md:text-left">&#8226; Relevant, real world use cases are addressed by your startup</li>
                                <li className="text-[1.55rem] text-gray-700 text-center md:text-left">&#8226; Want to work closely with Circle</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mb-12">
                    <div className="flex flex-col">
                        <div className="flex items-center justify-center  text-[2.5rem] text-gray-500 font-extrabold">Is Your Startup a Fit? ⬇️</div>
                        <div className="mt-12 flex gap-4">
                            <a href="https://circle.deform.cc/usdc-grant-program" target="_blank" className="flex flex-1">
                                <button className="btn btn-active bg-[#1894E8] flex h-[64px] text-[1.45rem] rounded text-white hover:bg-white hover:text-black flex-1">
                                    <p className="flex items-center justify-center">🤝 Apply to USDC Grant Program</p>
                                </button>
                            </a>
                            <button className="btn btn-active bg-[#8656EF] flex h-[64px] text-[1.5rem] rounded text-white hover:bg-white hover:text-black flex-1">
                                <p className="flex items-center justify-center">🤔 View Program FAQs</p>
                            </button>
                            <a href="https://t.me/+buLAYvFaWlk3YWNh" target="_blank" className="flex flex-1">
                                <button className="btn btn-active bg-[#26BC62] flex h-[64px] text-[1.5rem] rounded text-white hover:bg-white hover:text-black flex-1">
                                    <p className="flex items-center justify-center">👀 Join Telegram Group</p>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="bounty-section" className="mt-24 mb-[1000px]">
                    <p className="text-[4rem]">Bounty Board Component</p>
                </div>
                <div id="catalog-section" className="mt-24 mb-[1000px]">
                    <p className="text-[4rem]">Ecosystem Catalog Component</p>
                </div>
            </div>
        </div>
    )
}