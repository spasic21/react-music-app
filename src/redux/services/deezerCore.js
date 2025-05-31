import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const deezerCoreApi = createApi({
    reducerPath: 'deezerCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: (countryCode = "RS") => `/chart/${countryCode}`
        }),
        getArtistDetails: builder.query({
            query: (artistId) => `/artist/${artistId}`
        }),
        getArtistTopTracks: builder.query({
            query: ({artistId, limit = 10}) => `/artist/${artistId}/top?limit=${limit}`
        })
    })
});

export const {
    useGetTopChartsQuery,
    useGetArtistDetailsQuery,
    useGetArtistTopTracksQuery,
} = deezerCoreApi;