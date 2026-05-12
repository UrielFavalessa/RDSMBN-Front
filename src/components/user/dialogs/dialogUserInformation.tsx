import {
  DialogContent,
  DialogTitle,
} from "@/components/dialog";
import FormUser from "../formUser";
import { Dialog } from "radix-ui";
import { useState } from "react";
import { userType } from "@/types/user";

type DialogUserProps = {
  title: string;
  user: userType;
  children: React.ReactNode;
};

export default function DialogUserInformation({
  title,
  user,
  children,
}: DialogUserProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <DialogContent className="font-montserrat px-0 md:max-w-sm">
        <DialogTitle className="border-b pb-4.25 text-center text-xl md:text-[38px]">
          {title}
        </DialogTitle>

        <div className="flex flex-col items-center justify-center px-4">
          <FormUser readOnly={true} userProps={user} />
        </div>
      </DialogContent>
    </Dialog.Root>
  );
}
