import Image from "next/image";

type cardProjectsProps = {
  title: string;
  description: string;
  thumb: string;
  image: string;
};

export default function CardProjects({
  title,
  description,
  thumb,
  image,
}: cardProjectsProps) {
  return (
    <>
      <div className="relative flex h-full w-full max-w-[300px] flex-col items-center justify-start gap-2 rounded-md bg-[#3B7338] md:h-[633px] md:w-[1012px] md:max-w-none md:flex-row md:justify-center">
        <div className="absolute left-0 mb-18 hidden h-full w-1/3 rounded-md bg-[#3B7338] md:flex"></div>
        <div className="flex h-auto max-h-[488px] max-w-[300px] items-center justify-center px-4 pt-8 md:z-50 md:w-1/2 md:max-w-[501px] md:pt-0">
          <Image
            src={thumb}
            alt={title}
            className="flex h-full w-full rounded-md object-cover"
            width={501}
            height={488}
          />
        </div>
        <div className="flex h-full flex-col items-start justify-center gap-4 bg-[#3B7338] p-4 md:z-50 md:w-1/2">
          <h1 className="text-2xl font-bold text-white">
            {title}
          </h1>
          <p className="text-sm text-white md:text-lg">
            {description}
          </p>
          <div className="flex items-center justify-center">
            <Image
              src={image}
              alt={title}
              className="rounded-md object-cover"
              width={366}
              height={123}
            />
          </div>
        </div>
      </div>
    </>
  );
}
