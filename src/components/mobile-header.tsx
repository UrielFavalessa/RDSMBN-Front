"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
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

export default function MobileHeader() {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative mb-6 w-full md:hidden">
      <div className="w-full overflow-x-hidden">
        <div className="bg-light-green relative left-[-10%] flex w-[120%] flex-col items-center rounded-b-[50%] pb-10">
          <div className="absolute top-10 right-[13%] text-white">
            <Popover>
              <PopoverTrigger className="flex cursor-pointer items-center justify-center gap-2">
                <Avatar className="transition-all duration-150 hover:scale-110">
                  <AvatarImage
                    src={user?.image}
                  ></AvatarImage>
                  <AvatarFallback>
                    <CgProfile className="bg-light-green h-full w-full text-white" />
                  </AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                className="flex w-fit max-w-64 flex-col gap-1 overflow-hidden p-0 py-2"
              >
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
          <Image
            src="/logo-rdsmbn.png"
            alt="Logo do RDSMBN"
            width={80}
            height={80}
            className="pt-6"
          />
          <h2 className="text-sidebar-light-green pt-2 text-xl font-semibold">
            Olá,{" "}
            <span className="font-normal italic">
              {user?.name}
            </span>
          </h2>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="absolute top-10 left-[13%] text-white"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="absolute top-6 right-[3%] z-50 flex w-[94%] flex-col rounded-[10px] bg-white py-15 shadow-[0px_4px_4px_0px_#00000040]">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-light-green absolute top-4 left-[3%]"
            >
              <IoClose size={24} />
            </button>

            <nav className="flex flex-col items-center gap-4">
              <NavItem
                href="/admin/users"
                label="Usuários"
                onClick={() => setIsMenuOpen(false)}
              />
              <NavItem
                href="/admin/calendar"
                label="Calendário"
                onClick={() => setIsMenuOpen(false)}
              />
              <NavItem
                href="/admin/posts"
                label="Postagens"
                onClick={() => setIsMenuOpen(false)}
              />
              <NavItem
                href="/admin/documents"
                label="Documentos"
                onClick={() => setIsMenuOpen(false)}
              />
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

type NavItemProps = {
  href: string;
  label: string;
  onClick: () => void;
};

function NavItem({ href, label, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="px-6 text-base"
    >
      {label}
    </Link>
  );
}
