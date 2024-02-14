"use client";
import Image from "next/image";
import USDCLogo from "@public/usdc_logo_on_white.svg";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const router = useRouter()

  return (
<div className="navbar py-3 gradient-gumdrop-frosting sticky">
  <div className="navbar-start ml-4 md:ml-24">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <Link href="/" className="hover:cursor-pointer">
        <Image src={USDCLogo} alt="logo" width={200} height={100} className="w-auto h-12" />
        </Link>
      </div>
    </div>
    <div tabIndex={0} role="button" className="hidden lg:flex">
    <Link href="/" className="hover:cursor-pointer">
      <Image src={USDCLogo} alt="logo" width={200} height={100} className="w-auto h-12" />
    </Link>
      </div>
  </div>
  <div className="navbar-center hidden lg:flex text-black text-base">
    <ul className="menu menu-horizontal px-1">
      <li onClick={() => router.push('/why-usdc/')}><Link href="/why-usdc/"><b>Why USDC?</b></Link></li>
      <li onClick={() => router.push('/ecosystem/')}><Link href="/ecosystem/"><b>Ecosystem</b></Link></li>
      <li>
        <details>
          <summary><b>Developers</b></summary>
          <ul className="p-2 bg-white">
            <li><a>Docs</a></li>
            <li><a><div className="whitespace-nowrap">Testnet Faucet</div></a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary><b>Circle</b></summary>
          <ul className="p-2 bg-white z-50">
            <li><a><div className="whitespace-nowrap">About Us</div></a></li>
            <li><a>Products</a></li>
            <li><a>Transparency</a></li>
            <li><a>Careers</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end mr-4 md:mr-24 gap-x-1.5">
    <button className="btn btn-ghost text-black">Sign In</button>
    <button className="btn btn-active bg-[#363049] rounded text-white hover:bg-white hover:text-black">SIGN UP</button>
  </div>
</div>
  )
}