import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const harisumiranApi = createApi({
  reducerPath: "harisumiranApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
  }),
  tagTypes: ["Sliders"],
  endpoints: (builder) => ({
    getAllSliders: builder.query({
      query: () => "/sliders",
      providesTags: ["Sliders"],
    }),
  }),
});

export const { useGetAllSlidersQuery } = harisumiranApi;
