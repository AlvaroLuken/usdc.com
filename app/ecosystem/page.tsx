import Image from "next/image";
import USDCFunkyLogo from "@public/usdc_funky_logo.svg";

export default function Ecosystem() {
    return (
        <div className="flex flex-col text-[#29233c] h-[90vh] py-4 mx-24">
            <h1 className="text-[3.25rem] font-extrabold my-6">Circle&apos;s Ecosystem Offerings</h1>
            <div className="flex gap-8 h-full">
                <div className="card shadow-xl rounded-none rounded-xl">
                    <figure className="p-10 bg-[#1894E8] h-[240px]">
                        <div className="text-[3rem] text-white font-mono">Grants</div>
                    </figure>
                    <div className="bg-white card-body items-center text-center rounded-xl">
                        <h2 className="card-title font-extrabold">Grants</h2>
                        <p className="text-[1.25rem]">Excited for a developer challenge with rewards in USDC?</p>
                        <div className="card-actions">
                            <button className="btn btn-active text-white text-[1rem]">See Bounties</button>
                        </div>
                    </div>
                </div>
                <div className="card shadow-xl rounded-none rounded-xl">
                    <figure className="p-10 bg-[#8656EF] h-[240px]">
                        <div className="text-[3rem] text-white font-mono">Bounties</div>
                    </figure>
                    <div className="bg-white card-body items-center text-center">
                        <h2 className="card-title font-extrabold">Bounties</h2>
                        <p className="text-[1.25rem]">Excited for a developer challenge with rewards in USDC?</p>
                        <div className="card-actions">
                            <button className="btn btn-active text-white text-[1rem]">See Bounties</button>
                        </div>
                    </div>
                </div>
                <div className="card shadow-xl rounded-none rounded-xl">
                    <figure className="p-10 bg-[#26BC62] h-[240px]">
                        {/* <Image src={USDCFunkyLogo} alt="USDC Bounties" className="rounded-xl" /> */}
                        <div className="text-[3rem] text-white font-mono">Catalog</div>
                    </figure>
                    <div className="bg-white card-body items-center text-center">
                        <h2 className="card-title font-extrabold">Catalog</h2>
                        <p className="text-[1.25rem]">Excited for a developer challenge with rewards in USDC?</p>
                        <div className="card-actions">
                            <button className="btn btn-active text-white text-[1rem]">See Bounties</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}