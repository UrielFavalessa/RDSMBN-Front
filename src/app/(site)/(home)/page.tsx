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
            <button className="mt-3 w-56 cursor-pointer rounded-sm bg-[#1f6a2b] py-1 text-[30px] text-white transition-all duration-100 hover:scale-98 hover:bg-[#1a5a24]/85">
              SAIBA MAIS
            </button>
          </div>
        </div>
        <div className="flex w-full justify-center gap-16 bg-[linear-gradient(143.38deg,#7ED957_32.46%,#489428_46.09%,#9DD687_59.7%,#B8E2B0_87.9%,#00C670_101.92%)] py-15">
          <div className="relative cursor-pointer transition-all duration-200 hover:scale-105">
            <div className="relative w-[253px]">
              <Image
                src={"/Rectangle25.png"}
                alt=""
                width={258}
                height={258}
                className="absolute rounded-sm"
              />
              <p className="font-anton absolute top-63 left-3 text-center text-2xl font-bold text-white">
                Artesanato Barra Nova
              </p>
            </div>
            <Image
              src={"/project1.png"}
              alt="project1"
              className="rounded-sm"
              width={253}
              height={250}
            />
          </div>
          <div className="relative cursor-pointer transition-all duration-200 hover:scale-105">
            <div className="relative w-[253px]">
              <Image
                src={"/Rectangle25.png"}
                alt=""
                width={258}
                height={258}
                className="absolute rounded-sm"
              />
              <p className="font-anton absolute top-56 left-3 text-center text-2xl font-bold text-white">
                Dança cultural em Barra Nova
              </p>
            </div>
            <Image
              src={"/project2.png"}
              alt="project2"
              className="rounded-sm"
              width={253}
              height={250}
            />
          </div>
          <div className="relative cursor-pointer transition-all duration-200 hover:scale-105">
            <div className="relative w-[253px]">
              <Image
                src={"/Rectangle25.png"}
                alt=""
                width={258}
                height={258}
                className="absolute rounded-sm"
              />
              <p className="font-anton absolute top-60 left-3 text-center text-2xl font-bold text-white">
                Educação Ambiental
              </p>
            </div>
            <Image
              src={"/project3.png"}
              alt="project2"
              className="rounded-sm"
              width={253}
              height={250}
            />
          </div>
        </div>
      </div>
      <div className="font-anton pb-15">
        <h2 className="mb-10 text-center text-4xl">
          Últimas notícias
        </h2>
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex justify-center gap-10">
            <div className="flex max-w-118 flex-col items-center overflow-hidden rounded-lg bg-[#F2EFEA] break-words md:items-center lg:items-center xl:flex-row xl:items-start">
              <div
                className="relative flex-shrink-0"
                style={{ width: "214px", height: "313px" }}
              >
                <div
                  className="absolute top-0 left-0 z-10 h-full overflow-hidden bg-[#009B77]"
                  style={{
                    width: "214px",
                    borderRadius:
                      "4px 45% 35% 4px / 4px 50% 50% 4px",
                  }}
                ></div>
                <div
                  className="absolute top-0 left-0 z-20 h-full overflow-hidden bg-[#00B3C6]"
                  style={{
                    width: "211px",
                    borderRadius:
                      "4px 70% 38% 4px / 4px 50% 50% 4px",
                  }}
                ></div>

                <div
                  className="absolute top-0 left-0 z-30 h-full overflow-hidden bg-gray-200"
                  style={{
                    width: "210px",
                    borderRadius:
                      "4px 45% 41% 4px / 4px 50% 50% 4px",
                  }}
                >
                  <img
                    src={"/noticias46.png"}
                    alt="Capa"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center p-4 md:items-center xl:items-start">
                <h4 className="mb-2 text-left text-xl font-extrabold text-[#005B46]">
                  Melhores passeios de Barra Nova
                </h4>
                <p className="font-inter line-clamp-12 text-sm text-[#005B46]">
                  A Reserva de Desenvolvimento de Barra nova
                  separou 10 destinos para os turistas
                  aproveitarem
                </p>
                <div className="flex items-center justify-center py-10 pr-4">
                  <button className="flex w-auto cursor-pointer rounded-sm bg-[#00A8E8] px-4 py-2 font-bold text-white hover:bg-blue-700">
                    LER MATÉRIA
                  </button>
                </div>
              </div>
            </div>
            <div className="flex max-w-118 items-center overflow-hidden rounded-lg bg-[#F2EFEA] break-words md:items-center lg:items-center xl:items-start">
              <div
                className="relative flex-shrink-0"
                style={{ width: "214px", height: "313px" }}
              >
                <div
                  className="absolute top-0 left-0 z-10 h-full overflow-hidden bg-[#009B77]"
                  style={{
                    width: "214px",
                    borderRadius:
                      "4px 45% 35% 4px / 4px 50% 50% 4px",
                  }}
                ></div>
                <div
                  className="absolute top-0 left-0 z-20 h-full overflow-hidden bg-[#00B3C6]"
                  style={{
                    width: "211px",
                    borderRadius:
                      "4px 70% 38% 4px / 4px 50% 50% 4px",
                  }}
                ></div>

                <div
                  className="absolute top-0 left-0 z-30 h-full overflow-hidden bg-gray-200"
                  style={{
                    width: "210px",
                    borderRadius:
                      "4px 45% 41% 4px / 4px 50% 50% 4px",
                  }}
                >
                  <img
                    src={"/noticia53.png"}
                    alt="Capa"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center p-4 md:items-center xl:items-start">
                <h4 className="mb-2 text-left text-xl font-extrabold text-[#005B46]">
                  Praia Barra Nova em São Mateus
                </h4>
                <p className="font-inter line-clamp-12 text-sm text-[#005B46]">
                  Confira tudo sobre a praia que se
                  transformou em um refúgio para aqueles que
                  querem um passeio tranquilo
                </p>
                <div className="flex items-center justify-center py-10 pr-4">
                  <button className="flex w-auto cursor-pointer rounded-sm bg-[#00A8E8] px-4 py-2 font-bold text-white hover:bg-blue-700">
                    LER MATÉRIA
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="mt-3 w-56 cursor-pointer rounded-sm bg-[#1f6a2b] py-1 text-[26px] text-white transition-all duration-100 hover:scale-98 hover:bg-[#1a5a24]/85">
            SAIBA MAIS
          </button>
        </div>
        <div>
          <h2 className="mb-10 text-center text-4xl mt-10">
            Conheça nossa RDSM de Barra Nova
          </h2>
          <Image src={'/Rectangle109.png'} className="mx-auto" alt="" width={1012} height={532}/>
        </div>
      </div>
    </>
  );
}
