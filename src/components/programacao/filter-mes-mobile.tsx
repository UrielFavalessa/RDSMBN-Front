"use client";

import { Label } from "@/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";

type FilterMesMobileProps = {
  mesesDisponiveis: string[];
  mesSelecionado: string;
  onChange: (mes: string) => void;
};

export default function FilterMesMobile({
  mesesDisponiveis,
  mesSelecionado,
  onChange,
}: FilterMesMobileProps) {
  return (
    <div className="mb-6 w-full md:hidden">
      <Label
        htmlFor="filter-mes"
        className="mb-2 block text-sm font-semibold"
      >
        Pesquise pelo mês:
      </Label>
      <Select
        value={mesSelecionado}
        onValueChange={onChange}
      >
        <SelectTrigger
          id="filter-mes"
          className="w-full"
          aria-label="Filtrar por mês"
        >
          <SelectValue placeholder="Todos os meses" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">
            Todos os meses
          </SelectItem>
          {mesesDisponiveis.map((mes) => (
            <SelectItem key={mes} value={mes}>
              {mes}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
