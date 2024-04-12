"use client"

import Wallet from "./section/Wallet";


export default function Home() {
 

  return (
    <main className="flex flex-col items-center justify-center h-[100vh] gap-16 px-4 md:px-10 max-w-[1280px]">
      <Wallet/>
    </main>
  );
}


