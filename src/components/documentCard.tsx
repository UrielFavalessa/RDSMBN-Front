import { LuLink } from "react-icons/lu";
import { AiOutlineFile } from "react-icons/ai";
import { documentType } from "@/types/document";

export default function DocumentCard({
  title,
  description,
  url,
  file,
}: documentType) {
  const isFile = Boolean(
    file && typeof file === "string" && file.trim() !== ""
  );
  const backendUrl =
    process.env.NEXT_PUBLIC_API_URL?.replace(/\/api$/, "");
  const href = isFile
    ? `${backendUrl}/storage/${file}`
    : url;

  const theme = isFile
    ? {
        bgGradient:
          "from-doc-gradient-from via-gradient-via-blue to-gradient-to-blue",
        titleColor: "text-doc-blue",
        linkColor: "text-doc-link-blue",
        icon: AiOutlineFile,
        iconColor: "text-doc-blue",
        iconSize: 50,
      }
    : {
        bgGradient:
          "from-doc-gradient-from via-gradient-via-green to-gradient-to-green",
        titleColor: "text-doc-green",
        linkColor: "text-doc-link-green",
        icon: LuLink,
        iconColor: "text-doc-green",
        iconSize: 40,
      };

  return (
    <article className="bg-doc-card relative flex h-[185px] w-[310px] items-center overflow-hidden rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.40)] lg:h-[200px] lg:w-[400px] xl:h-[215px] xl:w-[450px]">
      <div className="pointer-events-none absolute inset-0 z-30 shadow-[inset_0px_4px_8px_rgba(0,0,0,0.08),inset_4px_0px_8px_rgba(0,0,0,0.04),inset_-4px_0px_8px_rgba(0,0,0,0.04)]" />
      <div className="absolute top-0 bottom-0 left-0 z-10 w-[100px] lg:w-[145px]">
        <div
          className={`absolute top-0 bottom-0 left-[-35px] w-[100px] rounded-r-[5px] bg-gradient-to-br lg:w-[145px] ${theme.bgGradient} shadow-[4px_0px_10px_rgba(0,0,0,0.25)]`}
          style={{
            transform: "skewX(10deg)",
            transformOrigin: "top left",
          }}
        ></div>
        <div className="absolute inset-0 z-20 flex items-center justify-center pr-4">
          <theme.icon
            size={theme.iconSize}
            className={`stroke-[2] ${theme.iconColor} drop-shadow-[2px_3px_2px_rgba(0,0,0,0.45)]`}
          />
        </div>
      </div>
      <div className="font-montserrat z-20 flex h-full w-full flex-col justify-start py-7 pr-7 pl-[120px] lg:pl-[170px]">
        <div>
          <h3
            className={`mb-1 line-clamp-1 text-lg font-semibold lg:text-xl ${theme.titleColor}`}
          >
            {title}
          </h3>
          <p className="font-inter line-clamp-3 text-sm font-normal lg:text-base">
            {description}
          </p>
        </div>
        <div className="flex h-full flex-col justify-end">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-base font-medium underline decoration-1 underline-offset-2 ${theme.linkColor} w-fit transition-opacity hover:opacity-80`}
          >
            Visualizar
          </a>
        </div>
      </div>
    </article>
  );
}
