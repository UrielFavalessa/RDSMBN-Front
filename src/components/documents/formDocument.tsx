import { documentType } from "@/types/document";
import { FormEvent, useState } from "react";
import { Input } from "../input";
import { Button } from "../button";
import { BsPaperclip } from "react-icons/bs";
import { useRef } from "react";
import { IoIosClose } from "react-icons/io";

type FormDocumentProps = {
  documentProps?: documentType;
  handleSubmit?: (formData: FormData) => void;
  readOnly?: boolean;
};

export default function FormDocument({
  documentProps,
  handleSubmit,
  readOnly = false,
}: FormDocumentProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [urlValue, setUrlValue] = useState(
    documentProps?.url ?? ""
  );
  const [selectedFile, setSelectedFile] =
    useState<File | null>(null);
  const [fileName, setFileName] = useState(() => {
    if (!documentProps?.file) return "";
    const name = documentProps.file.split("/").pop() ?? "";
    return name.includes("_")
      ? name.substring(name.indexOf("_") + 1)
      : name;
  });

  const hasUrl = urlValue.trim().length > 0;
  const hasFile = !!selectedFile || !!fileName;

  function clearFile() {
    if (fileInputRef.current)
      fileInputRef.current.value = "";
    setSelectedFile(null);
    setFileName("");
  }

  function openFile() {
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      window.open(url, "_blank");
    } else if (documentProps?.file) {
      const url = `${(process.env.NEXT_PUBLIC_API_URL ?? "").replace("/api", "")}/storage/${documentProps.file}`;
      window.open(url, "_blank");
    }
  }

  function openUrl() {
    if (urlValue.trim()) {
      window.open(urlValue.trim(), "_blank");
    }
  }

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData();

    formData.append(
      "title",
      (form.elements.namedItem("title") as HTMLInputElement)
        .value
    );
    formData.append(
      "description",
      (
        form.elements.namedItem(
          "description"
        ) as HTMLInputElement
      ).value
    );

    if (selectedFile) {
      formData.append("file", selectedFile);
    } else if (urlValue.trim()) {
      formData.append("url", urlValue.trim());
    }

    handleSubmit?.(formData);
  }

  return (
    <form
      onSubmit={handleFormSubmit}
      className="no-scrollbar mt-1 grid w-10/12 grid-cols-12 justify-center gap-2 overflow-x-visible overflow-y-scroll max-sm:max-h-150 md:gap-4 md:px-5"
    >
      <textarea
        name="title"
        rows={2}
        placeholder="Título"
        className="placeholder:text-muted-foreground focus-visible:none disabled:bg-input/50 col-span-12 resize-none rounded-sm border-2 border-[#D9D9D9] p-2 text-left text-sm shadow-sm placeholder:text-sm focus-visible:outline-none disabled:opacity-50"
        disabled={readOnly}
        defaultValue={documentProps?.title}
      ></textarea>

      <textarea
        name="description"
        className="placeholder:text-muted-foreground focus-visible:none disabled:bg-input/50 col-span-12 min-h-[100px] resize-none rounded-sm border-2 border-[#D9D9D9] p-2 text-left text-sm shadow-sm placeholder:text-sm focus-visible:outline-none disabled:opacity-50"
        placeholder="Descrição"
        disabled={readOnly}
        defaultValue={documentProps?.description}
        rows={4}
      />

      {(!readOnly || documentProps?.url) && (
        <div className="col-span-12 flex flex-col gap-1">
          {readOnly ? (
            <span
              className="cursor-pointer rounded-sm border-2 border-[#D9D9D9] px-3 py-2 text-sm text-blue-600 shadow-sm hover:underline"
              onClick={openUrl}
            >
              {urlValue}
            </span>
          ) : (
            <>
              <Input
                type="text"
                name="url"
                placeholder="URL"
                value={urlValue}
                onChange={(e) =>
                  setUrlValue(e.target.value)
                }
                disabled={hasFile}
                className={`rounded-sm border-2 border-[#D9D9D9] text-left shadow-sm transition-opacity ${
                  hasFile
                    ? "cursor-not-allowed opacity-40"
                    : ""
                }`}
              />
              {hasFile && (
                <p className="text-xs text-gray-400">
                  Remova o arquivo para inserir uma URL
                </p>
              )}
            </>
          )}
        </div>
      )}

      {!readOnly && (
        <div className="col-span-12 flex items-center gap-2">
          <div className="flex-1 border-t border-[#D9D9D9]" />
          <span className="text-xs text-gray-400">ou</span>
          <div className="flex-1 border-t border-[#D9D9D9]" />
        </div>
      )}

      {(!readOnly || documentProps?.file) && (
        <div className="col-span-12 flex flex-col gap-1">
          <div
            className={`flex items-center justify-between rounded-sm border-2 border-[#D9D9D9] px-3 py-2 shadow-sm transition-opacity ${
              !readOnly && hasUrl
                ? "cursor-not-allowed opacity-40"
                : "cursor-default"
            } ${!readOnly && !hasUrl && !hasFile ? "hover:bg-gray-50" : ""}`}
          >
            <div className="text-muted-foreground flex w-full items-center justify-between text-base">
              <span
                className={`${hasFile ? "cursor-pointer break-all text-blue-600 hover:underline" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (hasFile) openFile();
                }}
              >
                {hasFile ? fileName : "Anexar arquivo"}
              </span>
              {!readOnly && !hasFile && (
                <BsPaperclip
                  onClick={() =>
                    !hasUrl &&
                    !hasFile &&
                    fileInputRef.current?.click()
                  }
                  className="text-dark-green cursor-pointer text-xl"
                />
              )}
            </div>
            {hasFile && !readOnly && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  clearFile();
                }}
              >
                <IoIosClose className="cursor-pointer text-xl text-gray-600" />
              </button>
            )}
          </div>
          {!readOnly && hasUrl && (
            <p className="text-xs text-gray-400">
              Remova a URL para anexar um arquivo
            </p>
          )}
          <input
            type="file"
            ref={fileInputRef}
            name="file"
            accept="application/pdf"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setSelectedFile(file);
                setFileName(file.name);
              }
            }}
          />
        </div>
      )}

      <Button
        type="submit"
        className={`font-montserrat col-span-12 mx-auto mt-4 cursor-pointer rounded-md bg-[#639855] px-16 hover:bg-[#639855]/90 ${
          readOnly ? "hidden" : "block"
        }`}
      >
        Enviar
      </Button>
    </form>
  );
}
