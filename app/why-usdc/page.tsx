import Image from "next/image";
import CircleLogo from "@public/circle-logo.svg";
import HeroLogo from "@public/USDC_Logo.svg";

export default function WhyUSDC() {
  return (
    <div className="bg-[#faf7ff] h-[90vh] flex">
      <div className="flex-1 flex">
        <div className="flex flex-col justify-center mx-28">
          <p className="font-extrabold text-[3.75rem] text-[#29233c] whitespace-nowrap">Why use $USDC?</p>
          <p className="text-[1.25rem] text-gray-500 ">Built for rapid, global payments and 24/7 financial markets, USDC is a regulated, digital currency that can always be redeemed 1:1 for US dollars.</p>
          <div className="flex items-center mt-3">
            <p className="text-[1.75rem] text-gray-500 whitespace-nowrap font-extralight">powered by</p>
            <a href="https://www.circle.com/" className="hover:cursor-pointer" target="_blank">
            <Image className="ml-1.5 mt-1" src={CircleLogo} alt="Circle Logo" width={116} height={120} objectFit="contain" />
            </a>
          </div>
          <div className="flex mt-6 gap-4">
            <button className="btn btn-active bg-[#363049] text-[1rem] rounded text-white hover:bg-white hover:text-black">Create Developer Account</button>
            <button className="btn btn-outline text-[1rem] rounded text-black hover:bg-[#363049] hover:text-white">Contact Sales</button>
          </div>
        </div>
        
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="pr-20 flex flex-col items-center justify-center">
        <Image src={HeroLogo} alt="Hero Logo" width={500} height={300} objectFit="contain" className="opacity-75" />
        </div>
      </div>
    </div>
  )
}