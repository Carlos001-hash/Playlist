"use client"

import Image from "next/image";
import { PlaylistPlace, playlist } from "./data/playlistPlaces";



export default function PlayList() {
  return (
    <div onClick={() => {PlaylistPlace}} className=" flex flex-col w-full h-screen bg-black sm:p-1.5">
      <section className="w-full h-52">
        <div className=" relative w-full h-auto flex items-center justify-center bg-gray-950 rounded-lg sm:px-7 py-1.5 ">
          <div className="relative group flex items-center justify-center w-full h-48 bg-gray-900  overflow-hidden boder-2 rounded-lg border-red-500 ">
            <Image src="https://lh3.googleusercontent.com/pw/AP1GczO6gQcOLLGqe3einVpLorel6vQkjkieBEodQFrkxc4lugguqOsosxbV8lsTAzNp492isZaLJWFHls-6VOmq5L1OXy5_vJNh5B0lsLOf-TOlCFmSEE4Ns-IbYYE2g9-ha7GfLoNnbDWtIFMkK4_9lLHtIA=w617-h617-s-no-gm?authuser=0" 
            width={4000}
            height={204}
            alt=""
            className="rounded-lg md:mt-[500px]"/>
            <h1 className="block group-hover:text-white transition  delay-150 duration-1000 ease-in-out w-full h-full truncate absolute md:left-20 md:-bottom-2 left-0 -bottom-5  text-[100px] text-transparent font-semibold">Noite de Bossa</h1>
            <h3 className="block group-hover:text-white transition  delay-700 duration-500 ease-out w-52 h-auto absolute top-1 md:right-72 right-20 text-5xl bg-red-60 text-nowrap text-transparent font-semibold decoration-none">Tati</h3>
          </div>
          <div className="absolute -bottom-10 sm:-bottom-16  size-28 sm:size-36 rounded-full bg-gray-900  border-8 border-black overflow-hidden">
            <Image src="https://lh3.googleusercontent.com/pw/AP1GczOluCgbT5gNZVdEZduyc-SM2yhCoKP0dsK_jpuGFMPcFpOWfcY42Z7g4r_gU-JeTh3NW4LbVy_mI5vF3CLotjslNg3VEdbknmjDrMD0FpAGaggT_MYXWoYvAWPwcrqwLSzid9bOMHEhji7aKJJo2ndZQA=w617-h617-s-no-gm?authuser=0" 
            fill
            alt="eeew" />
          </div>
        </div>
      </section>
      <section className="flex w-full h-full pt-2">
        <div className="w-full h-[100px] min-h-full bg-gray-950
         rounded-lg sm:p-7">
          <div className="w-full h-full overflow-auto bg-gray-900 rounded-lg sm:p-1.5">
            {playlist.map((play) => (
              <PlaylistPlace key={play.id} playlist={play} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}