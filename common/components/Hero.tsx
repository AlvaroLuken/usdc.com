import HeroLogo from "@public/USDC_Logo.svg";
import CircleLogo from "@public/circle-logo.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-[#faf7ff] h-full flex my-16">
      <div className="flex-1 flex">
        <div className="flex flex-col justify-center mx-28">
          <p className="font-extrabold text-[4.25rem] text-[#29233c] whitespace-nowrap">USD Coin</p>
          <p className="text-[1.75rem] text-gray-500 w-[472px]">The most <b>trusted</b>, <b>safe</b> and <b>compliant</b> digital dollar.</p>
          <div className="flex items-center mt-3">
          <p className="text-[1.75rem] text-gray-500 whitespace-nowrap font-extralight">powered by</p>
          <a href="https://www.circle.com/" className="hover:cursor-pointer" target="_blank">
          <Image className="ml-1.5 mt-1" src={CircleLogo} alt="Circle Logo" width={116} height={120} objectFit="contain" />
          </a>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="pr-20 flex flex-col items-center justify-center">
        <Image src={HeroLogo} alt="Hero Logo" width={400} height={300} objectFit="contain" className="opacity-75" />
        </div>
      </div>
    </div>
  )
}