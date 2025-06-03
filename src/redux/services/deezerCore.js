import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const deezerCoreApi = createApi({
    reducerPath: 'deezerCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://deezer-api-2717.onrender.com',
    }),

    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: (countryCode = "RS") => `/chart/${countryCode}`
        }),
        getTopChartsByGenre: builder.query({
            query: (genreId) => `/chart/${genreId}`
        }),
        getArtistDetails: builder.query({
            query: (artistId) => `/artist/${artistId}`
        }),
        getArtistTopTracks: builder.query({
            query: ({artistId, limit = 10}) => `/artist/${artistId}/top?limit=${limit}`
        }),
        getArtistAlbums: builder.query({
            query: ({artistId, limit = 10}) => `/artist/${artistId}/albums?limit=${limit}`
        }),
        getAlbum: builder.query({
            query: (albumId) => `/album/${albumId}`
        }),
        getSongsBySearch: builder.query({
            query: (q) => `/search?q=${q}`
        })
    })
});

export const {
    useGetTopChartsQuery,
    useGetTopChartsByGenreQuery,
    useGetArtistDetailsQuery,
    useGetArtistTopTracksQuery,
    useGetArtistAlbumsQuery,
    useGetAlbumQuery,
    useGetSongsBySearchQuery,
} = deezerCoreApi;