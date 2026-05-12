"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="font-anton flex w-full flex-col items-center justify-center bg-[#3b7239] py-15">
        <Image
          src="image2.svg"
          alt="Description"
          width={200}
          height={200}
        />
        <div className="flex flex-col items-center justify-center p-4">
          <h2 className="text-4xl font-bold text-white">
            Confira nossa programação
          </h2>
          <div className="font-sm font-inter w-7/12 text-center text-sm text-white">
            Veja os eventos que acontecerão durante esse ano
            organizados pela Reserva de Desenvolvimento
            Sustentável de Barra Nova
          </div>
        </div>
        <button className="rounded bg-[#005f8f] px-4 py-2 font-bold text-white">
          PROGRAMAÇÃO
        </button>
      </div>
    </>
  );
}
