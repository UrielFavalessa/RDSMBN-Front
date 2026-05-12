import {
  DialogContent,
  DialogTitle,
} from "@/components/dialog";
import { Dialog } from "radix-ui";
import { useState } from "react";
import { documentType } from "@/types/document";
import { deleteDocument } from "@/actions/document";
import { useAuth } from "@/store/useAuth";
import { Button } from "@/components/button";
import { useDocumentsStore } from "@/store/useDocument";
import { toast } from "react-toastify";

type DialogDocumentProps = {
  children: React.ReactNode;
  document: documentType;
};

export default function DialogDocumentDelete({
  document,
  children,
}: DialogDocumentProps) {
  const [open, setOpen] = useState<boolean>();
  const { token } = useAuth();
  const { removeDocument } = useDocumentsStore();

  function handleDelete() {
    deleteDocument(document.id, token ?? "").then(
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
        removeDocument(document.id);
        setOpen(false);
        toast.success("Documento deletado com sucesso!");
      }
    );
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>{children}</Dialog.Trigger>
      <DialogContent className="rounded-sm px-0 md:max-w-lg">
        <DialogTitle className="border-b pb-4.25 text-center text-xl md:text-[40px]">
          <p className="font-montserrat font-semibold">
            ATENÇÃO!
          </p>
        </DialogTitle>
        <div className="font-inter flex flex-col items-center justify-center gap-4">
          <p className="w-10/12 text-center md:w-7/12 md:text-lg">
            Você está prestes a excluir esse documento, essa
            ação não tem como ser desfeita após ser
            confirmada.
          </p>
          <div className="font-montserrat flex justify-center gap-6">
            <Button
              onClick={() => handleDelete()}
              className="cursor-pointer rounded-sm bg-[#639855] hover:bg-[#639855]/90"
            >
              CONFIRMAR
            </Button>
            <Button
              onClick={() => setOpen(false)}
              variant={"destructive"}
              className="cursor-pointer rounded-sm"
            >
              CANCELAR
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog.Root>
  );
}
