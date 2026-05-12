"use client";

import Card from "@/components/card";
import Pagination from "@/components/pagination";

import { useAuth } from "@/hooks/useAuth";
import baseApi from "@/services/api";

import { useDocumentsStore } from "@/store/useDocument";
import { paginationResponseType } from "@/types/pagination-response";
import { documentType } from "@/types/document";
import { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { TiDocumentAdd } from "react-icons/ti";
import { HiOutlineFilter } from "react-icons/hi";
import { IoEyeOutline } from "react-icons/io5";
import { TiPencil } from "react-icons/ti";
import DialogDocumentCreate from "@/components/documents/dialogs/dialogDocumentCreate";
import DialogDocumentInformation from "@/components/documents/dialogs/dialogDocumentInformation";
import DialogDocumentUpdate from "@/components/documents/dialogs/dialogDocumentUpdate";
import DialogDocumentDelete from "@/components/documents/dialogs/dialogDocumentDelete";
import { cn } from "@/lib/utils";

export default function Home() {
  const { documents, setDocuments } = useDocumentsStore();

  const [documentPage, setDocumentPage] =
    useState<number>(1);

  // Paginação
  const PER_PAGE = 30;

  const lastPage = Math.max(
    1,
    Math.ceil(documents.length / PER_PAGE)
  );

  useEffect(() => {
    if (documents.length === 0) {
      baseApi
        .get<documentType[]>("/official-documents")
        .then((res) => {
          setDocuments(res.data);
        })
        .catch((err) => {
          console.log(err.response?.data);
        });
    }
  }, []);

  const paginatedDocuments = documents.slice(
    (documentPage - 1) * PER_PAGE,
    documentPage * PER_PAGE
  );

  return (
    <div className="flex h-screen justify-center">
      <div className="flex w-full max-w-6xl flex-col justify-center px-4">
        <div>
          <h2 className="font-montserrat text-xl font-semibold md:text-3xl">
            Documentos
          </h2>
          <p className="font-inter text-sm max-md:hidden">
            Cadastre, edite, visualize e exclua documentos.
          </p>
        </div>
        <div className="font-nunito my-5 flex h-7.5 justify-between rounded-sm bg-[#005B46] px-6 py-1 shadow-md md:h-14">
          <div className="flex items-center text-sm text-white">
            <HiOutlineFilter size={16} className="mr-2" />
            <p className="flex text-xl">FILTRO</p>
          </div>
          <DialogDocumentCreate title="Criar Documento">
            <TiDocumentAdd className="cursor-pointer text-xl text-white transition-all duration-75 hover:text-[#00c396] md:text-[25px]" />
          </DialogDocumentCreate>
        </div>
        <div className="h-8/12 w-full overflow-y-auto rounded-sm border-2 border-[#3B5394] shadow-lg">
          <div className="font-nunito sticky top-0 z-10 grid grid-cols-12 bg-white px-2 py-2 font-semibold shadow-sm">
            <p className="col-span-4">Título</p>
            <p className="col-span-4 ml-6">Data</p>
          </div>
          <div>
            {paginatedDocuments.map((document, key) => (
              <Card
                className={cn(
                  "min-h-[100px] justify-between gap-18 sm:min-h-0",
                  key % 2 === 0
                    ? "bg-[#E4ED97]/70"
                    : "bg-transparent"
                )}
                key={key}
                firstColumn={document.title}
                secondColumn={new Date(
                  document.created_at
                ).toLocaleDateString("pt-BR")}
                dialogInformation={
                  <DialogDocumentInformation
                    title="Dados do documento"
                    document={document}
                  >
                    <IoEyeOutline
                      className="bg-button-view cursor-pointer rounded-full p-0.5 text-white"
                      size={22}
                    />
                  </DialogDocumentInformation>
                }
                dialogUpdate={
                  <DialogDocumentUpdate
                    title="Editar documento"
                    document={document}
                  >
                    <TiPencil
                      className="cursor-pointer rounded-full bg-blue-600 p-0.5"
                      size={20}
                      fill="white"
                    />
                  </DialogDocumentUpdate>
                }
                dialogDelete={
                  <DialogDocumentDelete document={document}>
                    <FaRegTrashCan
                      className="bg-destructive cursor-pointer rounded-full p-0.5"
                      size={20}
                      fill="white"
                    />
                  </DialogDocumentDelete>
                }
              />
            ))}
          </div>
        </div>
        <div className="my-5 flex h-10 items-center justify-between rounded-sm bg-[#005B46] px-2 py-2 md:h-14">
          <Pagination
            currentPage={documentPage}
            lastPage={lastPage}
            onPageChange={setDocumentPage}
          />
        </div>
      </div>
    </div>
  );
}
