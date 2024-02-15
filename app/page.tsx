import Image from "next/image";
import Hero from "@common/components/Hero";
import Navbar from "@common/components/Navbar";

export default function Home() {
  return (
    <div className="flex w-full flex-col bg-[#faf7ff] h-[90vh]">
    <Hero />
    </div>
  );
}
