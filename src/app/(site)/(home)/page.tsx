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
      <div className="bg-white py-15">
        <div className="gap-4 lg:flex">
          <div className="flex">
            <div className="relative mb-20 h-[420px] w-[550px] flex-shrink-0">
              <img
                className="absolute top-0 left-0 z-10 h-[440px] w-auto"
                src="/SVG Frame 1.svg"
                alt=""
              />

              <img
                className="absolute left-[180px] h-[440px] w-[380px]"
                src="/Rectangle24.svg"
                alt="Sobre nós"
              />
            </div>
          </div>
          <div className="font-anton ml-5 flex max-w-[950px] flex-col gap-2 text-4xl">
            <div>Quem somos</div>
            <h1 className="font-anton text-2xl text-[#002E51]">
              O que é uma Reserva de Desenvolvimento
              Sustentável?
            </h1>
            <p className="font-inter text-sm">
              A Reserva de Desenvolvimento Sustentável (RDS)
              é uma categoria de Unidade de Conservação de
              uso sustentável, criada para proteger áreas
              naturais que abrigam comunidades tradicionais.
              Nesses territórios, a vida e a cultura das
              populações estão ligadas a formas de uso dos
              recursos naturais construídas ao longo de
              gerações, com práticas adaptadas às condições
              ecológicas locais e fundamentais para a
              conservação da biodiversidade. De acordo com a
              Lei Federal nº 9.985/2000 (SNUC), a RDS tem
              como objetivo preservar a natureza e, ao mesmo
              tempo, assegurar as condições necessárias para
              a continuidade e a melhoria dos modos de vida
              das comunidades tradicionais. Isso inclui
              promover a qualidade de vida, fortalecer a
              economia local e valorizar os conhecimentos e
              técnicas de manejo ambiental desenvolvidos
              historicamente por essas populações.
            </p>

            <h1 className="font-anton mt-8 text-2xl text-[#002E51]">
              O que é a Reserva de Desenvolvimento
              Sustentável de Barra Nova?
            </h1>
            <p className="font-inter text-sm">
              A Reserva de Desenvolvimento Sustentável de
              Barra Nova - RBSMBN foi criada pelo Decreto n°
              6908/2013 e possui área de 3.144,16 hectares,
              localizada no Município de São Mateus,
              Espírito Santo . Inserida no bioma Mata
              Atlântica, a unidade abriga importantes
              ecossistemas costeiros e estuarinos,
              desempenhando papel estratégico na conservação
              da biodiversidade e dos recursos naturais da
              região.
            </p>
            <button className="bg-[#1f6a2b] text-white w-56 mt-3 text-[30px] py-1 cursor-pointer hover:bg-[#1a5a24]/85 rounded-sm transition-all duration-100 hover:scale-98">
              SAIBA MAIS
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
