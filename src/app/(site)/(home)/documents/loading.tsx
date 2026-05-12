import SkeletonDocumentCard from "@/components/skeletonDocuments";
import { Skeleton } from "@/components/skeleton";

export default function LoadingDocuments() {
  return (
    <main className="px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-anton text-doc-title lg:font-montserrat mb-10 text-center text-2xl font-normal lg:text-4xl lg:font-extrabold">
          Documentos
        </h1>

        <div className="mx-auto mb-12 flex flex-col flex-wrap items-center gap-10 md:flex-row md:justify-center lg:gap-20">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonDocumentCard key={index} />
          ))}
        </div>
        <div className="flex w-full items-center justify-center gap-8">
          <Skeleton className="bg-skel-base h-7 w-7 rounded-full" />
          <div className="flex items-baseline gap-6">
            <Skeleton className="bg-skel-base h-5 w-3 rounded-md" />
            <Skeleton className="bg-skel-base h-5 w-3 rounded-md" />
            <Skeleton className="bg-skel-base h-5 w-3 rounded-md" />
          </div>
          <Skeleton className="bg-skel-base h-7 w-7 rounded-full" />
        </div>
      </div>
    </main>
  );
}
