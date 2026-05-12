"use client";

import { useState } from "react";
import EventCard from "@/components/programacao/event-card";
import FilterMesDesktop from "@/components/programacao/filter-mes-desktop";
import FilterMesMobile from "@/components/programacao/filter-mes-mobile";
import MonthGroup from "@/components/programacao/month-group";
import Pagination from "@/components/programacao/pagination";

const MESES_ORDEM = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const EVENTOS_MOCKADOS = [
  {
    mes: "Janeiro",
    dia: 15,
    titulo: "Campeonato de Surf de Barra Nova",
    local: "Praia Barra Nova",
    horario: "08:00",
  },
  {
    mes: "Janeiro",
    dia: 28,
    titulo: "Show do Falamansa",
    local: "Praia Barra Nova",
    horario: "08:00",
  },
  {
    mes: "Fevereiro",
    dia: 15,
    titulo: "Campeonato de Surf de Barra Nova",
    local: "Praia Barra Nova",
    horario: "08:00",
  },
  {
    mes: "Fevereiro",
    dia: 28,
    titulo: "Show do Falamansa",
    local: "Praia Barra Nova",
    horario: "08:00",
  },
  {
    mes: "Março",
    dia: 15,
    titulo: "Campeonato de Surf de Barra Nova",
    local: "Praia Barra Nova",
    horario: "08:00",
  },
  {
    mes: "Março",
    dia: 28,
    titulo: "Show do Falamansa",
    local: "Praia Barra Nova",
    horario: "08:00",
  },
  {
    mes: "Abril",
    dia: 15,
    titulo: "Campeonato de Surf de Barra Nova",
    local: "Praia Barra Nova",
    horario: "08:00",
  },
  {
    mes: "Abril",
    dia: 28,
    titulo: "Show do Falamansa",
    local: "Praia Barra Nova",
    horario: "08:00",
  },
];

const EVENTOS_POR_PAGINA = 4;

export default function Programacao() {
  const [mesesSelecionados, setMesesSelecionados] =
    useState<Set<string>>(() => new Set(MESES_ORDEM));
  const [mesMobile, setMesMobile] = useState<string>("all");
  const [paginaAtual, setPaginaAtual] = useState(1);

  const eventosFiltrados = EVENTOS_MOCKADOS.filter((ev) => {
    const desktopOk = mesesSelecionados.has(ev.mes);
    const mobileOk =
      mesMobile === "all" || ev.mes === mesMobile;
    return desktopOk && mobileOk;
  });

  const inicio = (paginaAtual - 1) * EVENTOS_POR_PAGINA;
  const fim = inicio + EVENTOS_POR_PAGINA;
  const eventosPaginados = eventosFiltrados.slice(
    inicio,
    fim
  );

  const gruposPaginados = MESES_ORDEM.filter((m) =>
    eventosPaginados.some((ev) => ev.mes === m)
  ).map((mes) => ({
    mes,
    eventos: eventosPaginados.filter(
      (ev) => ev.mes === mes
    ),
  }));

  const totalPaginas = Math.ceil(
    eventosFiltrados.length / EVENTOS_POR_PAGINA
  );

  const toggleMes = (mes: string) => {
    setMesesSelecionados((prev) => {
      const next = new Set(prev);
      if (next.has(mes)) next.delete(mes);
      else next.add(mes);
      return next;
    });
    setPaginaAtual(1);
  };

  const handleMesMobileChange = (mes: string) => {
    setMesMobile(mes);
    setPaginaAtual(1);
  };

  const handlePageChange = (pagina: number) => {
    setPaginaAtual(pagina);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 md:px-8 lg:px-10">
      <h1 className="font-anton text-dark-green text-center text-2xl font-bold md:text-3xl">
        Programação
      </h1>

      <div className="mt-8 flex flex-col gap-6 lg:flex-row">
        <div className="flex-1">
          <FilterMesMobile
            mesesDisponiveis={MESES_ORDEM}
            mesSelecionado={mesMobile}
            onChange={handleMesMobileChange}
          />

          <div className="border-border/60 bg-card rounded-lg border">
            <div className="p-4 md:p-6">
              {gruposPaginados.length === 0 ? (
                <p className="text-muted-foreground text-center">
                  Nenhum evento encontrado para o filtro
                  selecionado.
                </p>
              ) : (
                gruposPaginados.map((grupo) => (
                  <MonthGroup
                    key={grupo.mes}
                    mes={grupo.mes}
                  >
                    {grupo.eventos.map((ev) => (
                      <EventCard
                        key={`${grupo.mes}-${ev.dia}`}
                        dia={ev.dia}
                        titulo={ev.titulo}
                        local={ev.local}
                        horario={ev.horario}
                      />
                    ))}
                  </MonthGroup>
                ))
              )}
            </div>
          </div>

          {totalPaginas > 1 && (
            <Pagination
              paginaAtual={paginaAtual}
              totalPaginas={totalPaginas}
              onPageChange={handlePageChange}
            />
          )}
        </div>

        <FilterMesDesktop
          mesesDisponiveis={MESES_ORDEM}
          mesesSelecionados={mesesSelecionados}
          toggleMes={toggleMes}
        />
      </div>
    </main>
  );
}
