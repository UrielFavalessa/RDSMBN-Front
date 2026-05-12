import Image from "next/image";
import Link from "next/link";
import { postType } from "@/types/post";

export default function NewCard(post: postType) {
  return (
    <div className="flex h-[180px] w-[290px] shrink-0 flex-row items-center overflow-hidden rounded-[20px] bg-[#F2EFEA] shadow-md md:h-[310px] md:w-[470px]">
      <div className="relative h-full w-[45%] shrink-0">
        <div
          className="absolute top-0 left-0 z-10 h-full w-full bg-[#009B77]"
          style={{
            borderRadius:
              "4px 45% 35% 4px / 4px 50% 50% 4px",
          }}
        ></div>
        <div
          className="absolute top-0 left-0 z-20 h-full bg-[#00B3C6]"
          style={{
            width: "98.5%",
            borderRadius:
              "4px 70% 38% 4px / 4px 50% 50% 4px",
          }}
        ></div>
        <div
          className="absolute top-0 left-0 z-30 h-full overflow-hidden bg-gray-200"
          style={{
            width: "98%",
            borderRadius:
              "4px 45% 41% 4px / 4px 50% 50% 4px",
          }}
        >
          {post.thumb ? (
            <Image
              src={post.thumb}
              alt={post.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-[10px] text-gray-400 md:text-sm">
              Sem imagem
            </div>
          )}
        </div>
      </div>
      <div className="flex w-[55%] flex-col justify-center p-4 md:p-6">
        <h3 className="font-montserrat mb-1 line-clamp-2 text-left text-xl font-semibold text-[#005B46] md:mb-3 md:line-clamp-3 md:text-[22px] md:leading-[1.2]">
          {post.title}
        </h3>

        <p className="font-inter mb-3 line-clamp-3 text-base font-normal text-[#005B46] opacity-90 md:mb-6 md:line-clamp-6 md:text-sm">
          {post.subtitle}
        </p>

        <div>
          <Link
            href={`/news/${post.id}`}
            className="font-montserrat inline-block rounded-md bg-[#00A8E8] px-3 py-1.5 text-[10px] font-bold text-white transition-colors hover:bg-[#0092c9] md:px-5 md:py-2 md:text-sm"
          >
            LER MATÉRIA
          </Link>
        </div>
      </div>
    </div>
  );
}
