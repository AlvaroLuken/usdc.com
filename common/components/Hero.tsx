import HeroLogo from "@public/USDC_Logo.svg";
import CircleLogo from "@public/circle-logo.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-[rgb(250,247,255)] flex mt-12 md:mt-20">
      <div className="flex-1 flex">
        <div className="flex flex-col justify-center mx-4 md:mx-28 items-center md:items-start">
          <p className="font-extrabold text-[4.25rem] text-[#29233c] whitespace-nowrap text-center">USD Coin</p>
          <p className="text-[1.55rem] text-gray-500 text-center md:text-left">The most <b>regulated</b> and <b>fully-reserved</b> digital dollar.</p>
          <div className="flex items-center mt-3">
            <p className="text-[1.75rem] text-gray-500 whitespace-nowrap font-extralight">powered by</p>
            <a href="https://www.circle.com/" className="hover:cursor-pointer" target="_blank">
            <Image className="ml-1.5 mt-1" src={CircleLogo} alt="Circle Logo" width={116} height={120} objectFit="contain" />
            </a>
          </div>
          <div className="flex flex-col md:flex-row mt-6 gap-4 w-[80%] md:w-full">
            <button className="btn btn-active bg-[#363049] text-[1rem] rounded text-white hover:bg-white hover:text-black">Create Developer Account</button>
            <button className="btn btn-outline text-[1rem] rounded text-black hover:bg-[#363049] hover:text-white">Contact Sales</button>
          </div>
        </div>
        
      </div>
      <div className="flex-1 flex-col justify-center items-center md:flex hidden">
        <div className="pr-36 flex flex-col items-center justify-center">
        <Image src={HeroLogo} alt="Hero Logo" width={500} height={300} objectFit="contain" className="opacity-84" />
        </div>
      </div>
    </div>
  )
}