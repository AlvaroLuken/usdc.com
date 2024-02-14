import HeroLogo from "@public/USDC_Logo.svg";
import CircleLogo from "@public/circle-logo.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-[#faf7ff] h-[90vh] flex">
      <div className="flex-1 flex">
        <div className="flex flex-col justify-center mx-12 md:mx-28">
          <p className="font-extrabold text-[4.25rem] text-[#29233c] whitespace-nowrap">USD Coin</p>
          <p className="text-[1.55rem] text-gray-500 w-[492px]">The most <b>regulated</b> and <b>fully-reserved</b> digital dollar.</p>
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
      <div className="flex-1 flex-col justify-center items-center flex">
        <div className="pr-20 flex flex-col items-center justify-center">
        <Image src={HeroLogo} alt="Hero Logo" width={500} height={300} objectFit="contain" className="opacity-75" />
        </div>
      </div>
    </div>
  )
}