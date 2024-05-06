import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const harisumiranApi = createApi({
  reducerPath: "harisumiranApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
  }),
  tagTypes: ["Sliders", "Timing", "Events"],
  endpoints: (builder) => ({
    getAllSliders: builder.query({
      query: () => "/sliders",
      providesTags: ["Sliders"],
    }),
    getAllTimings: builder.query({
      query: () => "/timing",
      providesTags: ["Timing"],
    }),
    getAllAtimings: builder.query({
      query: () => "/timing/atiming",
      providesTags: ["Timing"],
    }),
    getAllTtimings: builder.query({
      query: () => "/timing/ttiming",
      providesTags: ["Timing"],
    }),
    getAllStimings: builder.query({
      query: () => "/timing/stiming",
      providesTags: ["Timing"],
    }),
    getEvents: builder.query({
      query: () => "/events",
      providesTags: ["Events"],
    }),
  }),
});

export const {
  useGetAllSlidersQuery,
  useGetAllTimingsQuery,
  useGetAllAtimingsQuery,
  useGetAllTtimingsQuery,
  useGetAllStimingsQuery,
  useGetEventsQuery,
} = harisumiranApi;
