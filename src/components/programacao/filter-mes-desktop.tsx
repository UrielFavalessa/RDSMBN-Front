"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type FilterMesDesktopProps = {
  mesesDisponiveis: string[];
  mesesSelecionados: Set<string>;
  toggleMes: (mes: string) => void;
};

export default function FilterMesDesktop({
  mesesDisponiveis,
  mesesSelecionados,
  toggleMes,
}: FilterMesDesktopProps) {
  return (
    <aside className="hidden w-60 shrink-0 md:block">
      <div className="border-border/60 bg-surface sticky top-[104px] rounded-lg border p-4">
        <h3 className="text-foreground mb-3 text-sm font-semibold">
          Mês:
        </h3>
        <ul className="flex flex-col gap-1">
          {mesesDisponiveis.map((mes) => {
            const isChecked = mesesSelecionados.has(mes);
            return (
              <li
                key={mes}
                className="hover:bg-muted/50 flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-sm transition-colors"
                onClick={() => toggleMes(mes)}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  readOnly
                  className={cn(
                    "border-input bg-card checked:bg-light-green focus-visible:ring-ring mr-1 size-4 cursor-pointer appearance-none rounded-sm border checked:text-white focus-visible:ring-1 focus-visible:outline-none",
                    isChecked
                      ? "checked:border-light-green"
                      : "border-input"
                  )}
                />
                <span className="text-muted-foreground">
                  {mes}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
