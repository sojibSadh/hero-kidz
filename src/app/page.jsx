import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex  items-center justify-center bg-zinc-50 font-sans dark:bg-black ">
      <div className="w-[1400px] mx-auto">
        <Banner></Banner>
        <Products></Products>
      </div>
    </div>
  );
}


// hkadmin
//l0bRTOOTM7OO0sdo