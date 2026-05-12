"use server";

import baseApi from "@/services/api";

export async function getNews(
  page: number = 1,
  perPage: number = 6,
  categoryId?: string,
  search?: string
) {
  try {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      per_page: perPage.toString(),
    });

    if (categoryId)
      queryParams.append("category_id", categoryId);
    if (search) queryParams.append("search", search);
    const resp = await baseApi.get(
      `/posts?${queryParams.toString()}`
    );
    return resp.data;
  } catch (error: any) {
    console.error(
      "Erro ao buscar notícias:",
      error.message
    );
    return null;
  }
}
