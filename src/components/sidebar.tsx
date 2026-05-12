"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegFileAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import {
  LuCalendarDays,
  LuUserRound,
} from "react-icons/lu";
import { useAuth } from "@/hooks/useAuth";
import { CgProfile } from "react-icons/cg";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/popover";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/avatar";
import { PiUserCircle } from "react-icons/pi";
import { IoMdLogOut } from "react-icons/io";
import DialogUserUpdate from "@/components/user/dialogs/dialogUserUpdate";
import { TbUserEdit } from "react-icons/tb";

export default function Sidebar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();

  return (
    <aside className="bg-light-green hidden h-screen w-75 shrink-0 flex-col rounded-e-sm text-white shadow-[4px_1px_4px_0px_#00000040] md:flex">
      <div className="flex flex-col items-center px-4 pt-36 pb-8">
        <Image
          src="/logo-rdsmbn.png"
          alt="Logo do RDSMBN"
          width={100}
          height={100}
        />
        <h2 className="text-sidebar-light-green pt-2 text-center text-3xl font-semibold">
          Olá,{" "}
          <span className="font-normal italic">
            {user?.name}
          </span>
        </h2>
      </div>

      <nav className="mt-4 flex flex-col items-center">
        <ul className="flex flex-col gap-2">
          <NavItem
            href={"/admin/users"}
            icon={<LuUserRound size={19} />}
            label={"Usuários"}
            isActive={pathname === "/admin/users"}
          />
          <NavItem
            href={"/admin/calendar"}
            icon={<LuCalendarDays size={19} />}
            label={"Calendário"}
            isActive={pathname === "/admin/calendar"}
          />
          <NavItem
            href={"/admin/posts"}
            icon={<FiEdit size={19} />}
            label={"Post"}
            isActive={pathname === "/admin/posts"}
          />
          <NavItem
            href={"/admin/documents"}
            icon={<FaRegFileAlt size={19} />}
            label={"Documentos"}
            isActive={pathname === "/admin/documents"}
          />
        </ul>
      </nav>
      <div className="mt-auto mb-8 flex cursor-pointer flex-col items-center">
        <Popover>
          <PopoverTrigger className="flex cursor-pointer items-center justify-center gap-2">
            <Avatar className="transition-all duration-150 hover:scale-110">
              <AvatarImage src={user?.image}></AvatarImage>
              <AvatarFallback>
                <CgProfile className="bg-light-green h-full w-full text-white" />
              </AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="flex w-fit max-w-64 flex-col gap-1 overflow-hidden p-0 py-2">
            <PopoverHeader className="flex flex-row items-center border-b px-3">
              <Avatar>
                <AvatarImage
                  src={user?.image}
                ></AvatarImage>
                <AvatarFallback>
                  <PiUserCircle className="h-full w-full" />
                </AvatarFallback>
              </Avatar>
              <div className="font-nunito">
                <PopoverTitle>
                  Olá, {user?.name}!
                </PopoverTitle>
                <PopoverDescription className="max-w-52 overflow-hidden text-ellipsis">
                  {user?.email}
                </PopoverDescription>
              </div>
            </PopoverHeader>
            <DialogUserUpdate
              title="Editar Perfil"
              user={user!}
            >
              <div className="font-nunito group flex cursor-pointer items-center rounded-md px-3 py-1">
                <TbUserEdit
                  size={20}
                  className="mr-1 transition-colors group-hover:text-[#639855]"
                />

                <span className="bg-[linear-gradient(to_right,#639855_50%,#000_50%)] bg-size-[200%_100%] bg-clip-text bg-right text-sm text-transparent transition-all duration-300 group-hover:bg-left group-hover:font-medium">
                  <p className="cursor-pointer">
                    Editar Perfil
                  </p>
                </span>
              </div>
            </DialogUserUpdate>
            <div
              className="group flex cursor-pointer items-center rounded-md px-3 py-1"
              onClick={logout}
            >
              <IoMdLogOut
                size={20}
                className="mr-1 transition-colors group-hover:text-[#ca080b]"
              />
              <span className="bg-[linear-gradient(to_right,#ca080b_50%,#000_50%)] bg-size-[200%_100%] bg-clip-text bg-right text-sm text-transparent transition-all duration-300 group-hover:bg-left group-hover:font-medium">
                Sair
              </span>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </aside>
  );
}

type NavItemProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
};

function NavItem({
  href,
  icon,
  label,
  isActive = false,
}: NavItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center gap-2 px-4 ${isActive ? "font-semibold" : "font-normal"}`}
      >
        {icon}
        <span className="text-xl">{label}</span>
      </Link>
    </li>
  );
}
