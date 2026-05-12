"use client";

type PaginationProps = {
  paginaAtual: number;
  totalPaginas: number;
  onPageChange: (pagina: number) => void;
};

export default function Pagination({
  paginaAtual,
  totalPaginas,
  onPageChange,
}: PaginationProps) {
  const paginas = Array.from(
    { length: totalPaginas },
    (_, i) => i + 1
  );

  return (
    <nav
      className="mt-8 flex items-center justify-center gap-2"
      aria-label="Navegação de páginas"
    >
      {/* Seta anterior — visível apenas no mobile */}
      <button
        className="border-border text-foreground hover:bg-muted flex size-8 items-center justify-center rounded-md border bg-transparent md:hidden"
        onClick={() => onPageChange(paginaAtual - 1)}
        disabled={paginaAtual === 1}
        aria-label="Página anterior"
      >
        ‹
      </button>

      {paginas.map((pagina) => {
        const isAtiva = pagina === paginaAtual;
        return (
          <button
            key={pagina}
            onClick={() => onPageChange(pagina)}
            className={`flex size-8 items-center justify-center rounded-md text-sm font-medium transition-colors ${
              isAtiva
                ? "bg-light-green text-white"
                : "text-foreground hover:bg-muted"
            }`}
            aria-label={`Página ${pagina}`}
            aria-current={isAtiva ? "page" : undefined}
          >
            {pagina}
          </button>
        );
      })}

      {/* Seta próxima — visível apenas no mobile */}
      <button
        className="border-border text-foreground hover:bg-muted flex size-8 items-center justify-center rounded-md border bg-transparent md:hidden"
        onClick={() => onPageChange(paginaAtual + 1)}
        disabled={paginaAtual === totalPaginas}
        aria-label="Próxima página"
      >
        ›
      </button>
    </nav>
  );
}
