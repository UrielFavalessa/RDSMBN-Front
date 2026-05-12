import {
  DialogContent,
  DialogTitle,
} from "@/components/dialog";
import { Dialog } from "radix-ui";
import { useState } from "react";
import { userType } from "@/types/user";
import { deleteUser } from "@/actions/user";
import { useAuth } from "@/store/useAuth";
import { Button } from "@/components/button";
import { useUsersStore } from "@/store/useUser";
import { toast } from "react-toastify";

type DialogUserProps = {
  children: React.ReactNode;
  user: userType;
};

export default function DialogUserDelete({
  user,
  children,
}: DialogUserProps) {
  const [open, setOpen] = useState<boolean>();
  const { token } = useAuth();
  const { removeUser } = useUsersStore();

  function handleDelete() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    deleteUser(user.id, token ?? "").then((user: any) => {
      if (user?.errors && Array.isArray(user.errors)) {
        user.errors.forEach((message: string) => {
          toast.error(message);
        });
        return;
      }
      removeUser(user.id);
      setOpen(false);
      toast.success("Usuário deletado!");
    });
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
            Você está prestes a excluir esse usuário, essa
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
