import Image from "next/image";
import React from "react";
import { FiMapPin, FiInstagram } from "react-icons/fi";

const Footer: React.FC = () => (
  <footer className="w-full font-sans text-white">
    <div className="flex w-full flex-col items-center bg-[#005a51] p-2 px-4 md:h-90 md:flex-row md:justify-between md:p-0 md:pr-10">
      <div className="hidden h-full gap-8 md:flex">
        <Image
          src="/lateralFooter.png"
          alt="Logo"
          width={400}
          height={0}
          className="h-full w-full object-contain"
        />
      </div>
      {/* <div className="flex w-full items-center justify-center border-[#60c8a8] bg-[#005a51] object-contain md:hidden">
        <Image
          src="/logoBarraHorizontal.png"
          alt="Logo"
          width={4000}
          height={4000}
          className="object-cover"
        />
      </div> */}

      <div className="flex h-40 w-40 items-center justify-center border-[#60c8a8] bg-[#005a51]">
        <Image
          src="/logoBarraNova.png"
          alt="Logo da RDSMBN"
          width={196}
          height={194}
        />
      </div>
      <div className="hidden h-2/3 w-1 rounded-md border border-[#009B77] bg-[#009B77] md:flex"></div>
      <div className="my-4 flex h-2/3 w-1/2 rounded-md border border-[#009B77] bg-[#009B77] md:my-0 md:hidden"></div>
      <div className="flex h-full w-full flex-col items-center justify-center pt-6 md:w-1/2">
        <h2 className="mb-3 text-center text-2xl font-semibold md:text-xl">
          Reserva de Desenvolvimento Sustentável de Barra
          Nova
        </h2>
        <p className="mb-4 hidden max-w-2xl text-center text-sm md:flex md:text-base">
          A Reserva de Desenvolvimento Sustentável de Barra
          Nova - RDSMBN foi criada pelo Decreto nº 6908/2013
          e possui área de 3.144,16 hectares, localizada no
          Município de São Mateus, Espírito Santo. Inserida
          no bioma Mata Atlântica, a unidade abriga
          importantes ecossistemas costeiros e estuarinos,
          desempenhando papel estratégico na conservação da
          biodiversidade e dos recursos naturais da região.
        </p>

        <div className="my-4 flex flex-col text-sm md:my-0">
          <div className="flex items-start justify-start gap-2">
            <FiMapPin className="h-5 w-5 text-center text-[#00ffd6]" />
            <div className="w-full items-center text-center">
              Barra Nova - Guriri - ES-010 - Barra Nova, São
              Mateus - ES
            </div>
          </div>
          <div className="flex items-start justify-center gap-2">
            <div className="flex w-full flex-row items-center justify-center gap-1 pb-4 text-center">
              <FiInstagram className="h-5 w-5 text-[#00ffd6]" />

              <a
                href="https://www.instagram.com/prefeituradesaomateus.es/"
                className="underline hover:text-blue-700"
              >
                @RDSMbaranova
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-[#003d7a] py-3 text-center">
      <span className="text-base font-medium">
        Desenvolvido por{" "}
        <a
          href="https://saomateus.es.gov.br/secretaria/ciencia-tecnologia-inovacao-educacao-profissional-e-trabalho"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-blue-700"
        >
          Secretaria Municipal de Ciência, Tecnologia e
          Inovação.
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
