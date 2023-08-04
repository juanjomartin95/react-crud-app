import {baseApi} from "@/services/query/baseApi.ts";

export const pokemonApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: () => ({url: 'pokemon', method: 'get'}),
    }),
  }),
})

export const {useGetPokemonQuery} = pokemonApi;