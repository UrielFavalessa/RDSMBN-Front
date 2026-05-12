"use server";

import baseApi from "@/services/api";
import { revalidatePath } from "next/cache";

export async function createDocument(
  form: FormData,
  token: string
) {
  try {
    const resp = await baseApi.post(
      "/official-documents",
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    revalidatePath("/admin/official-documents");
    return resp.data;
  } catch (error: any) {
    const responseData = error.response?.data;
    let errorMessages: string[] = [];

    if (
      responseData?.errors &&
      typeof responseData.errors === "object"
    ) {
      errorMessages = Object.values(
        responseData.errors
      ).flat() as string[];
    } else if (responseData?.message) {
      errorMessages = [responseData.message];
    } else {
      errorMessages = ["Erro ao criar documento."];
    }
    return { errors: errorMessages };
  }
}

export async function updateDocument(
  form: FormData,
  id: string,
  token: string
) {
  form.append("_method", "PUT");

  try {
    const resp = await baseApi.post(
      `/official-documents/${id}`,
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    revalidatePath("/admin/official-documents");
    return resp.data;
  } catch (error: any) {
    const responseData = error.response?.data;
    let errorMessages: string[] = [];

    if (
      responseData?.errors &&
      typeof responseData.errors === "object"
    ) {
      errorMessages = Object.values(
        responseData.errors
      ).flat() as string[];
    } else if (responseData?.message) {
      errorMessages = [responseData.message];
    } else {
      errorMessages = ["Erro ao atualizar documento."];
    }
    return { errors: errorMessages };
  }
}

export async function deleteDocument(
  id: string,
  token: string
) {
  try {
    const resp = await baseApi.delete(
      `/official-documents/${id}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    revalidatePath("/admin/official-documents");
    return resp.data;
  } catch (error: any) {
    const responseData = error.response?.data;
    let errorMessages: string[] = [];

    if (
      responseData?.errors &&
      typeof responseData.errors === "object"
    ) {
      errorMessages = Object.values(
        responseData.errors
      ).flat() as string[];
    } else if (responseData?.message) {
      errorMessages = [responseData.message];
    } else {
      errorMessages = ["Erro ao deletar documento."];
    }
    return { errors: errorMessages };
  }
}
