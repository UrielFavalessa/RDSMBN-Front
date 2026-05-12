import { Skeleton } from "@/components/skeleton";

export default function SkeletonDocumentCard() {
  return (
    <div className="bg-doc-card relative flex h-[185px] w-[310px] items-center overflow-hidden rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.40)] lg:h-[200px] lg:w-[400px] xl:h-[215px] xl:w-[450px]">
      <div className="absolute top-0 bottom-0 left-0 z-10 w-[100px] lg:w-[145px]">
        <Skeleton
          className="from-skel-gradient-from via-skel-gradient-via to-skel-gradient-to absolute top-0 bottom-0 left-[-35px] w-[100px] rounded-r-[5px] bg-gradient-to-br shadow-[4px_0px_10px_rgba(0,0,0,0.25)] lg:w-[145px]"
          style={{
            transform: "skewX(10deg)",
            transformOrigin: "top left",
          }}
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center pr-4">
          <Skeleton className="h-10 w-10 rounded-full bg-black/10" />
        </div>
      </div>
      <div className="z-20 flex h-full w-full flex-col justify-start py-7 pr-7 pl-[120px] lg:pl-[170px]">
        <div>
          <Skeleton className="bg-skel-base mb-3 h-5" />
          <div className="flex flex-col gap-2">
            <Skeleton className="bg-skel-base h-3 w-full" />
            <Skeleton className="bg-skel-base h-3 w-5/6" />
            <Skeleton className="bg-skel-base h-3 w-4/6" />
          </div>
        </div>
        <div className="flex h-full flex-col justify-end">
          <Skeleton className="bg-skel-base h-4 w-20" />
        </div>
      </div>
    </div>
  );
}
