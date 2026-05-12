"use client";

import Card from "@/components/card";
import Pagination from "@/components/pagination";
import DialogUserCreate from "@/components/user/dialogs/dialogUserCreate";
import DialogUserDelete from "@/components/user/dialogs/dialogUserDelete";
import DialogUserInformation from "@/components/user/dialogs/dialogUserInformation";
import DialogUserUpdate from "@/components/user/dialogs/dialogUserUpdate";
import { useAuth } from "@/hooks/useAuth";
import baseApi from "@/services/api";
import { useUsersStore } from "@/store/useUser";
import { paginationResponseType } from "@/types/pagination-response";
import { userType } from "@/types/user";
import { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { GoPersonAdd } from "react-icons/go";
import { HiOutlineFilter } from "react-icons/hi";
import { IoEyeOutline } from "react-icons/io5";
import { TiPencil } from "react-icons/ti";

export default function Home() {
  const { users, setUsers } = useUsersStore();
  const { user, token } = useAuth();

  const [userPage, setUserPage] = useState<number>(1);

  // Paginação
  const PER_PAGE = 30;
  const lastPage = Math.max(
    1,
    Math.ceil(users.length / PER_PAGE)
  );

  useEffect(() => {
    if (users.length === 0) {
      baseApi
        .get<userType[]>("/users", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUsers(res.data);
        });
    }
  }, []);

  const paginatedUsers = users.slice(
    (userPage - 1) * PER_PAGE,
    userPage * PER_PAGE
  );

  return (
    <div className="flex h-screen justify-center">
      <div className="flex w-full max-w-6xl flex-col justify-center px-4">
        <div>
          <h2 className="font-montserrat text-xl font-semibold md:text-3xl">
            Usuários
          </h2>
          <p className="font-inter text-sm max-md:hidden">
            Cadastre, edite, visualize e exclua usuários.
          </p>
        </div>
        <div className="font-nunito my-5 flex h-7.5 justify-between rounded-sm bg-[#005B46] px-6 py-1 shadow-md md:h-14">
          <div className="flex items-center text-sm text-white">
            <HiOutlineFilter size={16} className="mr-2" />
            <p className="flex text-xl">FILTRO</p>
          </div>
          <DialogUserCreate title="Criar Usuário">
            <GoPersonAdd className="cursor-pointer text-xl text-white transition-all duration-75 hover:text-[#00c396] md:text-[25px]" />
          </DialogUserCreate>
        </div>
        <div className="h-8/12 w-full overflow-y-auto rounded-sm border-2 border-[#3B5394] shadow-lg">
          <div className="font-nunito sticky top-0 z-10 grid grid-cols-12 bg-white px-2 py-2 font-semibold shadow-sm">
            <p className="col-span-4">Nome</p>
            <p className="col-span-4">Email</p>
          </div>
          <div>
            {paginatedUsers.map(
              (u, key) =>
                u.id !== user?.id && (
                  <Card
                    className={`${key % 2 === 0 ? "bg-[#E4ED97]/70" : ""}`}
                    key={key}
                    firstColumn={u.name}
                    secondColumn={u.email}
                    dialogInformation={
                      <DialogUserInformation
                        title="Dados do usuário"
                        user={u}
                      >
                        <IoEyeOutline
                          className="bg-button-view cursor-pointer rounded-full p-0.5 text-white"
                          size={22}
                        />
                      </DialogUserInformation>
                    }
                    dialogUpdate={
                      <DialogUserUpdate
                        title="Editar usuário"
                        user={u}
                      >
                        <TiPencil
                          className="cursor-pointer rounded-full bg-blue-600 p-0.5"
                          size={20}
                          fill="white"
                        />
                      </DialogUserUpdate>
                    }
                    dialogDelete={
                      <DialogUserDelete user={u}>
                        <FaRegTrashCan
                          className="bg-destructive cursor-pointer rounded-full p-0.5"
                          size={20}
                          fill="white"
                        />
                      </DialogUserDelete>
                    }
                  />
                )
            )}
          </div>
        </div>
        <div className="my-5 flex h-10 items-center justify-between rounded-sm bg-[#005B46] px-2 py-2 md:h-14">
          <Pagination
            currentPage={userPage}
            lastPage={lastPage}
            onPageChange={setUserPage}
          />
        </div>
      </div>
    </div>
  );
}
