import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const deezerCoreApi = createApi({
    reducerPath: 'deezerCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: (countryCode = "RS") => `/chart/${countryCode}`
        })
    })
});

export const { useGetTopChartsQuery } = deezerCoreApi;