"use client"

import { Playlist } from "./playlist";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import  { faPlay, faPause, faEllipsis, faHeart, faPlus, faRepeat, faShare  } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const PlaylistPlace = ({ playlist }: { playlist: Playlist }) => {
  const [tocar, setTocar] = useState(false);
  const [divVisivel, setDivVisivel] = useState(false);
  const refDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickFora = (event: MouseEvent) => {
      if (refDiv.current && !refDiv.current.contains(event.target as Node)) {
        setDivVisivel(false);
      }
    };

    document.addEventListener('mousedown', handleClickFora);

    return () => {
      document.removeEventListener('mousedown', handleClickFora);
    };
  }, []);

    return (
        <div className=" group/main w-full h-auto flex flex-row justify-between items-center hover:bg-gray-800 py-2 px-3 overflow-hidden cursor-default rounded-lg">
            <div className="flex flex-row gap-3">
                <p className="w-6 h-auto bg-blackd flex items-center justify-center text-lg text-white font-semibold ">{playlist.id}</p>
                <div className="group/img flex items-center justify-center text-white size-12 relative overflow-hidden rounded-lg">
                  {tocar ? (
                    <button onClick={() => setTocar(false)} className="size-full flex items-center justify-center z-30">
                    <FontAwesomeIcon icon={faPause} className="flex z-30 size-8 text- group-hover:size-9"/>
                  </button>
                  ):(
                    <button onClick={() => setTocar(true)} className="hidden size-full group-hover/img:flex items-center justify-center z-30">
                    <FontAwesomeIcon icon={faPlay} className="flex z-30 size-8 text- group-hover:size-9"/>
                  </button>
                  )}
                  <Image src={playlist.image} fill alt="" className="group-hover:bg-transparent/60"/>
                </div>

                <div className="w-24 sm:w-48 sm:text-sm sm:truncate overflow-hidden text-nowrap h-auto flex flex-col items-start text-white">
                    <a href="#" className="hover:underline">{playlist.name}</a>
                    <a href="#" className="hover:underline">{playlist.artist}</a>
                </div>
            </div>
            <div className="hidden xs:block w-36 h-auto overflow-hidden text-white text-nowrap truncate ">
                <a href="#" className="w-full  h-auto text-sm hover:underline">{playlist.name}</a>
            </div>
            <div className="hidden md:block ">
                <p className="w-24 h-auto text-sm text-white text-nowrap truncate">00/00/000</p>
            </div>
            <div className="group flex flex-row gap-2 sm:gap-9 items-center">
                <p className="text-white">3:00</p>
                {divVisivel ? (
                  <div className="flex items-center justify-center text-3xl size-9 cursor-pointer p-1 rounded-full bg-red-500  text-white font-semibold mr-4">
                  <FontAwesomeIcon className="w-full h-auto " icon={faEllipsis}/>
                </div>
                ): (
                  <button onClick={() => setDivVisivel(true)} className="flex items-center justify-center text-3xl size-9  p-1 rounded-full hover:bg-red-500  text-white font-semibold mr-4">
                  <FontAwesomeIcon className="w-full h-auto " icon={faEllipsis}/>
                </button>
                )}
                {divVisivel && (
                  <div ref={refDiv}  className="flex flex-col items-start justify-center z-50 w-52 h-auto border border-gray-600 bg-gray-800 shadow-[0px_-1px_7px_0px_#030712] absolute right-28 bottom-24 rounded-lg overflow-hidden">
                    <ul className="w-full h-auto">
                      <li className="w-full h-auto text-white hover:bg-red-500 hover:text-white"><button className="w-full h-auto flex flex-row items-center gap-3 p-4"><div className="size-4"><FontAwesomeIcon icon={faHeart} /></div><p>Favorito</p></button></li>
                      <li className="w-full h-auto text-white hover:bg-red-500 hover:text-white"><button className="w-full h-auto flex flex-row items-center gap-3 p-4"><div className="size-4"><FontAwesomeIcon icon={faPlus} /></div><p>Adicionar à fila</p></button></li>
                      <li className="w-full h-auto text-white hover:bg-red-500 hover:text-white"><button className="w-full h-auto flex flex-row items-center gap-3 p-4"><div className="size-4"><FontAwesomeIcon icon={faRepeat} /></div><p>Repetir</p></button></li>
                      <li className="w-full h-auto text-white hover:bg-red-500 hover:text-white"><button className="w-full h-auto flex flex-row items-center gap-3 p-4"><div className="size-4"><FontAwesomeIcon icon={faShare} /></div><p>Compartilhar</p></button></li>
                    </ul>
                  </div>
                )}
                
            </div>

        </div>
    )
    
}

export const playlist: Playlist[] = [
    {
        id: 1,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczO6gQcOLLGqe3einVpLorel6vQkjkieBEodQFrkxc4lugguqOsosxbV8lsTAzNp492isZaLJWFHls-6VOmq5L1OXy5_vJNh5B0lsLOf-TOlCFmSEE4Ns-IbYYE2g9-ha7GfLoNnbDWtIFMkK4_9lLHtIA=w616-h616-s-no-gm?authuser=0',
        name: 'Como Ela Vai',
        artist: 'Tati',
        style: '',
      },
    {
        id: 2,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczNNI6rY-LdN_gRYqZrNWD1dGD_7ya2DTvJfNAfDwKwHGiSyU0Fij82LdoQnq-sKMxzTFC8uL1TQHwGJI6h9rXtzs453C-fJsKvRUPiTeNVHN2sbyxY-0jcYQr0K9PZA3te3GCz3CqOWXH40X0dwFH0n1g=w617-h617-s-no-gm?authuser=0',
        name: 'Tocaia',
        artist: 'Carlos Vante',
        style: '',
      },
    {
        id: 3,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPQCbqpAMKMJADjNMTUc9_dFuRAEFuTEF9dKvAOJ-Gvk-mno8XkE0_l8If8gldcL7MKFaQTbUOO0cjAooSj0Ih-vD1onxE6CJOmbRm9YtjjuifNijh5nvp-dk9I0EIsNFfkvjl8xkYuM99hEjex_wbHSQ=w617-h617-s-no-gm?authuser=0',
        name: 'Four Days',
        artist: 'John River',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 hidden sm:flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
    {
        id: 4,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMN9uT8M5TcHYi-fUzRbNIhMT8j7Q8JrL5OmV9WAAEDjCQagIQhQoQrTRHrPLErlesUswyqUP1XpWRmFPjL1jBr6_85YKQA2aI80MnWf-8XD5Mt0CqqP-yyY3scou9JkuI8z3lYdUxcOeW5CW32YZy1Pw=w617-h617-s-no-gm?authuser=0',
        name: 'Sinta O Vento',
        artist: 'Fernada Lima',
        style: 'card min-w-[20%] mi-h-[270px] max-h-[285px] mb-8 flex  flex-col items-center justify-start hover:bg-gray-900 hover:drop-shadow-md p-2 rounded-lg',
      },
    {
        id: 5,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczMQQGJMXl6JEQqBHpaigtgxkElWXVr08-Z6DHNGhWWA0dBzz7dMB2NiowX8568NHvI8syZGViq4WDB9oMIjusBFvsNQij8Ch-Z_1SxeR47Vs6p4QJn1hzeyTN3kM-tDEEMMJ-_eTQLXZ-Q39HjNm5QLiA=w616-h616-s-no-gm?authuser=0',
        name: 'Dango',
        artist: 'wander Peixoto',
        style: '',
      },
    {
        id: 6,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczOJNzPVMl4GwWiB03e7LiNZlHOlhJlLFmuz9DpEImpiI4SjWdDoTqQO1ciiy6wenpdnMA2-C0TjZArphpYYwzrnhrqd8xyB7bcL7TpYP4mpHWH94Et3K_GpN4JKuONqQafsuUSH-_NmGABalKHSvw0lbA=w616-h616-s-no-gm?authuser=0',
        name: 'Confuso',
        artist: 'Wander Peixoto',
        style: '',
      },
    {
        id: 7,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPjrv_UWqeDNfCdewXBj8zq0W6i513KwGoVDNNnW2b8kj4RAG5YUfvzmRBpPz9hMEyFyPwWTuxDsWdg6RMIMYNHeENCmCso1M7ZcTp2TjFDU0_d_wf9GuUFiDKPggGkJIYSYAsGvP8LU8NQmeNA81kXrg=w617-h617-s-no-gm?authuser=0',
        name: 'Montagem 101%',
        artist: 'Zabo',
        style: '',
      },
    {
        id: 8,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczM1BB8egftZyVHR2HyVlgvBGyXvZEzw_rFYwMtYACxZcgvUp1jePqyMlSoonk_207QaneVid0_esi_AvxFi24ERamx0MCV7rLRTrrkiyDFg6UU4rI4DqISjcsF1Iltbsw81RCAbqHTsqm2UzaLt27uoFQ=w617-h617-s-no-gm?authuser=0',
        name: 'Consequência',
        artist: 'Carlos Vante',
        style: '',
      },
    {
        id: 9,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczN0cx1qNkHqWi7qPw9ETLRQKfAEocUlTkMlNF2Arzk06wQ8tLoOfe5yNeEXqcYPuFR70AkyhBz77ftj2BZ0XlEyU5wPr12EFdNh1_-fBL7T6aix_ewg_niLw8SVw8hn9ggu1ytLYfqCSdbRg8A0siYoyg=w617-h617-s-no-gm?authuser=0',
        name: 'Abertura De "will Return"',
        artist: 'Hiroshi',
        style: '',
      },
    {
        id: 10,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczO57GDIRefyVdSzGXrjlBIe1xrTl1j7TUp6lVHx95f7-xyDWOFywQgh0YqrROI_X_g17vD43To9spX_AnpxRtqD0WL9AV_pVJbmnmmV7D66FoKYp22vJoGTpO4XPR1Wooigq3fP3rKOaG6vps-7fGTcTA=w617-h617-s-no-gm?authuser=0',
        name: 'Óbvio',
        artist: 'IO',
        style: '',
      },

    {
        id: 11,
        image: 'https://lh3.googleusercontent.com/pw/AP1GczPXECiDpte1kWjnCCOW0RbeQCZ1TNmRjgSqoSYwRimB-wjz5OKjvU6hmas2Ke4nwSEusXToVtQdKyDgCS6EfHpf3GL9DnNZFlLU1d91KSg0hYHcGEw5VBO2WZfFJm0RYqEq-emwwjYvoItwDZ1vTPR9Yw=w617-h617-s-no-gm?authuser=0',
        name: 'A Coisa',
        artist: 'Foton',
        style: '',
      },
]