"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { useClickAway } from "react-use";
import { IoClose } from "react-icons/io5";

export function Navbar() {
  const hoverEffectDesktop =
    "hover:text-light-green transition-colors duration-300 ease-in-out";
  const hoverEffectMobile =
    "hover:text-light-grass transition-colors duration-300 ease-in-out";

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setIsOpen(false));

  return (
    <>
      <div ref={ref} className="flex items-center">
        <div
          className={`bg-surface font-montserrat fixed top-[10px] left-1/2 z-[100] flex w-[90%] max-w-[450px] -translate-x-1/2 flex-col items-center gap-4 rounded-lg pt-2 pb-10 shadow-md transition-all duration-300 sm:hidden ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
        >
          <button
            className="self-end pr-4"
            onClick={() => setIsOpen(false)}
          >
            <IoClose className="text-dark-green cursor-pointer text-2xl" />
          </button>
          <Link
            onClick={() => setIsOpen(false)}
            className={hoverEffectMobile}
            href="/"
          >
            Início
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className={hoverEffectMobile}
            href="/"
          >
            Quem somos
          </Link>

          <Link
            onClick={() => setIsOpen(false)}
            className={hoverEffectMobile}
            href="/project-us"
          >
            Projetos
          </Link>

          <Link
            onClick={() => setIsOpen(false)}
            className={hoverEffectMobile}
            href="/"
          >
            Documentos
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className={hoverEffectMobile}
            href="/"
          >
            Comunicação
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            className={hoverEffectMobile}
            href="/"
          >
            Contato
          </Link>
        </div>

        <div className="bg-green-grass sm:bg-surface font-anton flex h-[94px] w-full flex-row items-center justify-between">
          <div>
            <Link href="/">
              <Image
                className="ml-6 hidden cursor-pointer sm:block md:ml-8 2xl:ml-20"
                src="./rdsmbn-logo.svg"
                alt="RDSMBN logo"
                width={60}
                height={60}
              />
              <Image
                className="ml-6 cursor-pointer sm:hidden md:ml-8 2xl:ml-20"
                src="./rdsmbn-logo-white.svg"
                alt="RDSMBN logo"
                width={60}
                height={60}
              />
            </Link>
          </div>

          <div className="text-dark-green hidden gap-6 text-sm sm:flex md:gap-8 md:text-base lg:gap-16 lg:text-lg xl:text-xl 2xl:gap-32">
            <Link className={hoverEffectDesktop} href={"/"}>
              Início
            </Link>
            <Link
              className={hoverEffectDesktop}
              href={"/about-us"}
            >
              Quem somos
            </Link>
            <Link
              className={hoverEffectDesktop}
              href={"/project-us"}
            >
              Projetos
            </Link>
            <Link className={hoverEffectDesktop} href={"/"}>
              Documentos
            </Link>
            <Link className={hoverEffectDesktop} href={"/"}>
              Comunicação
            </Link>
            <Link className={hoverEffectDesktop} href={"/"}>
              Contato
            </Link>
          </div>

          <Link href="/auth/sign-in">
            <div className="text-light-green border-light-green hover:bg-light-green mr-6 hidden cursor-pointer border-2 p-2 pt-1 pb-1 text-sm transition-colors duration-300 ease-in-out hover:text-white sm:flex md:mr-8 md:pr-4 md:pl-4 md:text-base lg:text-lg xl:text-xl 2xl:mr-20">
              Login
            </div>
          </Link>

          <button
            className="mr-6 sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FiMenu
              className={`cursor-pointer text-2xl text-white ${!isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
            />
          </button>
        </div>
      </div>
    </>
  );
}
