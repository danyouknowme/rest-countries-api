import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://restcountries.com/v2';

const createRequest = (url) => ({ url });

export const countryApi = createApi({
    reducerPath: 'countryApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getAllCountries: builder.query({
            query: () => createRequest(`/all`)
        }),
        getCountriesByRegion: builder.query({
            query: (region) => createRequest(`/region/${region}`)
        }),
        getCountryByName: builder.query({
            query: (country) => createRequest(`/name/${country}`)
        })
    })
});

export const { useGetAllCountriesQuery, useGetCountriesByRegionQuery, useGetCountryByNameQuery } = countryApi;