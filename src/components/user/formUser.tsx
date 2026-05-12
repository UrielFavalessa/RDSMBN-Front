import { userType } from "@/types/user";
import { FormEvent } from "react";
import { Input } from "../input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { Button } from "../button";
import { useAuth } from "@/hooks/useAuth";

type FormUserProps = {
  userProps?: userType;
  handleSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  readOnly?: boolean;
};

export default function FormUser({
  userProps,
  handleSubmit,
  readOnly = false,
}: FormUserProps) {
  const { user } = useAuth();

  const ROLES: userType["role"][] = [
    "admin",
    "editor",
    "user",
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="no-scrollbar mt-1 grid w-10/12 grid-cols-12 justify-center gap-2 overflow-x-visible overflow-y-scroll max-sm:max-h-150 md:gap-4 md:px-5"
    >
      <Input
        type="text"
        name="name"
        placeholder={`Nome${!userProps ? "*" : ""}`}
        className="col-span-12 rounded-sm border-2 border-[#D9D9D9] text-left shadow-sm"
        required
        disabled={readOnly}
        defaultValue={userProps?.name}
      />
      <Input
        type="email"
        name="email"
        placeholder={`Email${!userProps ? "*" : ""}`}
        className="col-span-12 rounded-sm border-2 border-[#D9D9D9] text-left shadow-sm"
        required
        disabled={readOnly}
        defaultValue={userProps?.email}
      />
      <Input
        type="password"
        name="password"
        placeholder="**********"
        disabled={readOnly}
        className="col-span-12 rounded-sm border-2 border-[#D9D9D9] text-left shadow-sm"
        required={!userProps}
      />
      <Select
        defaultValue={userProps?.role}
        disabled={readOnly || userProps?.id === user?.id}
        name="role"
        required
      >
        <div className="col-span-12 w-full">
          <SelectTrigger className="w-full rounded-sm border-2 border-[#D9D9D9] text-left shadow-sm">
            <SelectValue placeholder="Selecione o nível" />
          </SelectTrigger>
        </div>
        <SelectContent>
          <SelectGroup>
            {ROLES.map((role, key) => {
              return (
                <SelectItem key={key} value={role}>
                  {role.charAt(0).toUpperCase() +
                    role.slice(1)}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        type="submit"
        className={`font-montserrat col-span-12 mx-auto mt-4 cursor-pointer rounded-md bg-[#639855] px-16 hover:bg-[#639855]/90 ${readOnly ? "hidden" : "block"}`}
      >
        Enviar
      </Button>
    </form>
  );
}
