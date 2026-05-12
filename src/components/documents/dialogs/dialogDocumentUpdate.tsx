import {
  DialogContent,
  DialogTitle,
} from "@/components/dialog";
import FormDocument from "../formDocument";
import { Dialog } from "radix-ui";
import { useState } from "react";
import { documentType } from "@/types/document";
import { updateDocument } from "@/actions/document";
import { useDocumentsStore } from "@/store/useDocument";
import { toast } from "react-toastify";
import { useAuth } from "@/store/useAuth";

type DialogDocumentProps = {
  title: string;
  children: React.ReactNode;
  document: documentType;
};

export default function DialogDocumentUpdate({
  title,
  document,
  children,
}: DialogDocumentProps) {
  const { token } = useAuth();
  const [open, setOpen] = useState<boolean>();
  const { editDocument } = useDocumentsStore();

  function handleSubmit(formData: FormData) {
    updateDocument(
      formData,
      String(document.id),
      token ?? ""
    ).then((updatedDocument: any) => {
      if (
        updatedDocument?.errors &&
        Array.isArray(updatedDocument.errors)
      ) {
        updatedDocument.errors.forEach(
          (message: string) => {
            toast.error(message);
          }
        );
        return;
      }
      editDocument(updatedDocument);
      setOpen(false);
      toast.success("Documento atualizado!");
    });
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <DialogContent className="font-montserrat px-0 md:max-w-sm">
        <DialogTitle className="border-b pb-4.25 text-center text-xl md:text-[40px]">
          {title}
        </DialogTitle>
        <div className="flex flex-col items-center justify-center px-4">
          <FormDocument
            documentProps={document}
            handleSubmit={handleSubmit}
          />
        </div>
      </DialogContent>
    </Dialog.Root>
  );
}
