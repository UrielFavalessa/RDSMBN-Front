export default function AboutUs() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="font-anton mt-20 mb-20 text-3xl text-[#002E51]">
          Quem Somos
        </h1>
      </div>

      <div className="gap-4 lg:flex">
        <div className="flex">
          <div className="relative mb-20 h-[420px] w-[550px] flex-shrink-0">
            <img
              className="absolute top-0 left-0 z-10 h-[417px] w-auto"
              src="/SVG Frame 1.svg"
              alt=""
            />

            <img
              className="absolute left-[180px] z-0 w-[380px]"
              src="/about-us.svg"
              alt="Sobre nós"
            />
          </div>
        </div>
        <div className="ml-5 flex max-w-[950px] flex-col gap-2">
          <h1 className="font-anton text-2xl text-[#002E51]">
            O que é uma Reserva de Desenvolvimento
            Sustentável?
          </h1>
          <p className="font-inter text-sm">
            A Reserva de Desenvolvimento Sustentável (RDS) é
            uma categoria de Unidade de Conservação de uso
            sustentável, criada para proteger áreas naturais
            que abrigam comunidades tradicionais. Nesses
            territórios, a vida e a cultura das populações
            estão ligadas a formas de uso dos recursos
            naturais construídas ao longo de gerações, com
            práticas adaptadas às condições ecológicas
            locais e fundamentais para a conservação da
            biodiversidade. De acordo com a Lei Federal nº
            9.985/2000 (SNUC), a RDS tem como objetivo
            preservar a natureza e, ao mesmo tempo,
            assegurar as condições necessárias para a
            continuidade e a melhoria dos modos de vida das
            comunidades tradicionais. Isso inclui promover a
            qualidade de vida, fortalecer a economia local e
            valorizar os conhecimentos e técnicas de manejo
            ambiental desenvolvidos historicamente por essas
            populações.
          </p>

          <h1 className="font-anton mt-8 text-2xl text-[#002E51]">
            O que é a Reserva de Desenvolvimento Sustentável
            de Barra Nova?
          </h1>
          <p className="font-inter text-sm">
            A Reserva de Desenvolvimento Sustentável de
            Barra Nova - RBSMBN foi criada pelo Decreto n°
            6908/2013 e possui área de 3.144,16 hectares,
            localizada no Município de São Mateus, Espírito
            Santo . Inserida no bioma Mata Atlântica, a
            unidade abriga importantes ecossistemas
            costeiros e estuarinos, desempenhando papel
            estratégico na conservação da biodiversidade e
            dos recursos naturais da região.
          </p>
          <button className="font-inter mt-10 mb-4 flex w-[170px] cursor-pointer rounded-sm bg-[#002E51] p-3 text-sm font-bold text-white">
            NOSSO CONSELHO
          </button>
        </div>
      </div>
    </>
  );
}
