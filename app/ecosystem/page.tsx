import Image from "next/image";
import USDCFunkyLogo from "@public/usdc_funky_logo.svg";

export default function Ecosystem() {
    return (
        <div className="flex flex-col text-[#29233c] h-[90vh] mt-4 mx-24">
            <h1 className="text-[3.25rem] font-extrabold my-4 mb-6">Circle's Ecosystem Offerings</h1>
            <div className="flex gap-8">
            <div className="card text-[#29233c] shadow-xl rounded-none">
                <figure className="px-10 pt-10">
                    <Image src={USDCFunkyLogo} alt="USDC Grants" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center gap-4">
                    <h2 className="card-title text-[2rem] font-extrabold">The USDC Grants Program</h2>
                    <p>Up to 100k in USDC for early-stage startups.</p>
                    <div className="card-actions">
                        <button className="btn btn-active text-white">See Grants</button>
                    </div>
                </div>
            </div>
            <div className="card shadow-xl rounded-none">
                <figure className="px-10 pt-10">
                    <Image src={USDCFunkyLogo} alt="USDC Bounties" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                <h2 className="card-title text-[2rem] font-extrabold">Bounties</h2>
                    <p>Excited for a developer challenge with a potential reward in USDC?</p>
                    <div className="card-actions">
                        <button className="btn btn-active text-white">See Bounties</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}