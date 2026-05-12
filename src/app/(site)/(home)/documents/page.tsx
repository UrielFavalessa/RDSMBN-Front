import DocumentCard from "@/components/documentCard";
import { documentType } from "@/types/document";
// import { getDocuments } from "@/actions/document";
import SitePagination from "@/components/sitePagination";
import { redirect } from "next/navigation";

export default async function DocumentsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  if (params?.page !== undefined) {
    const parsedPage = Number(params.page);
    if (isNaN(parsedPage) || parsedPage < 1) {
      return redirect("/documents?page=1");
    }
  }
  const currentPage = Number(params?.page) || 1;
  // const rawData = await getDocuments(currentPage, 6);
  // const documentsToShow: documentType[] =
  //   rawData?.data || [];
  // const totalPages = rawData?.last_page || 1;
  // if (currentPage > totalPages && totalPages > 0) {
  //   redirect(`/documents?page=${totalPages}`);
  // }

  const documentsToShow: documentType[] = [
    {
      id: "1",
      title: "Link 1",
      description: "Descrição do link 1",
      url: "/documents/1",
      file: "",
      created_at: "2023-01-01",
      updated_at: "2023-01-01",
    },
    {
      id: "2",
      title: "Documento 1",
      description: "Descrição do documento 2",
      url: "",
      file: "pdf.pdf",
      created_at: "2023-01-01",
      updated_at: "2023-02-01",
    },
    {
      id: "3",
      title: "Documento 2",
      description: "Descrição do documento 3",
      url: "",
      file: "dale.pdf",
      created_at: "2023-01-01",
      updated_at: "2023-02-01",
    },
    {
      id: "4",
      title: "Documento 3",
      description: "Descrição do documento 4",
      url: "",
      file: "asdas.jpg",
      created_at: "2023-01-01",
      updated_at: "2023-02-01",
    },
    {
      id: "5",
      title: "Link 2",
      description: "Descrição do link 2",
      url: "/documents/5",
      file: "",
      created_at: "2023-01-01",
      updated_at: "2023-02-01",
    },
    {
      id: "6",
      title: "Link 3",
      description: "Descrição do link 6",
      url: "/documents/6",
      file: "",
      created_at: "2023-01-01",
      updated_at: "2024-01-01",
    },
  ];

  return (
    <main className="px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-anton text-doc-title lg:font-montserrat mb-10 text-center text-2xl font-normal lg:text-4xl lg:font-extrabold">
          Documentos
        </h1>

        <div className="mx-auto mb-12 flex flex-col flex-wrap items-center gap-10 md:flex-row md:justify-center lg:gap-20">
          {documentsToShow.length > 0 ? (
            documentsToShow.map((doc) => (
              <DocumentCard key={doc.id} {...doc} />
            ))
          ) : (
            <p className="font-nunito col-span-full text-center">
              Nenhum documento encontrado.
            </p>
          )}
        </div>

        <SitePagination
          currentPage={currentPage}
          lastPage={3}
          basePath="/documents"
        />
      </div>
    </main>
  );
}
