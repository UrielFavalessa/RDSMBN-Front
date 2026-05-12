import NewCard from "@/components/newCard";
import { getNews } from "@/actions/post";
import SitePagination from "@/components/sitePagination";
import { redirect } from "next/navigation";
import { postType } from "@/types/post";
import { IoSearchOutline } from "react-icons/io5"

const NOTICIAS_CATEGORY_ID =
  "019dd54e-ff01-720e-a5ff-5356da3d2c3d";

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string }>;
}) {
  const params = await searchParams;
  if (params?.page !== undefined) {
    const parsedPage = Number(params.page);
    if (isNaN(parsedPage) || parsedPage < 1) {
      return redirect("/news?page=1");
    }
  }

  const currentPage = Number(params?.page) || 1;
  const searchTerm = params?.search || "";
  const rawData = await getNews(
    currentPage,
    6,
    NOTICIAS_CATEGORY_ID,
    searchTerm
  );
  const newsToShow: postType[] = rawData?.data || [];
  const totalPages = rawData?.last_page || 1;
  if (currentPage > totalPages && totalPages > 0) {
    redirect(`/news?page=${totalPages}`);
  }

  return (
    <main className="px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col items-center">
          <h1 className="font-anton text-doc-title lg:font-montserrat mb-5 text-center text-2xl font-normal lg:text-4xl lg:font-extrabold">
            Nossas notícias
          </h1>
          <div className="flex w-full max-w-75 flex-col items-center gap-2 pb-1 lg:max-w-xl lg:flex-row lg:gap-4">
            <span className="font-montserrat shrink-0 text-xl font-semibold text-[#004E89]">
              Pesquise pela palavra-chave:
            </span>
            <form
              action="/news"
              method="GET"
              className="font-inter flex w-full flex-1 items-center gap-3 border-b border-[#004E894D] font-normal text-[#004E894D]"
            >
              <IoSearchOutline size={24} className="" />
              <input
                type="text"
                name="search"
                defaultValue={searchTerm}
                placeholder="turismo em Barra Nova"
                className="w-full text-base outline-none"
              />
            </form>
          </div>
        </div>

        <div className="mx-auto mb-12 flex flex-col flex-wrap items-center gap-10 md:flex-row md:justify-center lg:gap-20">
          {newsToShow.length > 0 ? (
            newsToShow.map((post) => (
              <NewCard key={post.id} {...post} />
            ))
          ) : (
            <p className="font-nunito col-span-full text-center text-gray-500">
              Nenhuma notícia encontrada.
            </p>
          )}
        </div>

        <SitePagination
          currentPage={currentPage}
          lastPage={totalPages}
          basePath="/news"
        />
      </div>
    </main>
  );
}
