import Link from "next/link";

interface EventCardProps {
  dia: number;
  titulo: string;
  local: string;
  horario: string;
}

export default function EventCard({
  dia,
  titulo,
  local,
  horario,
}: EventCardProps) {
  return (
    <div className="border-border/60 flex items-start gap-4 border-b py-5 last:border-b-0">
      {/* Badge do dia */}
      <div className="bg-light-green flex h-12 w-12 shrink-0 items-center justify-center rounded-md font-bold text-white">
        {dia}
      </div>

      {/* Conteúdo do evento */}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <Link
          href="#"
          className="text-dark-green truncate text-sm font-bold underline-offset-4 hover:underline md:text-base"
        >
          {titulo}
        </Link>

        <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-xs">
          <span className="flex items-center gap-1">
            <svg
              className="size-4 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {local}
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="size-4 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {horario}
          </span>
        </div>
      </div>
    </div>
  );
}
