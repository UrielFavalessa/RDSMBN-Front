import Image from "next/image";
import Link from "next/link";
import { postType } from "@/types/post";

export default function NewCard(post: postType) {
  return (
    <div className="flex flex-row items-center overflow-hidden rounded-[20px] bg-[#F2EFEA] shadow-md shrink-0 w-[290px] h-[180px] md:w-[470px] md:h-[310px]">
      <div className="relative h-full w-[45%] shrink-0">
        <div
          className="absolute top-0 left-0 z-10 h-full w-full bg-[#009B77]"
          style={{
            borderRadius: "4px 45% 35% 4px / 4px 50% 50% 4px",
          }}
        ></div>
        <div
          className="absolute top-0 left-0 z-20 h-full bg-[#00B3C6]"
          style={{
            width: "98.5%",
            borderRadius: "4px 70% 38% 4px / 4px 50% 50% 4px",
          }}
        ></div>
        <div
          className="absolute top-0 left-0 z-30 h-full overflow-hidden bg-gray-200"
          style={{
            width: "98%",
            borderRadius: "4px 45% 41% 4px / 4px 50% 50% 4px",
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
            <div className="flex h-full w-full items-center justify-center text-[10px] md:text-sm text-gray-400">
              Sem imagem
            </div>
          )}
        </div>
      </div>
      <div className="flex w-[55%] flex-col justify-center p-4 md:p-6">
        
        <h3 className="font-montserrat mb-1 md:mb-3 text-left text-xl md:text-[22px] md:leading-[1.2] font-semibold text-[#005B46] line-clamp-2 md:line-clamp-3">
          {post.title}
        </h3>
        
        <p className="font-inter mb-3 md:mb-6 text-base md:text-sm font-normal text-[#005B46] opacity-90 line-clamp-3 md:line-clamp-6">
          {post.subtitle}
        </p>
        
        <div>
          <Link
            href={`/news/${post.id}`}
            className="font-montserrat inline-block rounded-md bg-[#00A8E8] px-3 py-1.5 md:px-5 md:py-2 text-[10px] md:text-sm font-bold text-white hover:bg-[#0092c9] transition-colors"
          >
            LER MATÉRIA
          </Link>
        </div>
        
      </div>
    </div>
  );
}
