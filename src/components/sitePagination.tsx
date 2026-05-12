import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";

type SitePaginationProps = {
  currentPage: number;
  lastPage: number;
  basePath?: string;
};

export default function SitePagination({
  currentPage,
  lastPage,
  basePath,
}: SitePaginationProps) {
  if (lastPage <= 1) return null;
  const getVisiblePages = () => {
    if (lastPage <= 3) {
      return Array.from(
        { length: lastPage },
        (_, i) => i + 1
      );
    }
    if (currentPage === 1) {
      return [1, 2, 3];
    }
    if (currentPage === lastPage) {
      return [lastPage - 2, lastPage - 1, lastPage];
    }
    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="font-inter flex w-full items-center justify-center gap-8">
      <Link
        href={`${basePath}?page=${Math.max(1, currentPage - 1)}`}
        className={cn(
          "group from-doc-blue to-paginate-cyan relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-b p-[2px] transition-transform hover:scale-105",
          currentPage === 1 &&
            "pointer-events-none opacity-50"
        )}
      >
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
          <IoChevronBack className="text-paginate-cyan group-hover:text-doc-blue mr-0.5 text-xl transition-colors" />
        </div>
      </Link>

      <div className="flex items-baseline gap-6">
        {visiblePages.map((page) => (
          <Link
            key={`site-page-${page}`}
            href={`${basePath}?page=${page}`}
            className={cn(
              "text-doc-blue text-xl transition-opacity hover:opacity-70",
              currentPage === page
                ? "font-bold"
                : "font-normal"
            )}
          >
            {page}
          </Link>
        ))}
      </div>

      <Link
        href={`${basePath}?page=${Math.min(lastPage, currentPage + 1)}`}
        className={cn(
          "group from-doc-blue to-paginate-cyan relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-b p-[2px] transition-transform hover:scale-105",
          currentPage === lastPage &&
            "pointer-events-none opacity-50"
        )}
      >
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
          <IoChevronForward className="text-paginate-cyan group-hover:text-doc-blue ml-0.5 text-xl transition-colors" />
        </div>
      </Link>
    </div>
  );
}
