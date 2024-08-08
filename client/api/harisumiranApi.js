import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const harisumiranApi = createApi({
  reducerPath: "harisumiranApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://harisumiran-il.onrender.com/api",
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
    contacts: builder.mutation({
      query: ({ firstname, lastname, email, subject, message }) => ({
        url: "/contacts/send-email",
        method: "POST",
        body: { firstname, lastname, email, subject, message },
      }),
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
  useContactsMutation,
} = harisumiranApi;
