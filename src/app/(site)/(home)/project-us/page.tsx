"use client";

import CardProjects from "@/components/cardProject";
import { IoSearchOutline } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <div className="mt-20 mb-40 flex h-screen flex-col items-center justify-center md:mt-0 md:mb-0">
        <h1 className="font-anton text-doc-title lg:font-montserrat mb-5 pt-24 text-center text-2xl font-normal md:pt-0 lg:text-4xl lg:font-extrabold">
          Projetos
        </h1>
        <div className="flex w-full max-w-75 flex-col items-center gap-2 lg:max-w-xl lg:flex-row lg:gap-4">
          <span className="font-montserrat shrink-0 text-xl font-semibold text-[#004E89]">
            Pesquise pela palavra-chave:
          </span>
          <form
            action="/news"
            method="GET"
            className="font-inter flex w-full flex-1 items-center gap-3 border-b border-[#004E894D] font-normal text-[#004E894D]"
          >
            <IoSearchOutline size={24} className="" />
            <input
              type="text"
              name="search"
              defaultValue={""}
              placeholder="turismo em Barra Nova"
              className="w-full text-base outline-none"
            />
          </form>
        </div>
        <div className="my-10 w-full overflow-auto" />
        <CardProjects
          title="Artesanato Barra Nova"
          description="O projeto Artesanato Barra Nova é uma iniciativa comunitária que valoriza a cultura local por meio da produção artesanal. Criado com o objetivo de fortalecer a economia da região, o projeto reúne artesãos que produzem peças feitas à mão, utilizando materiais naturais e técnicas tradicionais.
Entre os produtos desenvolvidos estão artigos de decoração, acessórios, peças em fibras naturais e lembranças típicas da região. Além de incentivar a geração de renda, o projeto promove oficinas, capacitações e exposições, estimulando a criatividade e preservando a identidade cultural de Barra Nova."
          thumb="/image.png"
          image="/imagePequena.png"
        />
      </div>
    </>
  );
}
