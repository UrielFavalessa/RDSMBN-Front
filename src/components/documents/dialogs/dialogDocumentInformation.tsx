import {
  DialogContent,
  DialogTitle,
} from "@/components/dialog";
import FormDocument from "../formDocument";
import { Dialog } from "radix-ui";
import { useState } from "react";
import { documentType } from "@/types/document";

type DialogDocumentProps = {
  title: string;
  document: documentType;
  children: React.ReactNode;
};

export default function DialogDocumentInformation({
  title,
  document,
  children,
}: DialogDocumentProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <DialogContent className="font-montserrat px-0 md:max-w-sm">
        <DialogTitle className="border-b pb-4.25 text-center text-xl md:text-[38px]">
          {title}
        </DialogTitle>

        <div className="flex flex-col items-center justify-center px-4">
          <FormDocument
            readOnly={true}
            documentProps={document}
          />
        </div>
      </DialogContent>
    </Dialog.Root>
  );
}
