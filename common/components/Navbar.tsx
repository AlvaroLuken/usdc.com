"use client";
import Link from "next/link";

import { useAuth } from "@common/auth/AuthProvider";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import USDCLogo from "@public/usdc_logo_on_white.svg";
import Image from "next/image";
import userbase from "userbase-js";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [, setError] = useState<string | null>(null);
  const router = useRouter();

  function handleLogout() {
    try {
      userbase
        .signOut()
        .then(() => {
          // user logged out
          console.log("User logged out!");
          logout();
          router.push("/");
        })
        .catch((e: any) => console.error(e));
    } catch (error: any) {
      setError(error.message || "An unexpected error occurred."); // Update the error state
    }
  }

  return (
    <div className="navbar gradient-gumdrop-frosting sticky font-mono">
      <div className="navbar-start ml-0 md:ml-24">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#29233b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          {/* MOBILE NAV */}
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-[#29233b]">
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
        <Link href="/" className="hover:cursor-pointer hidden md:flex">
          <Image src={USDCLogo} alt="Nav Logo" width={200} height={100} className="w-auto h-12" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {/* DESKTOP NAV */}
        <ul className="menu menu-horizontal px-1 text-[#29233b] text-[1rem]">
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
      <div className="navbar-end">
        {user?.isLoggedIn ?
          <div className="dropdown dropdown-hover dropdown-bottom dropdown-end hover:cursor-pointer">
            <div className="avatar placeholder mt-1">
              <div className="bg-neutral text-neutral-content rounded-full w-14">
                {/* <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                <span className="text-3xl">{user.username}</span>
              </div>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>My Profile</a></li>
              <li onClick={handleLogout}><a>Log Out</a></li>
            </ul>
          </div>
          :
          <div className="navbar-end mr-4 md:mr-24 flex gap-2">
            <button onClick={() => router.push('/login/')} className="btn btn-ghost text-black text-[1rem]">Login</button>
            <button onClick={() => router.push('/sign-up/')} className="btn btn-active bg-[#363049] rounded text-white hover:bg-white hover:text-black">SIGN UP</button>
          </div>}
      </div>
    </div>
  );
}