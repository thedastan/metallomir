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
  }),
});

export const { useGetItemQuery } = api;
