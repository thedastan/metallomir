import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    getItem: build.query<ITEMS.GetItemRes,ITEMS.GetItemReq>({
      query: () => ({
        url: `items`,
        method: "GET",
      }),
      providesTags: ["items"],
    }),

    getByIdItem: build.query<ITEMS.GetItemByIdRes,ITEMS.GetItemByIdReq>({
      query: (id) => ({
        url: `items/${id}`,
        method: "GET",
      }),
      providesTags: ["items"],
    }),
  }),
});

export const { useGetItemQuery ,useGetByIdItemQuery} = api;
