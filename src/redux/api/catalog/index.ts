
import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getCatalog: build.query<CATALOG.GetCatalogRes,CATALOG.GetCatalogReq>({
      query: () => ({
        url: `catalog`,
        method: "GET",
      }),
      providesTags: ["catalog"],
    }),
    getCatalogById: build.query<CATALOG.GetCatalogByIdRes,CATALOG.GetCatalogByIdReq>({
      query: (id) => ({
        url: `catalog/${id}`,
        method: "GET",
      }),
      providesTags: ["catalog"],
    }),

    forgot: build.mutation<CATALOG.PostForgotResponse, CATALOG.PostForgotRequest>({
      query: (forgotData) => ({
        url: "callbacks",
        method: "POST",
        body: forgotData,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {  useGetCatalogQuery,useGetCatalogByIdQuery,useForgotMutation } = api;
