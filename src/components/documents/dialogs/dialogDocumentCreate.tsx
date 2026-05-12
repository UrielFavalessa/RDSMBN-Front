import {
  DialogContent,
  DialogTitle,
} from "@/components/dialog";
import FormDocument from "../formDocument";
import { createDocument } from "../../../actions/document";
import { useAuth } from "@/store/useAuth";
import { useDocumentsStore } from "@/store/useDocument";
import { Dialog } from "radix-ui";
import { useState } from "react";
import { toast } from "react-toastify";

type DialogDocumentProps = {
  title: string;
  children: React.ReactNode;
};

export default function DialogDocumentCreate({
  title,
  children,
}: DialogDocumentProps) {
  const { token } = useAuth();
  const { addDocument } = useDocumentsStore();
  const [open, setOpen] = useState<boolean>();

  function handleSubmit(formData: FormData) {
    if (!formData.has("url") && !formData.has("file")) {
      toast.error("Informe uma URL ou envie um arquivo.");
      return;
    }
    createDocument(formData, token ?? "").then(
      (document: any) => {
        if (
          document?.errors &&
          Array.isArray(document.errors)
        ) {
          document.errors.forEach((message: string) => {
            toast.error(message);
          });
          return;
        }
        addDocument(document);
        setOpen(false);
        toast.success("Documento criado!");
      }
    );
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <DialogContent className="font-montserrat px-0 md:max-w-sm">
        <DialogTitle className="border-b pb-4.25 text-center text-xl md:text-[40px]">
          {title}
        </DialogTitle>
        <div className="flex flex-col items-center justify-center px-2">
          <FormDocument handleSubmit={handleSubmit} />
        </div>
      </DialogContent>
    </Dialog.Root>
  );
}
